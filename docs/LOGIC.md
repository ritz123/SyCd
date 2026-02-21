# SyCd – Application logic and architecture

This document explains how SyCd works: its purpose, data model, synthesis flow, and main code components.

---

## 1. Purpose

**SyCd** (Synthesis of Conceptual Designs) is a tool for **synthesizing conceptual designs for sensors**. A user describes:

- A **state change** of interest: which quantities are **inputs** (before) and **outputs** (after) for the sensor.
- Optional filters (domain, relation type, structure).

The system then **searches** a knowledge base (quantities, relations, conditions) to find **solution principles**: paths or loops in a graph that connect the chosen inputs to the outputs. Results are shown as conceptual solution structures that can be explored and filtered.

---

## 2. High-level architecture

- **Stack**: Meteor (backend + build), AngularJS 1.x (client), MongoDB (persistent store).
- **Persistence**: A single MongoDB collection **`Pdb`** (see `lib/persistentDb.js`) holds the **template database** (quantities, relations, conditions, equations). The server seeds it from `server/startup/sample_db.js` if empty.
- **Client**: Angular app **`isapPkg`** (see `client/lib/isapPkg.js`). It bootstraps after Meteor is ready and uses **angular-meteor** (`$meteor.collection(Pdb)`) so the UI reacts to DB changes.
- **Main services**: **TemplateDB** (in-memory template + graph + synthesis), **pathFinder** (path-based search), **loopFinder** (loop-based search).

---

## 3. Data model (template database)

The stored document has the shape `{ _id, db: { version, content } }`. **`db.content`** is the template database used for synthesis.

### 3.1 Main stores (under `db.content`)

| Store | Role |
|-------|------|
| **`qdb.content`** | **Quantity definitions**: id, name, domain, isVector, isNonNeg, isA (parent quantity), etc. |
| **`inf.content.relation.content`** | **Relations**: each has id, name, inputs/outputs (quantity refs), condName, relType (e.g. 0=custom, 3=integral), numBody, equations. |
| **`condDb.content`** | **Conditions**: link relations to a condition name; used for grouping and filtering. |
| **`condAttrsDb.content`** | **Condition attributes**: types (e.g. Happens, ThereIs, HasQProperty) and names used to describe conditions. |
| **`eqnDb` / `eqnDbMatlab`** | **Equations** associated with relation outputs (e.g. for derivation/code). |

### 3.2 Relation structure

A relation has:

- **inputs** / **outputs**: list of references to quantities (by quantity id and optional body id for multi-body systems).
- **condName**: condition id (links to condDb/condAttrsDb).
- **relType**: e.g. 0 = custom, 2 = derivative, 3 = integral; used in filtering (e.g. “exclude integral”).
- **numBody**: number of bodies (for multi-body decomposition).

Quantities live under **`inf`** (single “inference” / system level in the UI; “body” and “surr” are normalized to `inf` in code). The tree also has **qntyDb**, **condDb**, **condAttrsDb**, **eqnDb** for lookups and edits.

---

## 4. In-memory model (TemplateDB and TmplTree)

**TemplateDB** (`client/tmplDb.js`) is the central service. It:

- Loads the persisted DB into an in-memory **TmplTree** via **`addDb(dbJson)`** (e.g. from `Pdb.findOne()`).
- Builds **graphs** and runs **synthesis** (path/loop search) on that tree.

### 4.1 TmplTree (`TmplTree` in tmplDb.js)

- **`inf.quantity`** / **`inf.relation`**: TmplQnty and TmplRel objects keyed by id.
- **`qdb`**: TmplQ (quantity definitions).
- **`condDb`**, **`condAttrsDb`**, **`eqnDb`**, **`eqnDbMatlab`**: condition and equation data.
- **`getItem(assocId)`**: resolves an id like `/inf/quantity/Q1` to the TmplQnty/TmplRel.
- **`getQ(id)`**, **`findQ(name)`**, **`getParentQ(qId)`**: quantity lookups and hierarchy (e.g. for “parent quantity” in filters).
- **`prepareJSON()`**: serializes the tree back to the `db.content` shape for saving to Pdb.

### 4.2 TmplQnty and TmplRel

- **TmplQnty**: wraps a quantity in the tree; holds **inputs** / **outputs** (links to relations). **`branch()`** returns `'inf'` (body/surr normalized to inf).
- **TmplRel**: wraps a relation; has **inputs** / **outputs** (quantity refs), **condName**, **relType**, **numBody**, equation handling (**assignEqns**, **rmEqn**). **`destroy()`** / **`edit()`** update the tree and change counts.

### 4.3 Graph nodes (GNode, CompNode, CNodeTree)

For synthesis, the tree is turned into a **graph**:

- **GNode**: graph node for a quantity or relation (with **bodyId** for multi-body). Types: `'Quantity'` or `'Relation'`. Used to build **nodes** and **edges** for path/loop finders.
- **CompNode** / **CNodeTree**: component hierarchy (by body/id); used for grouping nodes and for visualization (e.g. which quantity/relation belongs to which component). **CompNode** has **gNodeIds**, **exportList**, **kids**; **CNodeTree** has **rootId**, **kids**, **addCompNode**, **root()**.

The graph is built from **inf.relation** and **inf.quantity**: relations define edges between quantity nodes; each node is assigned a **bodyId** and attached to the component tree.

---

## 5. Synthesis flow (end-to-end)

1. **State change (query)**  
   User chooses which quantities are **inputs** and **outputs** of the desired state change (before/after). This is stored in the synthesis controller as **stateChange.inputs** and **stateChange.outputs** (keys like `/inf/quantity/Q1` or per-component).

2. **Build graph**  
   TemplateDB builds a graph **gp** from the current TmplTree: **nodes** = quantity/relation GNodes, **edges** = links from relation inputs to outputs with **cost** (e.g. path length or config).

3. **Run search**  
   - **Path-based (direct sensing)**: one **input** quantity and one **output** quantity. Uses **pathFinder** to get **K shortest paths** (KSP) from input to output (priority-queue-based search). Config: **dsAlgo** (e.g. `'KSP'`), **numSolns**, **dMaxPathCost**, etc.
   - **Loop-based (feedback)**: one **input** quantity; loops that start and end at that quantity. Uses **loopFinder** with **BFS** (or DFS variants) to find loops. Config: **fsAlgo** (e.g. `'BFS'`), **fMaxDepth**, **numSolns**, etc.

4. **Solution objects**  
   Each result is a **solution** with:
   - **nodeIds** → **gNodes** → **nodes** (list of GNodes: quantities and relations in order).
   - **solnPath**: map of node id → node for quick lookup.
   - **cost** / **wtCost** for sorting and filtering.
   - Optional **cNodeTree** for component structure.

5. **Filtering and grouping**  
   - **Filters**: exclude integral, exclude black-box, max cost, relation must-include/must-exclude (from **viewSol**), domain/relation/structure indices.
   - **Groups**: solutions are grouped by **conceptual structure** (condition sequence), **relation sequence**, and **domain** for the UI (**solnGrps**, **solnRelGrps**, **solnDomainGrps**).
   - **Junk detection**: **isAJunkSoln** (e.g. duplicate quantity in path, quasi-duplicate relation, duplicate domain if not allowed) can mark or drop solutions.
   - **Feedback solutions**: **isFbSoln** identifies feedback-loop solutions (e.g. containing electric potential loop); **isFbSoln** / **isAJunkSoln** affect how solutions are presented.

6. **UI**  
   Synthesis controller exposes **solns**, **solnsRaw**, **solnGrps**, **solnRelGrps**, **solnDomainGrps**, and view/filter state. User can change filters, select groups, and inspect individual solutions (equations, structure, domain).

---

## 6. Search algorithms

### 6.1 pathFinder (`client/search/pathFinder.js`)

- **Priority queue**: Min-heap (lowest cost on top) with **push** / **pop** / **changePriority**; used for K-shortest-path exploration.
- **findPath(startId, endId, k)**: Returns up to **k** shortest paths from **startId** to **endId** in the graph. Uses the priority queue to expand by cost; when **endId** is reached, that path is recorded; continues until **k** paths are found or the queue is exhausted.
- **Config**: **dsAlgo** (e.g. `'KSP'`), **numSolns** (k), **dMaxPathCost**, **dMaxCNodes** influence how many paths are explored and returned.

### 6.2 loopFinder (`client/search/loopFinder.js`)

- **BFS-based loop search**: From a **startId** (quantity), explores the graph; when the traversal hits a node already on the current path, it detects a **loop**. Loops that end at a **Quantity** (or satisfy length/validity checks) are recorded as solutions.
- **bfsFS(gp, startId, config)**: Uses **bfs** internally; **paths** array holds { id, cost, key, nodeIds }. Constraints (e.g. minimum loop length, no self-loops) avoid trivial or invalid loops.
- **Config**: **fsAlgo** (`'BFS'`, `'DFS-k'`, `'DFS-Fs'`), **fMaxDepth**, **numSolns**, **fMaxCNodes** control depth and number of loop solutions.

---

## 7. Controllers and UI flow

### 7.1 AppCtrl (`client/app/ctrls/AppCtrl.js`)

- **Top-level** controller: sets **$rootScope.uiApp** (`'help'` | `'synthesis'`), **dbMode**, **TemplateDB**, **persistentDb** ($meteor.collection(Pdb)).
- **Pdb.find().observeChanges(added/removed/changed)**: On any change to Pdb, reloads the template DB into TemplateDB via **TemplateDB.addDb(res)** so the in-memory tree and version stay in sync with MongoDB.
- Provides shared lists: **domain**, **numBody**, **condAttrType**, **bool**, **dim3**, **range**, etc., used by synthesis and DB UIs.

### 7.2 DbCtrl (`client/db/ctrls/DbCtrl.js`)

- **Database editor**: manages **nbdb** (new/edit for quantities, relations, conditions, condition attributes).
- **CRUD**: add/edit/delete quantities (**addDbQ**, **rmDbQ**, **deleteDbQnty**), relations (**newR**, **editR**), conditions (**newCond**), condition attributes (**newCondAttr**, **editCondAttr**).
- **reloadDb**: calls **TemplateDB.addDb(Pdb.findOne())** to refresh the in-memory tree after edits.
- **Pdb.update(...)**: Persists the edited **db** back to MongoDB when the user saves.

### 7.3 SynthesisCtrl (`client/synthesis/ctrls/SynthesisCtrl.js`)

- **State change**: **buildQ4Synt** builds the list of candidate quantities for inputs/outputs from **TmplDb().inf.quantity**; **addQ2StChgInp** / **addQ2StChgOut** / **rmStateChangeInp** / **rmStateChangeOut** update **synb.stateChange** and **synb.stchg**.
- **Search**: **searchDb** → **searchDbProxy** (after a short delay) triggers the actual search (TemplateDB builds graph and calls pathFinder/loopFinder); results are stored and **$rootScope.$emit('jobDone', ret)** used to notify.
- **synb**: holds **stateChange**, **stchg**, **userConfig**, **thereIs**, **solnCart**, **viewSol**, **show**, **queryDb**, **solnReady**, **page**.
- **solutionGrps**: applies **uniqueNumbering**, **createGroups** (conceptual structure, relation, domain), **filterOutUseless** (**isValid**, **viewSol** filters), and sets **solns**, **solnGrps**, **solnRelGrps**, **solnDomainGrps**.
- **Filters**: **selectDomain**, **selectRel**, **selectStruct**, **initFilters**, **resetFilters**; **viewSol** (maxCost, excludeIntegral, excludeBbox, allRels must-include/must-exclude).

---

## 8. Configuration (userConfig)

**appmod.userConfig** (and **userConfigStatic**) in `client/lib/isapPkg.js`:

| Key | Meaning |
|-----|--------|
| **numSolns** | Max number of solutions to compute (e.g. 100). |
| **dMaxPathCost** | Max path cost for path-based search. |
| **fMaxDepth** | Max depth for loop search. |
| **fsAlgo** | Loop search: `'BFS'`, `'DFS-k'`, `'DFS-Fs'`. |
| **dsAlgo** | Path search: e.g. `'KSP'`. |
| **dMaxCNodes** / **fMaxCNodes** | Max component nodes (path/loop). |
| **enableSolnFilter** | Whether to apply **isValid** filtering. |
| **allowDupDomain** | Whether to allow duplicate domain in a solution. |
| **exploreFrontiers** | Optional exploration flag. |

These are copied into **$scope.synb.userConfig** and can be reset to **userConfigStatic** from the UI.

---

## 9. File map (logic-related)

| Path | Role |
|------|------|
| **lib/persistentDb.js** | Defines **Pdb** (Mongo collection). |
| **server/startup/start.js** | Seeds **Pdb** with sample_db if empty; allows insert/update/remove. |
| **server/startup/sample_db.js** | Sample **db.content** (qdb, relations, condDb, condAttrsDb, eqnDb, etc.). |
| **client/lib/isapPkg.js** | Angular module, bootstrap, **userConfig**, directives (e.g. **mathjaxBind**, **ngColorPicker**), shared helpers. |
| **client/app/ctrls/AppCtrl.js** | Top controller; Pdb observeChanges → **addDb**; navigation; shared scope. |
| **client/tmplDb.js** | **TemplateDB** service: TmplTree, TmplQnty, TmplRel, TmplCond, GNode, CompNode, CNodeTree; **addDb**; graph build; **findPath** / **findLoop**; **procEachSol**; **isAJunkSoln**, **isFbSoln**; **prepareJSON**. |
| **client/search/pathFinder.js** | **pathFinder** service: priority queue, **findPath** (K shortest paths). |
| **client/search/loopFinder.js** | **loopFinder** service: **bfsFS**, **bfs** (loop detection), path recording. |
| **client/synthesis/ctrls/SynthesisCtrl.js** | State change UI; run search; **solutionGrps**; filters and groups; solution display. |
| **client/db/ctrls/DbCtrl.js** | DB CRUD; reload/save Pdb; relation/quantity/condition forms. |
| **client/routes.js** | Router config (e.g. html5Mode). |

---

## 10. Summary

- **Pdb** holds the single template database; **TemplateDB.addDb()** loads it into a **TmplTree** (quantities, relations, conditions, equations).
- User defines a **state change** (inputs/outputs); TemplateDB **builds a graph** and runs **pathFinder** (KSP) or **loopFinder** (BFS loops) to get **solutions** (paths or loops of quantities and relations).
- Solutions are **filtered** (cost, integral/bbox, relation/domain) and **grouped** (structure, relation, domain); the UI shows them and allows drilling down. **DbCtrl** edits the same template DB and persists via **Pdb.update()**; **AppCtrl** keeps the in-memory tree in sync with Pdb via **observeChanges**.

This logic is what makes SyCd a sensor conceptual-design synthesis tool: it turns a high-level state-change query and a knowledge base into ranked, explorable solution principles.

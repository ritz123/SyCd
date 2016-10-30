var appmod = angular.module('isapPkg');

//----- The templateDb
appmod.service('TemplateDB', ['$http', '$rootScope', '$q', 'loopFinder', 'pathFinder',
    function ($http, $rootScope, $q, $lf, $pf) {
    var uiColor = {
        "Q"  :  {"fill" : '#ffccff',   "border" : '#ff7cff'}, // qnty
        "R"  :  {"fill" : '#cbff70',   "border" : '#abcf70'}, // rel
        "RA" :  {"fill" : '#ffccff',   "border" : '#ffccff'}, // rel auto
        "E"  :  {"fill" : '#d6d6c2',   "border" : '#d6d6c2'},
        "3"  :  {"fill" : '#C7CCBE',   "border" : '#0876AA'}, // func link
        "EC" :  {"fill" : '#7DB393',   "border" : '#7DB393'}, // tree edge 
        "CR" :  {"fill" : '#7DB393',   "border" : '#7DB393'}, // tree point
        "ES" :  {"fill" : '#ff0000',   "border" : '#ff0000'},
        "QS" :  {"fill" : '#ffff66',   "border" : '#ff9900'}, // qnty-soln
        "FS" :  {"fill" : '#ffff66',   "border" : '#ff9900'}, // func-soln
        "RS" :  {"fill" : '#ffff66',   "border" : '#ff9900'}, // rel-soln
        "6"  :  {"fill" : '#E8F8FA',   "border" : '#E8F8FA'}, // 
        "C"  :  {"fill" : '#EBF5FF',   "border" : '#68D0FC'}, // cluster 
        "C2" :  {"fill" : '#FFF0E0',   "border" : '#a3cc7a'}, // cluster 2-tier
        "F"  :  {"fill" : '#D0D4F7',   "border" : '#162CF3'}, // func 
        "2"  :  {"fill" : '#f8b9b9',   "border" : '#ff3333'}  // error
    };
    // changeCount variables are used to keep track of object change 
    // and DOM binding. 
    function CompNode(id, parentComp) {
        this.reFillAttrs = function (hide, gNodes, condDb) {
            var self = this;
            self.attrs = {};
            self.attrsConflict = {};
            angular.forEach(self.gNodeIds, function(nid){
                var nd = gNodes[nid];
                if (hide[nd.id] === undefined) {
                    self.fillAttrs(nd, condDb);
                }
            });
        };
        this.fillAttrs = function (gNode, condDb) {
            var self = this;
            // loop through all gNodes and get the list of condition attrs
            if ((gNode.getType() === 'Relation')&&(!!gNode.obj.condName)) {
                if (!!condDb[gNode.obj.condName]){
                    var tmpAttrs = condDb[gNode.obj.condName].getAllAttrs();
                    angular.forEach(tmpAttrs, function(a,k) {
                        if (self.attrs[k] === undefined) {
                            self.attrs[k] = a;
                        } else if (self.attrs[k] !== a){
                            self.attrsConflict[k] = a;
                        }
                    });  
                }
            }
        };
        this.findGNode = function (qId, gNodes, bId) {
            var self = this;
            var classType = qId;
            var ret = [];
            var el = this.exportList[classType];
            if (!el) {
                return ret;
            }
            // just give a matching type
            
            angular.forEach(el, function (s) {
                var gn = gNodes[s];
                if (bId !== undefined) {
                    // need to filter with body Id too
                    if (bId === gn.bodyId) {
                        ret.push(gn.id);
                    }
                } else {
                    ret.push(gn.id);
                }
            });
            return ret;
        };
        this.exportGNode = function (gn) {
            var self = this;
            if (!this.exportList[gn.obj.id]) {
                this.exportList[gn.obj.id] = {};
            }
            this.exportList[gn.obj.id][gn.id] = gn.id;
            // tell its parent node to broadcast
            if (!!this.parentComp) {
                this.parentComp.exportGNode(gn);
            }
        };  
        this.rmExportGNode = function (gn) {
            var self = this;
            if (!!this.parentComp) {
                this.parentComp.rmExportGNode(gn);
            }
            delete this.exportList[gn.obj.id][gn.id];
        };
        this.addGNode = function (gn) {
            var self = this;
            this.gNodeIds[gn.id] = gn.id;
            this.exportGNode(gn);
        };
        this.rmGNode = function (gn) {
            var self = this;
            this.rmExportGNode(gn);
            delete this.gNodeIds[gn.id];
        };
        this.isLeafNode = function () {
            return (!appmod.keys(this.kids).length);
        };
        this.copy = function () {
            var self = this;
            var deep = {
                'kids': angular.copy(self.kids),
                'attrs': angular.copy(self.attrs),
                'attrsConflict': angular.copy(self.attrsConflict),
                'gNodeIds': angular.copy(self.gNodeIds),
                'exportList': angular.copy(self.exportList)
            };
            // shallow copy
            return jQuery.extend({}, this, deep);
        };

        // Ctor
        this.id = id;
        this.parentComp = parentComp;
        // compNode kids
        this.kids = {};
        this.exportList = {};
        this.gNodeIds = {};
        this.gHash = {};
        this.attrs = {};
        this.attrsConflict = {};
        this.mustShow = false;
        // bind with parent node
        if (!!this.parentComp) {
            // each node will have a set of components 
            // corresponding to the bodyId, which is 1-based.
            var len = appmod.length(this.parentComp.kids) + 1;
            this.parentComp.kids[len] = id; 
        }
    }
    function CNodeTree() {
        this.addCompNode = function (whereId, prefId) {
            var self = this;
            var parentNode = null;
            if (!!whereId) {
                parentNode = self.kids[whereId];
                if (!parentNode) {
                    console.log('Error: missing whereId');
                }
            }
            var id = self.lastId + 1;
            if (!!prefId){
                id = prefId;
            }
            self.kids[id] = new CompNode (id, parentNode);
            self.lastId = id;
            if (!parentNode) {
                self.rootId = id;
            }
            return self.kids[id];
        };
        this.copy = function () {
            var self = this;
            // use heap memory
            var obj = new Object();
            angular.forEach(self.kids, function (kd, ii) {
                obj[ii] = kd.copy();
            });
            var deep = {
                'kids': obj
            };
            // shallow copy
            return jQuery.extend({}, this, deep);
        };
        this.root = function () {
            var self = this;
            return self.kids[self.rootId];
        }; 
        this.kids = {};
        this.rootId;
        this.lastId = 0;
    }
    function GNode(key, classType) {
        this.destroy = function () {
            // also remove from the component tree
        };
        this.getName = function () {
            var name;
            switch(this.obj.getType()){
                case 'TmplQnty':
                    name = this.obj.get().name;
                    break;
                case 'TmplRel':
                    name = this.obj.name;
                    break;
            }
            return name;
        };
        this.getType = function () {
            var name;
            switch(this.obj.getType()){
                case 'TmplQnty':
                    name = 'Quantity';
                    break;
                case 'TmplRel':
                    name = 'Relation';
                    break;
            }
            return name;
        };
        // sanitize str for gv
        this.gvNodeName = function (str) {
            return 'n_' + str.replace(/[^a-zA-Z0-9]/g,'_');
        };
        this.gvLinkName = function(s_hdl, d_hdl){
            return this.gvNodeName(s_hdl) + '->' + this.gvNodeName(d_hdl);
        };
        this.canInhibit = function (soln) {
            var lst = [];
            var self = this;
            if (this.obj.getType() !== "TmplRel") { return false;}
            // relations that are not on the solution path and have some
            // conditions can be inihibited. TODO
            if (!!soln.solnPath[self.id] || !self.obj.condName) {
                return false;
            }
            return true;
        };
        
        this.copy = function () {
            var self = this;
            var deep = {
                'inputs': angular.copy(self.inputs),
                'outputs': angular.copy(self.outputs)
            };
            // shallow copy
            return jQuery.extend({}, this, deep);
        };
        this.branch = function () {
            return this.obj.branch();
        };
        this.getOutput = function (nId) {
            var self = this;
            var ret = null;
            angular.forEach(self.outputs, function (out) {
                if (out.node === nId) {
                    ret = out;
                }
            });
            return ret;
        };
        // a graph traversal node
        // Ctor
        this.id = key;
        this.obj = classType;
        // 0 (white), 1(grey), 2(black) 
        this.color = 0;
        if (this.obj.cost === undefined) {
            // quantity have no cost. so add it here
            this.cost = 0;
        } else {
            this.cost = this.obj.cost;
        }

        this.inputs = {};
        this.outputs = {};
    }
    function TmplCondAttr(tree, id, obj) {
        var self = this;
        self.tree = function () {
            return tree;
        };
        self.edit = function (obj) {
            this.name = obj.name;
            this.desc = obj.desc;
            this.condAttrType = obj.condAttrType;
            this.change();
        };
        self.change = function (obj) {
            self.tree().changeCount.cond++;
            self.tree().changeCount.all++;
        };
        self.prepareJSON = function () {
            var ret = {
                'name' : this.name,
                'desc' : this.desc,
                'condAttrType' : this.condAttrType
            };
            return ret;
        };
        self.destroy = function () {
            self.change();
            delete self.tree().condAttrsDb[self.id];
        };
        // Ctor
        self.id = id;
        self.name = obj.name;
        self.desc = obj.desc || '';
        self.condAttrType = obj.condAttrType || '';
        self.change();
    }
    function TmplCond(tree, id, obj) {
        var self = this;
        self.tree = function () {
            return tree;
        };
        self.getType = function () {
            return 'TmplCond';
        };
        //-------
        self.getAllAttrs = function (fltr) {
            var yy = {};
            if (!!self.isA) {
                yy = self.tree().condDb[self.isA].getAllAttrs(fltr);
            }
            angular.forEach(self.property, function (v,k){
                if (!!fltr && fltr === self.tree().condAttrsDb[k].condAttrsType) {
                    yy[k] = v;
                } else {
                    yy[k] = v;
                }
            });
            return yy;
        };
        self.showAttrs = function (fltr) {
            // for display purpose
            var obj = {
                'id' : self.id,
                'name' : self.name,
                'property' : self.getAllAttrs(fltr),
                'has' : {}
            };
            if (!!self.has) {
                obj.has = angular.copy(self.has);
            }
            return obj;
        };
        self.linkRel = function (id) {
            self.rels[id] = id;
        };
        self.unlinkRel = function (id) {
            delete self.rels[id];
        };
        //-------
        self.change = function (obj) {
            self.name = obj.name;
            if (obj.property) {
                self.property = obj.property;
            }
            self.tree().changeCount.cond++;
            self.tree().changeCount.all++;
        };
        self.prepareJSON = function () {
            var ret = {
                'id' : this.id,
                'name' : this.name,
                'isA' : this.isA,
                'property' : this.property,
                'has' : this.has,
            };
            return ret;
        };
        self.destroy = function () {
            //self.delinkQ();
            self.tree().changeCount.cond++;
            self.tree().changeCount.all++;
            delete self.tree().condDb[self.id];
        };
        // Ctor
        self.id = id;
        self.name = obj.name;
        // inherit property
        self.isA = obj.isA || '';
        // override property
        self.property = obj.property || {};
        // container
        self.has = obj.has || {};
        self.rels = {};
        self.tree().changeCount.cond++;
        self.tree().changeCount.all++;
    }
    function TmplQ(tree, key, obj) {
        var self = this;
        self.tree = function () {
            return tree;
        };
        self.getType = function () {
            return 'TmplQ';
        };
        self.isAType = function (qId) {
            var ptr = self;
            while(!!ptr.isA) {
                if (ptr.isA === qId) return true;
                ptr = self.tree().qdb[ptr.isA];
            }
            return false;
        };
        //---------------------------------

        self.change = function () {
            self.tree().changeCount.Q++;
            self.tree().changeCount.all++;
        };
        self.suggestDName = function () {
            return 'D(' + self.name + ')';
        };
        //---------------------------------
        self.edit = function (obj) {
            self.rmAliasGrp();
            self.name = obj.name;
            self.desc = obj.desc;
            self.isA = obj.isA;
            self.domain = obj.domain;
            self.isVector = obj.isVector;
            self.isNonNeg = obj.isNonNeg;
            self.aliasGrp = obj.aliasGrp;
            self.registerAliasGrp();
            self.change();
        };
        self.registerAliasGrp = function () {
            if (!self.tree().qAliasGrpDb[self.aliasGrp]) {
                self.tree().qAliasGrpDb[self.aliasGrp] = {};
            } 
            self.tree().qAliasGrpDb[self.aliasGrp][self.id] = {
                'id' : self.id
            };
        };
        self.rmAliasGrp = function () {
            delete self.tree().qAliasGrpDb[self.aliasGrp][self.id];
            if (!appmod.length(self.tree().qAliasGrpDb[self.aliasGrp])) {
                delete self.tree().qAliasGrpDb[self.aliasGrp];
            }
        };
        //------- user interaction ---
        self.destroy = function () {
            if (!!self.isPermanent) return;
            self.tree().changeCount.Q++;
            self.tree().changeCount.all++;
            self.rmAliasGrp();
            var parent = self.tree();
            delete parent.qdb[self.id];
        };
        // prepare a trimmed down version of the attributes 
        // for serialization
        self.prepareJSON = function () {
            var ret = {
                'name' : this.name,
                'desc' : this.desc,
                'domain' : this.domain,
                'isVector' : (this.isVector + ''),
                'isNonNeg' : (this.isNonNeg + ''),
                'isA' : (!!this.isA ? this.isA:''),
                'aliasGrp' : this.aliasGrp
            };
            return ret;
        };
        // Ctor
        self.id = key;
        self.name = obj.name;
        self.isA = obj.isA;
        self.aliasGrp = obj.aliasGrp || self.id;
        self.desc = obj.desc;
        self.domain = obj.domain;
        self.isVector = (obj.isVector + '') === 'true' ? true : false;
        self.isNonNeg = (obj.isNonNeg + '') === 'true' ? true : false;
        self.isPermanent = (obj.isPermanent + '') === 'true' ? true : false;
        self.change();
        self.registerAliasGrp();
        this.copy = function () {
            // deep copy
            return angular.copy(this);
        };
    }
    function TmplQnty(tree, id, assocId, obj) {
        var self = this;
        self.tree = function () {
            return tree;
        };
        self.getType = function () {
            return 'TmplQnty';
        };
        self.get = function () {
            return self.tree().qdb[self.id];
        };
        self.copy = function () {
            var deep = {};
            // shallow copy
            return jQuery.extend({}, self, deep);
        };
        self.branch = function () {
            var r_id = self.assocId.split('/');
            return (r_id[1]); 
        };
        //------- user interaction ---
        self.destroy = function () {
            var parent = self.tree();
            var r_id = self.assocId.split('/');
            self.tree().changeCount[r_id[1]].Qnty++;
            self.tree().changeCount.all++;
            delete self.tree().qntyDb[self.assocId];
            delete parent[r_id[1]].quantity[r_id[3]];
        };
        self.change = function () {
            self.tree().changeCount[self.branch()].Qnty++;
            self.tree().changeCount.all++;
        }
        //-----
        self.prepareJSON = function () {
            return {};
        };
        // Ctor
        self.id = id;
        self.assocId = assocId;
        self.tree().qntyDb[self.assocId] = self;
        // Note the difference.
        // outputs of Rel is inputs to Qnty
        self.inputs = {};
        // outputs of Qnty is inputs for Rel
        self.outputs = {};
        self.change();
    }
    function TmplRel(tree, id, assocId, obj) {
        var self = this;
        self.tree = function () {
            return tree;
        };
        self.getType = function () {
            return 'TmplRel';
        };
        self.rmEqn = function (oo) {
            if ((oo.eqn !== 'eq_conn')
                && (oo.eqn !== 'eq_derivative')
                && (oo.eqn !== 'eq_integral')){
                delete self.tree().eqnDb[oo.eqn]; 
                delete self.tree().eqnDbMatlab[oo.eqn]; 
                oo.eqn = '';
            }
        };
        self.isBodyCompliant = function () {
            // check if there no inputs from any sub-components.
            return (self.numBody === 0);
        }; 
        //------- user interaction ---
        self.destroy = function () {
            var cond = self.tree().condDb[self.condName];
            if (!!cond) {
                cond.unlinkRel(self.id);
            }
            // remove all eqns
            angular.forEach(self.outputs, function (oo) {
                self.rmEqn(oo);
            });
            angular.forEach(self.inputs, function (ii) {
                var qref = ii.quantity;
                var inp = self.tree().getItem(qref);
                if (!!inp && !!inp.outputs[self.assocId]) {
                    // deregister with Qnty
                    delete inp.outputs[self.assocId];
                }
            });
            angular.forEach(self.outputs, function (qref) {
                var out = self.tree().getItem(qref.quantity);
                if (!!out && !!out.inputs[self.assocId]) {
                    // deregister with Qnty
                    delete out.inputs[self.assocId];
                }
            });
            self.tree().deRegisterRel(self);
            var parent = self.tree();
            var r_id = self.assocId.split('/');
            self.tree().changeCount[r_id[1]].Rel++;
            self.tree().changeCount.all++;
            delete parent[r_id[1]].relation[r_id[3]];
        };

        self.change = function () {
            self.tree().changeCount[self.branch()].Rel++;
            self.tree().changeCount.all++;
        };

        //------
        self.assignEqns = function () {
            var count = 1;
            angular.forEach(self.outputs, function(o) {
                var str = self.id + '_' + count;
                if (!o.eqn ||  
                    ((o.eqn !== 'eq_conn')
                    && (o.eqn !== 'eq_derivative')
                    && (o.eqn !== 'eq_integral')))
                {
                    var old = o.eqn;
                    o.eqn = 'eq_' + str;
                    self.tree().eqnDb[o.eqn] = angular.copy(self.tree().eqnDb[old]);
                    self.tree().eqnDbMatlab[o.eqn] = angular.copy(self.tree().eqnDbMatlab[old]);
                }
                count++;
            });
        };
        self.copy = function () {
            var deep = {
                'inputs': angular.copy(self.inputs),
                'outputs': angular.copy(self.outputs)
            };
            // shallow copy
            return jQuery.extend({}, self, deep);
        };
        self.branch = function () {
            var r_id = self.assocId.split('/');
            return (r_id[1]); 
        };
        self.edit = function (obj) {
            self.tree().deRegisterRel(self);
            // edit
            self.name = obj.name;
            self.desc = obj.desc;
            self.isBlkBox = obj.isBlkBox;
            if (obj.condName != self.condName) {
                var cond = self.tree().condDb[self.condName];
                if (!!cond) {
                    cond.unlinkRel(self.assocId);
                }
                self.condName = obj.condName;
                cond = self.tree().condDb[self.condName];
                if (!!cond) {
                    cond.linkRel(self.assocId);
                }
            }
            self.relType = obj.relType;
            self.numBody = obj.numBody;
            self.inputs = obj.inputs;
            // remove the eqns
            angular.forEach(self.outputs, function (o) {
                self.rmEqn(o);
            });
            self.outputs = obj.outputs;

            // set the network
            angular.forEach(self.inputs, function (ii) {
                var qref = ii.quantity;
                var inp = self.tree().getItem(qref);
                if (!inp) {
                    console.log('Error: missing ref:', qref);
                }
            });
            angular.forEach(self.outputs, function (oo) {
                var qref = oo.quantity;
                var out = self.tree().getItem(qref);
                if (!out) {
                    console.log('Error: missing ref:', qref);
                }
            });
            self.assignEqns();
            self.reRegister();
        };
        self.reRegister = function () {
            self.sig = self.tree().mkRelSig(self);
            self.tree().registerRel(self);
            self.tree().changeMinorVersion();
            self.change();
        };
        self.isComplete = function () {
            // check if all necessary attrs are there
            // the control flag is the boolean type of input
            var ret = true;
            angular.forEach(self.inputs, function (inp) {
                if (!inp.control && !inp.symbol) {
                    ret = false;
                }
            });
            if (ret) {
                angular.forEach(self.outputs, function (out) {
                    if (!out.symbol || !self.tree().eqnDb[out.eqn]) {
                        ret = false;
                    }
                });
            }
            return ret;
        };
        self.isDefault = function () {
            var inp = [];
            var rel = this;
            angular.forEach(rel.inputs, function (ii) {
                inp.push(ii.symbol);
            });
            var inps = inp.join(',');
            var ret = false;
            angular.forEach(rel.outputs, function (o) {
                var str = 'f' + '('+ inps + ',' + o.symbol +') = 0';
                if (!ret) {
                    if (rel.tree().eqnDb[o.eqn] === str) {
                        ret = true;
                    }
                }
            });
            return ret;
        };
        self.setDefaultEqn = function () {
            var inp = [];
            var mInp = [];
            var rel = this;
            angular.forEach(rel.inputs, function (ii) {
                inp.push(ii.symbol);
                mInp.push(ii.mSymbol);
            });
            var inps = inp.join(',');
            var mInps = mInp.join(',');
            angular.forEach(rel.outputs, function (o) {
                rel.tree().eqnDb[o.eqn] = 'f'  + '('+ inps + ',' + o.symbol +') = 0';
                rel.tree().eqnDbMatlab[o.eqn] = 'f'  + '('+ mInps + ',' + o.mSymbol +') = 0';
            });
        };
        self.prepareJSON = function () {
            var ret = {
                'name' : this.name,
                'desc' : this.desc,
                'condName' : this.condName,
                'relType' : this.relType,
                'cost' : this.cost,
                'isBlkBox' : this.isBlkBox,
                'numBody' : this.numBody,
                'inputs' : this.inputs,
                'outputs' : this.outputs
            };
            return ret;
        };
        // Ctor
        self.id = id;
        self.assocId = assocId;
        self.name = obj.name;
        self.desc = obj.desc || obj.name;
        
        // 0 = custom, 1 = Conn, 2 = Derivative/3=intergral
        self.relType = obj.relType || 0;
        // all relations have cost.
        self.cost = obj.cost;
        self.isBlkBox = obj.isBlkBox || false;
        // self.inputs = obj.inputs;
        // self.outputs = obj.outputs;
        self.inputs = {};
        self.outputs = {};
        self.numBody = obj.numBody || 0;
        var cond = self.tree().condDb[obj.condName];
        if (!!obj.condName) {
            if (!!cond) {
                self.condName = obj.condName;
                cond.linkRel(self.assocId);
            } else {
                self.condName = '';
                console.log('Error: missing cond:', obj.condName);
            }
        } else {
            self.condName = obj.condName;
        }
        // set the network
        angular.forEach(obj.inputs, function (ii, kk) {
            var qref = ii.quantity;
            var inp = self.tree().getItem(qref);
            if (!inp) {
                console.log('Error: missing ref:', qref);
            }
            self.inputs[kk] = ii; 
            if (!ii.mSymbol) {
                ii.mSymbol = ii.symbol;
            }
        });
        angular.forEach(obj.outputs, function (oo, kk) {
            var qref = oo.quantity;
            var out = self.tree().getItem(qref);
            if (!out) {
                console.log('Error: missing ref:', qref);
            }
            self.outputs[kk] = oo;
            if (!oo.mSymbol) {
                oo.mSymbol = oo.symbol;
            }
            if (self.relType === 2) {
                out.isDerivative = true;
            }
        });

        self.sig = self.tree().mkRelSig(self);
        self.tree().registerRel(self);
        self.change();

        self.assignEqns();
    }
    function TmplTree(jsonObj) {
        // var self = this;
        // to fetch any item from the internal db
        this.getItem = function (hdl) {
            var self = this;
            if (!hdl) {
                return null;
            }
            var hdl_s = hdl.split('/');
            var ptr = self;
            var err = false;
            angular.forEach(hdl_s, function (s) {
                if (!!s) {
                    // all goes to the same path
                    if ((s === 'surr')||(s === 'body')) {
                        s = 'inf';
                    }
                    if (!ptr[s]) {
                        err = true;
                    } else {
                        ptr = ptr[s];
                    }
                }
            });
            if (err) {
                return null;
            }
            return ptr;
        };
        // get the quantity
        this.getQ = function (id) {
            return this.getItem('/qdb/' + id);
        };
        this.findQ = function (str) {
            var self = this;
            var found = false;
            var ret;
            if (str) {
                angular.forEach(this.qdb, function (obj) {
                    if (obj.name.toLowerCase() === str.toLowerCase()) {
                        found = true;
                        // break is done by return
                        ret = obj;
                        return;
                    }
                });
            }
            return (!!found? ret : '');
        };
        this.getParentQ = function (qId) {
            // find the top most parent of a quantity
            var p = qId;
            for (var q = self.getQ(p).isA; !!q ; q = self.getQ(p).isA) {
                p = q;
            };
            return p;
        };
        this.isComplete = function () {
            var self = this;
            var ret = true;
            angular.forEach (self.inf.relation, function (rel) {
                if (!rel.isComplete()) {
                    ret = false;
                    return;
                }
            });
            return ret;
        };
        this.changeMinorVersion = function () {
            var self = this;
            var d = new Date();
            var n = d.valueOf();
            self.version.minor = n;
        };
        //----------- user interactions ----
        this.addQ = function (obj) {
            var self = this;
            var id = this.mkQId();
            this.qdb[id] = new TmplQ(self, id, obj);
            return id;
        };
        this.addCond = function (obj) {
            var self = this;
            var id = self.mkCondId();
            if (!self.condDb[id]) {
                self.condDb[id] = new TmplCond(self, id, obj);
            }
            return id;
        };
        this.addCondAttr = function (obj) {
            var self = this;
            var id = self.mkCondAttrId();
            if (!self.condAttrsDb[id]) {
                self.condAttrsDb[id] = new TmplCondAttr(self, id, obj);
            }
            return id;
        };
        this.addQnty = function (id, isBody) {
            var self = this;
            if (isBody) {
            } else {
                if (!this.inf.quantity[id]) {
                    this.inf.quantity[id] = new TmplQnty(self, id, '/inf/quantity/' + id, {});
                }
            }
        };
        this.addRel = function (obj, isBody) {
            var self = this;
            // no uniqueness check required here.
            var id = this.mkRelId(isBody);
            if (isBody) {
            } else {
                this.inf.relation[id] = new TmplRel(self, id, '/inf/relation/' + id, obj);
            }
            return id;
        };
        this.editRel = function (obj, isBody) {
            var self = this;
            var id = obj.id;
            if (isBody) {
            } else {
                this.inf.relation[id].edit(obj);
            }
            return id;
        };

        //-----------
        this.mkCondOldId = function (name) {
            return name.replace(/[\s,_']*/g,'').toLowerCase();
        }
        this.mkCondId = function () {
            var self = this;
            var len = (appmod.keys(this.condDb)).length;
            var newId = 'C' + len;
            while (!!this.condDb[newId]) {
                len++;
                newId = 'C' + len;
            }
            return newId;
        };
        
        this.mkCondAttrId = function () {
            var self = this;
            var len = (appmod.keys(this.condAttrsDb)).length;
            var newId = 'A' + len;
            while (!!this.condAttrsDb[newId]) {
                len++;
                newId = 'A' + len;
            }
            return newId;
        };
        this.mkQId = function () {
            var self = this;
            var len = (appmod.keys(this.qdb)).length;
            var newId = 'Q' + len;
            while (!!this.qdb[newId]) {
                len++;
                newId = 'Q' + len;
            }
            return newId;
        };
        this.mkRelId = function (isBody) {
            var self = this;
            var db = self.inf.relation;
            var prefix = 'R';
            if (isBody){
                prefix += 'b_';
            } else {
                prefix += 'i_';
            }
            var len = (appmod.keys(db)).length;
            var newId =  prefix + len;
            while (!!db[newId]) {
                len++;
                newId = prefix + len;
            }
            return newId;
        };
        //------
        this.findCondUsingCondAttr = function (obj) {
            var self = this;
            var lst = {};
            angular.forEach(self.condDb, function(cond) {
                if (!!cond.property[obj.id]) {
                    lst[cond.id] = cond;
                }
            });
            return lst;
        };
        this.mkRelSig = function (obj) {
            var self = this;
            // uniqueness check. sorted inputs, condition name
            var lst = [];
            var stk;
            angular.forEach(obj.inputs, function (inp) {
                stk = inp.quantity.split('/');
                kk = stk[1].charAt(0) + ':' + stk[3];
                lst.push(kk);
            });
            var ret = lst.sort().join('-') + '!' + obj.condName; 
            return ret;
        };
        this.isUniqueR = function (rel) {
            var self = this;
            var sig = self.mkRelSig(rel);
            var dd = self.getDbRelItemSig(sig);
            if (!!dd && !rel.id) {
                return false;
            }
            return true;
        };
        this.isUniqueRname = function (v_name) {
            var self = this;
            // need to look at a hash
            return !self.relDbName[v_name];
        };
        //---------
        
        this.getDbRelItemSig = function (sig) {
            var self = this;
            var stk = sig.split('!');
            if (!!self.relDb[stk[0]]) {
                return self.relDb[stk[0]][stk[1]];
            }
        };
        this.registerRel = function (rel) {
            var self = this;
            var stk = rel.sig.split('!');
            if (!self.relDb[stk[0]]) {
                self.relDb[stk[0]] = {};
            }
            self.relDb[stk[0]][stk[1]] = rel;
            self.relDbName[rel.name] = rel;
        };
        this.deRegisterRel = function (rel) {
            var self = this;
            var stk = rel.sig.split('!');
            if (!!self.relDb[stk[0]]) {
                delete self.relDb[stk[0]][stk[1]];
            }
            delete  self.relDbName[rel.name];
        };
        //------------
        this.getMatchingTmplR = function (flt) {
            var self = this;
            // use the inputs to look into the relDb.
            var ret_inp = [];
            var id = self.mkRelSig({'condName':flt.condName, 'inputs':flt.inputs});
            var stk = id.split('!');
            var rels = self.relDb[stk[0]];
            if (!rels) {
                return ret_inp;
            }
            angular.forEach(rels, function (rel) {
                ret_inp.push(rel);
            });
            return ret_inp;
        };
        this.isObjEmpty = function (oo) {
            var self = this;
            var ret = true;
            angular.forEach(oo, function (aa) {
                ret = false;
                return;
            });
            return ret;
        };
        this.reduce = function (oo) {
            var self = this;
            angular.forEach(oo, function (ooo, k) {
                if (typeof ooo === 'object') {
                    oo[k] = self.reduce(ooo);
                }
            });
            var del = [];
            angular.forEach(oo, function (ooo, k) {
                if ((typeof oo[k] === 'object')
                        && (self.isObjEmpty(oo[k]))) {
                    del.push(k);
                }
            });
            angular.forEach(del, function (aa) {
                delete oo[aa];
            });
            return oo;
        };
        //-------
        this.queryAssocQ = function (assocId) {
            var self = this;
            // called during deletion of a Q
            // check if the assoc-Id is referred by any relation
            var ret = [];
            angular.forEach(self.inf.relation, function (rel) {
                var found = false;
                angular.forEach(rel.inputs, function (inp) {
                    if (inp.quantity === assocId) {
                        found = true;
                    }
                });
                if (found) {
                    ret.push(rel);
                } else {
                    angular.forEach(rel.outputs, function (o) {
                        if (o.quantity === assocId) {
                            found = true;
                        }
                    });
                    if (found) {
                        ret.push(rel);
                    }
                }
            });
            return ret;
        };
        this.getAllRel = function () {
            var self = this;
            var lst = [];
            angular.forEach(self.inf.relation, function (rel) {
                lst.push (rel);
            });
            return lst;
        };
        //--------------------

        this.isFbSoln = function (soln) {
            var self = this;
            // the feedback loop should have Electric potential 
            var ElecId = 'Q25';
            // duplicate qunty/rel 
            // is not allowed in the same component
            var foundElecId = false;
            var lastIdx =  soln.nodes.length - 1;
            soln.nodes[lastIdx].isLast = true;
            // check if electric-potential is present in the
            // feedback loop
            while (!!lastIdx) {
                lastIdx --;
                var nd = soln.nodes[lastIdx];
                if (!!nd.isLast) {
                    break;
                }
                if (nd.getType() === 'Quantity') {
                    if (nd.obj.id === ElecId) {
                        foundElecId = true;
                    }
                }
            };
            if (!foundElecId || !(lastIdx > 0)) {
                delete soln.nodes[soln.nodes.length - 1].isLast;
                return false;
            }
            // create a modified soln nodes list for the 
            // direct sensing part of the FB solution
            var dupNodes = [];
            i = 0;
            while (i < soln.nodes.length) {
                dupNodes.push(soln.nodes[i]);
                if (!!soln.nodes[i].isLast) {
                    break;
                }
                i ++;
            };
            delete soln.nodes[soln.nodes.length - 1].isLast;
            var preNodes = soln.nodes;
            soln.nodes = dupNodes;
            // remove duplicate relations etc
            if (!!self.isAJunkSoln(soln, false)) {
                soln.nodes = preNodes;
                return false;
            }
            soln.nodes = preNodes;
            return true;
        };
        

        this.isAJunkSoln = function (soln, flag) {
            var self = this;
            function isDupQnty (soln, flag) {
                var nQnty = [];
                var inQnty = {};
                var prevQnty = '';
                angular.forEach(soln.nodes, function (nd) {
                    if (nd.getType() === 'Quantity') {
                        prevQnty = nd;
                        nQnty.push(nd);
                    } else { 
                        if (!flag) {
                            // direct sensing case
                            angular.forEach(nd.inputs, function (ii) {
                                var inp = soln.gNodes[ii.node];
                                if (prevQnty.obj.id !== inp.obj.id) {
                                    inQnty[inp.obj.id] = inp;
                                }
                            });
                            
                        } 
                    }
                });

                // avoid the last quantity. So it can be used 
                // for both type of designs
                if (!!flag) {
                    nQnty.pop();
                } else {
                    var foundDType = false;
                    // merge the input quantities to the quantities array
                    angular.forEach(inQnty, function (nd) {
                        if (!!nd.obj.isDerivative) {
                            foundDType = true;
                        }
                        nQnty.push(nd);
                    });
                    if (foundDType) {
                        // derivative type of inputs are not practical.
                        return true;
                    }
                }
                var hq = {};
                var found = false;
                // look for duplicate quantity
                angular.forEach(nQnty, function (q) {
                    var qq = q.obj.id;
                    if (!!hq[qq]) {
                        found = true;
                    } else {
                        hq[qq] = true;
                    }
                });
                return found;
            }
            
            // two relations are quasi-dup if the set of input and output
            // quantities are actually the same (parent or sibling)
            function isQuasiDupRel (soln) {
                // bundle all relations
                var nRels = [];
                angular.forEach(soln.nodes, function (nd) {
                    if (nd.getType() === 'Relation') {
                        nRels.push(nd);
                    }
                });
               
                function getpId(nd) {
                    // for a given gnode-qnty find the id of the root parent 
                    var q = soln.gNodes[nd].obj.get()
                    var pq = self.getParentQ(q.id);
                    return pq;
                }

                function fx(tRel) {
                    // form a set of quantities for tRel
                    var tQnty = [];
                    angular.forEach(tRel.inputs, function(ii) {
                        // find the gnode which is the root parent of 
                        // each quantity in this body
                        tQnty.push(getpId(ii.node));
                    });
                    angular.forEach(tRel.outputs, function(ii) {
                        tQnty.push(getpId(ii.node));
                    });
                    tQnty = tQnty.sort();
                    return tQnty;
                }

                function isEqual(lAry, rAry) {
                    // match if the two arrays are same
                    if (lAry.length != rAry.length) {
                        return false;
                    }
                    var ret = true;
                    for (var i = 0; i < lAry.length; i ++) {
                        if (lAry[i] != rAry[i]) {
                            ret = false;
                            break;
                        }
                    }
                    return ret;
                }
                
                var matched = false;
                var len = nRels.length;
                if (len > 2) {
                    // using head-tail logic
                    var tail = 0;
                    do {
                        var tRel = nRels[tail];
                        var tQnty = fx(tRel);
                        // head-tail algo
                        for (var head = tail + 1; head < len; head ++ ) {
                            var hRel = nRels[head];
                            // form a set of quantities and look for a match.
                            if (hRel.obj.condName === tRel.obj.condName) {
                                var hQnty = fx(hRel);
                                if (isEqual(tQnty, hQnty)) {
                                    matched = true;
                                }
                            }
                        }
                        tail ++;
                    } while ((tail < len) && (!matched));
                }
                return matched;
            }
            function isDupDomain (soln, flag) {
                var ret = false;
                if (!!appmod.userConfig.allowDupDomain) {
                    return ret;
                }
                // if the domain transitions cause same domain to 
                // repeat, its a bad solution
                var nQnty = [];
                angular.forEach(soln.nodes, function (nd) {
                    if (nd.getType() === 'Quantity') {
                        nQnty.push(nd);
                    }
                });
                // avoid the last quantity. So it can be used 
                // for both type of designs
                if (!!flag) {
                    nQnty.pop();
                }

                
                var domain = {};
                var run = '';
                angular.forEach(nQnty, function (gn) {
                    var curDomain = gn.obj.get().domain;
                    // since the General domain may belong 
                    // to any one ignore it
                    if (curDomain !== "General") {
                        if (!run) {
                            run = curDomain;
                            domain[run] = true;
                        } else if (run !== curDomain) {
                            run = curDomain;
                            if (!domain[run]) {
                                domain[run] = true;
                            } else {
                                // duplicate domain detected
                                ret = true;
                            }
                        }
                    }
                });
                return ret;
            }

            if (!!flag) {
                // feedback case
                return isDupQnty(soln, flag) || isQuasiDupRel(soln) || isDupDomain(soln, flag);
            } else {
                // avoid duplicate quantity and duplicate paths through 
                // variants of the same relation.
                return isDupQnty(soln) || isQuasiDupRel(soln) || isDupDomain(soln) ;
            }
        };

        this.getAllFeedbackSolutions = function (desObj) {
            var self = this;
            // for the given inputs and outputs find all routes
            // use DFS to explore all paths start with each input
            var gg;
            var ret = []; 
            var gNodes = {};
            // initial graph is a direct map of the class based
            // graph. So instances are same as that of the class
            // make components
            var ct = new CNodeTree();
            var cTree = {};
            var maxCNodes = appmod.userConfig.fMaxCNodes;
            for (var i = 0; i < maxCNodes; i ++) {
                // cTree ids are 1-based
                var prev = cTree[i];
                var prevId = !!prev? prev.id : null;
                var cNd = ct.addCompNode(prevId, i + 1);
                cTree[i + 1] = cNd;
            }
            var gId = 1;
            // use a hash to avoid duplicates ineach component
            function addRel2CNode (ref, ff) {
                var gn;
                var relId = ff.assocId.split('/')[3];
                var relNode = cTree[ref].gHash[relId];
                if (!relNode) {
                    var rObj = self.getItem('/inf/relation/' + relId);
                    gn = new GNode(''+gId++, rObj);
                    gNodes[gn.id] = gn;
                    gn.bodyId = ref;
                    cTree[gn.bodyId].addGNode(gn);
                    cTree[ref].gHash[relId] = gn;
                    relNode = gn;
                    gn.cost = ff.cost;
                }

                function yyy (ii, kk) {
                    var qntyId = ii.quantity.split('/')[3];
                    var qntySrc = ii.quantity.split('/')[1];
                    var srcComp;
                    if ( qntySrc === 'inf') {
                        // same comp
                        srcComp = cTree[ref];
                    } else if (qntySrc === 'surr') {
                        // above comp
                        srcComp = cTree[ref].parentComp;
                    } else {
                        // body comp
                        var bodyId = 1;
                        if (!!ii.body) {
                            bodyId = ii.body;
                        }
                        srcComp = cTree[cTree[ref].kids[bodyId]];
                    }
                    // add the quantity to srcComp
                    var qn = srcComp.gHash[qntyId];
                    if (!qn) {
                        var qObj = self.getItem('/inf/quantity/' + qntyId);
                        qn = new GNode(''+gId++, qObj);
                        gNodes[qn.id] = qn;
                        qn.bodyId = srcComp.id;
                        cTree[qn.bodyId].addGNode(qn);
                        cTree[qn.bodyId].gHash[qntyId] = qn;
                    }
                    return qn;
                }

                angular.forEach(ff.inputs, function (ii, kk) {
                    var qn = yyy(ii,kk);
                    // keep the relation's inputs index same as that of Db
                    relNode.inputs[kk] = {'node' : qn.id};
                    qn.outputs[relNode.id] = {'node' : relNode.id};
                });
                angular.forEach(ff.outputs, function (ii, kk) {
                    var qn = yyy(ii,kk);
                    // keep the relation's inputs index same as that of Db
                    relNode.outputs[kk] = {'node' : qn.id};
                    qn.inputs[relNode.id] = {'node' : relNode.id};
                });
            }


            // starts from the inf layer in a 3-stage tree
            for (var ref = 2; ref <= maxCNodes; ref ++) {
                angular.forEach(self.inf.relation, function (ff) {
                    if (!!cTree[ref].isLeafNode()) {
                        // leaf node
                        if (!!ff.isBodyCompliant()) {
                            // add this relation to this component
                            addRel2CNode(ref, ff);
                        }
                    } else {
                        // non-leaf node so add relation
                        addRel2CNode(ref, ff);
                    }
                });
            }

           


            // for the search nodes. The user just give the 
            // desired quantities.
            var tmpLst = {};
            
            var assocId = appmod.keys(desObj.inputs)[0];
            var inQnty = assocId.split('/')[3];
            
            // list of gIds
            var inpGids = ct.root().findGNode( inQnty, gNodes);
            // create all combinations of these set and feed 
            // them to the search engine.
            function procEachSol (t_solns, inpId, pQ) {
                angular.forEach(t_solns, function (sol) {
                    // Once soln principles are formed, give separate copies of the 
                    // gNodes to each soln principle 
                    sol.gNodes = {};
                    // to save memory
                    sol.gNodes = gNodes;
                    // angular.forEach(gNodes, function (gn, k) {
                    //     sol.gNodes[gn.id] = gn.copy();
                    // });
                    // a quick fix for the last node. This needs to be a quantity.
                    var lastId = sol.nodeIds[sol.nodeIds.length - 1];
                    if (sol.gNodes[lastId].getType() === 'Relation'){
                        sol.nodeIds.pop();
                    }
                    // ok done
                    sol.outId = sol.nodeIds[sol.nodeIds.length - 1];
                    sol.inpId = inpId;
                    // sol.cNodeTree = ct.copy();
                    sol.cNodeTree = ct;
                    // for quick lookup
                    sol.solnPath = {};
                    sol.nodes = [];
                    // fix to map solns to gnodes
                    angular.forEach(sol.nodeIds, function (gId) {
                        sol.nodes.push(sol.gNodes[gId]); 
                    });
                    angular.forEach(sol.nodes, function (solNd) {
                        sol.solnPath[solNd.id] = solNd;
                    });
                    // init soln
                    sol.hide = {};
                    sol.show = {};
                    sol.userUnHide = {};
                    sol.UI = {};
                    // fine, push 
                    if (!!appmod.userConfig.isExpt) {
                        pQ.push(sol.key,sol);
                    } else if (!!appmod.userConfig.isElecCtrl) {
                        // electronic controller
                        if (!!self.isFbSoln(sol)) {
                            pQ.push(sol.key,sol);
                        }
                    } else if (!self.isAJunkSoln(sol, true)) {
                        pQ.push(sol.key,sol);
                    }
                });
            }

            if (!!inpGids.length) {
                var pQ = new $pf.SimplePriorityQueue();
                angular.forEach(inpGids, function (inpId, $index) {
                    var gp = self.createKSPGraph(gNodes);
                    function findLoop (gp, inpId, k_paths) {
                        var rD;
                        if (appmod.userConfig.fsAlgo === 'BFS') {
                            var t = (new Date()).getTime(); 
                            rD = new $lf.bfsFS(gp, inpId, appmod.userConfig);
                            t = ((new Date()).getTime() - t);
                            if (!appmod.gVar['bfs']) {
                                appmod.gVar['bfs'] = {'stats' : []};
                            }
                            rD.stats.time = t;
                            appmod.gVar['bfs']['stats'].push(rD.stats);
                        } else if (appmod.userConfig.fsAlgo === 'DFS-k') {
                            // use dfs for exhaustive search
                            var t = (new Date()).getTime(); 
                            rD = new $lf.dfsFS(gp, inpId, appmod.userConfig);
                            rD.getNSolns();
                            t = ((new Date()).getTime() - t);
                            if (!appmod.gVar['dfsFsk']) {
                                appmod.gVar['dfsFsk'] = {'stats' : []};
                            }
                            rD.stats.time = t;
                            appmod.gVar['dfsFsk']['stats'].push(rD.stats);
                        } else {
                            // use dfs for exhaustive search
                            var t = (new Date()).getTime(); 
                            rD = new $lf.dfsFS(gp, inpId, appmod.userConfig);
                            rD.getAllSolns();
                            t = ((new Date()).getTime() - t);
                            if (!appmod.gVar['dfsFs']) {
                                appmod.gVar['dfsFs'] = {'stats' : []};
                            }
                            rD.stats.time = t;
                            appmod.gVar['dfsFs']['stats'].push(rD.stats);
                        }
                        var t_solns = rD.showPaths();
                        rD.stats.solCount = t_solns.length;
                        return t_solns;
                    }
                    var ret = findLoop(gp, inpId, appmod.userConfig.numSolns);
                    procEachSol(ret, inpId, pQ);
                });
                var solns = {}, ll = 0;
                for (var i = 0; /* i < appmod.userConfig.numSolns */; i ++) {
                    var sol = pQ.pop();
                    if (!sol) {
                        break;
                    }
                    sol.id = ll;
                    ll ++;
                    appmod.push(solns, sol);
                }
                function getAveLength (solns) {
                    var sum = 0;
                    angular.forEach(solns, function (soln) {
                        sum = sum + soln.nodeIds.length;
                    });
                    return sum/appmod.length(solns);
                };
                var ret = solns;
                if (appmod.userConfig.fsAlgo === 'BFS') {
                    appmod.gVar['bfs']['solns'] = solns;
                    appmod.gVar['bfs']['avgLength'] = getAveLength(solns);
                } else if (appmod.userConfig.fsAlgo === 'DFS-k') {
                    appmod.gVar['dfsFsk']['solns'] = solns;
                    appmod.gVar['dfsFsk']['avgLength'] = getAveLength(solns);
                } else {
                    appmod.gVar['dfsFs']['solns'] = solns;
                    appmod.gVar['dfsFs']['avgLength'] = getAveLength(solns);
                }
                var ret = solns;
                $rootScope.$emit('jobDone', ret);
            
            }
        };  
        this.createKSPGraph = function (gNodes) {
            // graph conversion
            var gp = new Object();
            gp = {
                'nodes' : {},
                'edges' : {}
            };
            var edgeIdCount = 1;
            angular.forEach(gNodes, function (gn) {
                gp.nodes[gn.id] = {
                    'id' : gn.id,
                    'type' : gn.getType(),
                    'in' : {}, 
                    'out' : {}
                };
                angular.forEach(gn.outputs, function (o) {
                    gp.edges[edgeIdCount] = {
                        'id' : edgeIdCount, 
                        'src' : gn.id, 
                        'dst' : o.node, 
                        'cost' : gn.cost
                    };
                    gp.nodes[gn.id].out[o.node] = edgeIdCount;
                    edgeIdCount++;
                });
            });
            // fix the inputs
            angular.forEach(gp.edges, function (ee) {
                gp.nodes[ee.dst].in[ee.src] = ee.id;
            });
            return gp;
        };   
        
        this.getAllSolutions = function (desObj) {
            var self = this;
            // for the given inputs and outputs find all routes
            // use DFS to explore all paths start with each input
            var gg;
            var ret = []; 
            var gNodes = {};
            // initial graph is a direct map of the class based
            // graph. So instances are same as that of the class
            // make components
            var ct = new CNodeTree();
            var cTree = {};
            var maxCNodes = appmod.userConfig.dMaxCNodes;
            for (var i = 0; i < maxCNodes; i ++) {
                // cTree ids are 1-based
                var prev = cTree[i];
                var prevId = !!prev? prev.id : null;
                var cNd = ct.addCompNode(prevId, i + 1);
                cTree[i + 1] = cNd;
            }
            var gId = 1;
            // use a hash to avoid duplicates ineach component
            function addRel2CNode (ref, ff) {
                var gn;
                var relId = ff.assocId.split('/')[3];
                var relNode = cTree[ref].gHash[relId];
                if (!relNode) {
                    var rObj = self.getItem('/inf/relation/' + relId);
                    gn = new GNode(''+gId++, rObj);
                    gNodes[gn.id] = gn;
                    gn.bodyId = ref;
                    cTree[gn.bodyId].addGNode(gn);
                    cTree[ref].gHash[relId] = gn;
                    relNode = gn;
                    gn.cost = ff.cost;
                }

                function yyy (ii, kk) {
                    var qntyId = ii.quantity.split('/')[3];
                    var qntySrc = ii.quantity.split('/')[1];
                    var srcComp;
                    if ( qntySrc === 'inf') {
                        // same comp
                        srcComp = cTree[ref];
                    } else if (qntySrc === 'surr') {
                        // above comp
                        srcComp = cTree[ref].parentComp;
                    } else {
                        // body comp
                        var bodyId = 1;
                        if (!!ii.body) {
                            bodyId = ii.body;
                        }
                        srcComp = cTree[cTree[ref].kids[bodyId]];
                    }
                    // add the quantity to srcComp
                    var qn = srcComp.gHash[qntyId];
                    if (!qn) {
                        var qObj = self.getItem('/inf/quantity/' + qntyId);
                        qn = new GNode(''+gId++, qObj);
                        gNodes[qn.id] = qn;
                        qn.bodyId = srcComp.id;
                        cTree[qn.bodyId].addGNode(qn);
                        cTree[qn.bodyId].gHash[qntyId] = qn;
                    }
                    return qn;
                }

                angular.forEach(ff.inputs, function (ii, kk) {
                    var qn = yyy(ii,kk);
                    // keep the relation's inputs index same as that of Db
                    relNode.inputs[kk] = {'node' : qn.id};
                    qn.outputs[relNode.id] = {'node' : relNode.id};
                });
                angular.forEach(ff.outputs, function (ii, kk) {
                    var qn = yyy(ii,kk);
                    // keep the relation's inputs index same as that of Db
                    relNode.outputs[kk] = {'node' : qn.id};
                    qn.inputs[relNode.id] = {'node' : relNode.id};
                });
            }


            // starts from the inf layer in a 3-stage tree
            for (var ref = 2; ref <= maxCNodes; ref ++) {
                angular.forEach(self.inf.relation, function (ff) {
                    if (!!cTree[ref].isLeafNode()) {
                        // leaf node
                        if (!!ff.isBodyCompliant()) {
                            // add this relation to this component
                            addRel2CNode(ref, ff);
                        }
                    } else {
                        // non-leaf node so add relation
                        addRel2CNode(ref, ff);
                    }
                });
            }
            // for the search nodes. The user just give the 
            // desired quantities.
            var tmpLst = {};
            var assocId = appmod.keys(desObj.inputs)[0];
            var inQnty = assocId.split('/')[3];
            assocId = appmod.keys(desObj.outputs)[0];
            var outQnty = assocId.split('/')[3];
            // list of gIds. Assume that all quantity should get in or out from the system.
            var inpGids = ct.root().findGNode( inQnty, gNodes);
            var outGids = ct.root().findGNode( outQnty, gNodes, 2);
            // Just send the sysBId's inputs and outputs  
            // to the search engine.
            function procEachSol (t_solns, inpId, outId, pQ) {
                angular.forEach(t_solns, function (sol) {
                    // Once soln principles are formed, give separate copies of the 
                    // gNodes to each soln principle 
                    sol.gNodes = {};
                    sol.outId = outId;
                    sol.inpId = inpId;
                    // to save menory reuseing gnodes across all solutions
                    sol.gNodes = gNodes;
                    sol.cNodeTree = ct;
                    // for quick lookup
                    sol.solnPath = {};
                    sol.nodes = [];
                    // fix to map solns to gnodes
                    angular.forEach(sol.nodeIds, function (gId) {
                        sol.nodes.push(sol.gNodes[gId]); 
                    });
                    angular.forEach(sol.nodes, function (solNd) {
                        sol.solnPath[solNd.id] = solNd;
                    });
                    // init soln
                    sol.hide = {};
                    sol.show = {};
                    sol.userUnHide = {};
                    sol.UI = {};
                    // fine, push 
                    if (!!appmod.userConfig.isExpt) {
                        sol.key = appmod.pad(sol.cost, 10) + ':' + sol.nodeIds.join('_');
                        pQ.push(sol.key,sol);
                    } else if (!self.isAJunkSoln(sol, false)) {
                        sol.key = appmod.pad(sol.cost, 10) + ':' + sol.nodeIds.join('_');
                        pQ.push(sol.key,sol);
                    }
                });                
            }
            var pQ = new $pf.SimplePriorityQueue();
            if (!appmod.gVar['ksp']) {
                appmod.gVar['ksp'] = {'stats' : []};
            }
            if (!appmod.gVar['dfsDs']) {
                appmod.gVar['dfsDs'] = {'stats' : []};
            }
            if (!!inpGids.length && !!outGids.length) {
                angular.forEach(inpGids, function (inpId) {
                    angular.forEach(outGids, function (outId) {
                        var gp = self.createKSPGraph(gNodes);
                        function findPath (gp, inpId, outId, k_paths) {
                            var rD;
                            if (appmod.userConfig.dsAlgo === 'KSP') {
                                var t = (new Date()).getTime(); 
                                rD = new $pf.eppsteinKSP(gp, appmod.userConfig);
                                if (!rD.getKSP(inpId, outId, k_paths)) {
                                    // found no path
                                    return [];
                                }
                                t = ((new Date()).getTime() - t);
                                rD.stats.time = t;
                                appmod.gVar['ksp']['stats'].push(rD.stats);
                            } else {
                                // use dfs for exhaustive search
                                var t = (new Date()).getTime(); 
                                rD = new $pf.dfsDS(gp, appmod.userConfig);
                                if (!rD.getKSP(inpId, outId, k_paths)) {
                                    // found no path
                                    return [];
                                }
                                t = ((new Date()).getTime() - t);
                                rD.stats.time = t;
                                appmod.gVar['dfsDs']['stats'].push(rD.stats);
                            }
                            var t_solns = rD.showPaths(k_paths);
                            rD.stats.solCount = t_solns.length;
                            return t_solns;
                        }
                        
                        var ret = findPath(gp, inpId, outId, appmod.userConfig.numSolns);
                        procEachSol(ret, inpId, outId, pQ);
                    });
                });
            }
            var solns = {}, ll = 0;
            for (var i = 0; /* i < appmod.userConfig.numSolns */; i ++) {
                var sol = pQ.pop();
                if (!sol) {
                    break;
                }
                sol.id = ll;
                ll ++;
                appmod.push(solns, sol);
            }
            var ret = solns;
            if (appmod.userConfig.dsAlgo === 'KSP') {
                appmod.gVar['ksp']['solns'] = solns;
            } else {
                appmod.gVar['dfsDs']['solns'] = solns;
            }
            $rootScope.$emit('jobDone', ret);
        };
        this.getDetailedSoln = function (soln) {
            // now explore the sol path
            soln.detailed = true;
            self.getFullGraph(soln);
            self.onlySolPrin(soln);
            self.getBorderRels(soln);
            self.reFillCondAttrs(soln);
            return soln;
        };
        this.onlySolPrin = function (soln) {
            soln.hide = {};
            angular.forEach(soln.gNodes, function (gg) {
                soln.hide[gg.id] = gg.id;
            });
            angular.forEach(soln.nodes, function(gg) {
                // show sol principle
                delete soln.hide[gg.id];
                if (gg.getType() === 'Relation') {
                    angular.forEach(gg.inputs, function (ii) {
                        delete soln.hide[ii.node];
                    });
                    angular.forEach(gg.outputs, function (ii) {
                        delete soln.hide[ii.node];
                    });
                }
            });
        };
        this.getBorderRels = function (soln) {
            // the list of relations which are hidden but have 
            // the outputs which are not hidden and are 
            // potential border candidates. If these relations
            // fire, they will cause side-effects
            angular.forEach(soln.gNodes, function (gg) {
                if ((gg.getType() === 'Relation') && (!soln.hide[gg.id])) {
                    angular.forEach(gg.inputs, function (ii) {
                        delete soln.hide[ii.node];
                    });
                    angular.forEach(gg.outputs, function (ii) {
                        delete soln.hide[ii.node];
                    });
                }
            });
            do {
                soln.borderRels = {};
                angular.forEach(soln.gNodes, function (gg) {
                    // Is this quantity serving as an input to some active relation
                    if ((gg.getType() === 'Quantity') && (!soln.hide[gg.id])){
                        var notHidden = false;
                        angular.forEach(gg.outputs, function (nn) {
                            // relations which are not hidden
                            if (!soln.hide[nn.node]) {
                                notHidden = true;
                            } 
                        });
                        if (!!notHidden) {
                            angular.forEach(gg.inputs, function (nn) {
                                // relations which are hidden
                                if (!!soln.hide[nn.node]) {
                                    soln.borderRels[nn.node] = nn.node;
                                } 
                            });
                        }
                    }
                });
                var loop = false;
                if (!!appmod.userConfig.exploreFrontiers) {
                    // automatic exploration code 
                    angular.forEach(soln.borderRels, function (rId) {
                        var gn = soln.gNodes[rId];
                        if (gn.obj.relType !== 0) {
                            // try to explore till a custom relation is found.
                            delete soln.hide[gn.id];
                            delete soln.borderRels[rId];
                            soln.userUnHide[gn.id] = gn.id;
                            angular.forEach(gn.inputs, function (ii) {
                                delete soln.hide[ii.node];
                                loop = true;
                            });
                        }
                    });
                }
            } while (loop);
            self.assignUniqueVar(soln);
        };
        this.getFullGraph = function (soln) {
            var self = this;
            // for each inputs explore and create the feeding logic
            // use bfs from the soln nodes to explore all its inputs
            // This will cause the entire feeding sub tree to be activated.
            // In reality only one path from this sub tree will be chosen.
            var stk1 = [];
            var stk2 = [];
            var gId, rObj;
            // clean up
            angular.forEach(soln.gNodes, function (gg) {
                gg.color = 0;
            });
            // push the start nodes
            var solLen = appmod.length(soln.nodes);
            for (var i = 0; i < solLen; i++) {
                var nd = soln.nodes[i];
                stk1.push(nd);
                nd.color = 1;
            }
            // mark the desired outputs as black
            var nd = soln.gNodes[soln.outId];
            if (!nd) {
                console.log('error: missing id:',outId, soln);
            }
            stk1.push(nd);
            nd.color = 2;

            // explore the input feeding logic and color them
            // assume all quantities arequired for the relation is colored
            // all relations producding a quantitity are also colored
            function feedingGraph (stk)
            {
                var tmp_stk = [];
                do {
                    tmp_stk = [];
                    while(nd = stk.pop()){
                        nd.color = 2;
                        angular.forEach(nd.inputs, function (inp) {
                            var gId = inp.node;
                            var rObj = soln.gNodes[gId];
                            if (rObj.color === 0) {
                                tmp_stk.push(rObj);
                                rObj.color = 1;
                            }
                        }); 
                    }
                    stk = tmp_stk;
                } while (appmod.length(stk));
            }
            
            feedingGraph(stk1);
            // now the input funnel is ready.
            // look for all explored relations and populates their output quantities
            var ready;
            var stk = [];
            angular.forEach(soln.gNodes, function (nd) {
                if (nd.color === 2) { 
                    // belongs to selected funnel nodes.
                    // Need to avoid exploring the end nodes
                    switch (nd.getType()) {
                        case "Relation" :
                            angular.forEach(nd.outputs, function (out) {
                                gId = out.node;
                                rObj = soln.gNodes[gId];
                                if (rObj.color === 0) {
                                    stk.push(rObj);
                                    rObj.color = 1;
                                }
                            });
                        break;
                    }
                }
            });
            // we have stk full of TmplQnty.
            // using the set of the newly activated quantities explore for more 
            // relations/actions and try to mark them black.
            while (nd = stk.pop()) {
                nd.color = 2;
                angular.forEach(nd.outputs, function (fn) {
                    gId = fn.node;
                    rObj = soln.gNodes[gId];
                    if (rObj.color === 0) {
                        // check if this function can be blackened
                        var allBlack = true;
                        angular.forEach(rObj.inputs, function (inp) {
                            if (!!allBlack) {
                                var q_assocId = inp.node;
                                var q_rObj = soln.gNodes[q_assocId];
                                if (q_rObj.color === 0) {
                                    allBlack = false;
                                    // should I try to find the feeding graph for this quantity?
                                    // It might make things worse as we will be trying to explore 
                                    // relations that are side-effects. And might cause all 
                                    // relations in the db to show up for not real benefit.
                                }
                            }
                        });
                        if (!!allBlack) {
                            // select this relation and take all its outputs
                            rObj.color = 2;
                            angular.forEach(rObj.outputs, function (out) {
                                var qo_assocId = out.node;
                                var qo_rObj = soln.gNodes[qo_assocId];
                                if (qo_rObj.color === 0) {
                                    stk.push(qo_rObj);
                                    qo_rObj.color = 1;
                                }
                            });
                        }
                    }
                });
            }
            // Some of the quantities that are in the soln.gNodes are associated to 
            // relations which are not black. So we can filter them out here.
            soln.graph = {};
            angular.forEach(soln.gNodes, function (nd) {
                if (nd.color === 2) {
                    soln.graph[nd.id] = nd;
                    if (nd.getType() === 'Quantity') {
                        // see if all its outputs are black. 
                        var tmp_lst = [];
                        angular.forEach(nd.outputs, function (out) {
                            var qo_assocId = out.node;
                            var qo_rObj = soln.gNodes[qo_assocId];
                            if (qo_rObj.color === 2) {
                                tmp_lst.push(qo_rObj);
                            } 
                        });
                        nd.outputs = {};
                        angular.forEach(tmp_lst, function (ss) {
                            nd.outputs[ss.id] = {'node' : ss.id};
                        });
                        // clean inputs
                        tmp_lst = [];
                        angular.forEach(nd.inputs, function (out) {
                            var qo_assocId = out.node;
                            var qo_rObj = soln.gNodes[qo_assocId];
                            if (qo_rObj.color === 2) {
                                tmp_lst.push(qo_rObj);
                            } 
                        });
                        nd.inputs = {};
                        angular.forEach(tmp_lst, function (ss) {
                            nd.inputs[ss.id] = {'node' : ss.id};
                        });
                    }
                }
            });
            // delete un-used gNodes from solutuion
            var del_lst = [];
            angular.forEach(soln.gNodes, function (nd) {
                if (nd.color !== 2) {
                    del_lst.push(nd.id);
                }
            });
            angular.forEach(del_lst, function (ssId) {
                var gn = soln.gNodes[ssId];
                // delete job
                soln.cNodeTree.kids[gn.bodyId].rmGNode(gn);
                delete soln.gNodes[ssId];
            });
            return;
        };
        this.reFillCondAttrs = function (soln) {
            var self = this;
            angular.forEach(soln.cNodeTree.kids, function(c) {
                c.reFillAttrs(soln.hide, soln.gNodes, self.condDb);
            });
        };
        //----

        this.checkConnectivity = function (soln) {
            // we shall come to this function with partial list of hidden nodes.
            // there could be some nodes which are not hidden but which are not 
            // connected to the soln principle.
            // use flooding approach to see the connectivity 
            // starting from the start node.
            var self = this;
            var nd;
            // first white-wash the nodes which are not hidden
            var ulist = [];
            angular.forEach(soln.gNodes, function (nd) {
                if (!soln.hide[nd.id]) {
                    nd.color = 'white';
                    ulist.push(nd);
                }
            });
            // now blacken all nodes which are reachable from the solution principle
            var stk = [];
            angular.forEach(soln.nodes, function (nd) {
                nd.color = 'grey';
                stk.push(nd);
            });
            while (nd = stk.pop()) {
                if (nd.color === 'grey') {
                    nd.color = 'black';
                    angular.forEach(nd.inputs, function (ii) {
                        var vv = soln.gNodes[ii.node];
                        if (!soln.hide[ii.node] && !!vv.color && (vv.color === 'white')) {
                            vv.color = 'grey';
                            stk.push(vv);
                        }
                    });
                    angular.forEach(nd.outputs, function (ii) {
                        var vv = soln.gNodes[ii.node];
                        if (!soln.hide[ii.node] && !vv.color && (vv.color === 'white')) {
                            vv.color = 'grey'
                            stk.push(vv);                        
                        }
                    });        
                    
                }
            }
            // now look for white nodes which are not explored
            angular.forEach(ulist, function (nd) {
                if (nd.color === 'white') {
                    soln.hide[nd.id] = nd.id;
                }
            });
        };
        
        this.clearAllInhibit = function (soln) {
            var self = this;
            soln.userUnHide = {};
            soln.hide = {};
            this.getEquations(soln);
        };
        
        //----------
        this.assignUniqueVar = function (soln) {
            var self = this;
            // populate gNodes with symbols
            // start with 1 as Matlab doesn't like 0
            var count = 1;
            // also create a list of active quantitities for display
            soln.activeQnty = {};
            angular.forEach(soln.graph, function (gn) {
                if (!soln.hide[gn.id]){
                    var nd = gn.obj;
                    switch(nd.getType()) {
                        case 'TmplQnty':
                            // if this quantity is an input to some active relation, then ..
                            var isInpQ = false;
                            angular.forEach(gn.outputs, function (oo) {
                                if (!soln.hide[oo.node]) {
                                    isInpQ = true;
                                }
                            });
                            if (!!isInpQ) {
                                soln.activeQnty[gn.id] = gn.id;
                            }
                            // uSym is in gNode rest are in obj
                            gn.uSym = 'V_{' + count + '}';
                            count++;
                            break;
                        case 'TmplRel':
                            // uSym is in gNode rest are in obj
                            angular.forEach(gn.outputs, function (out) {
                                out.uSym = 'V_{' + count + '}';
                                count++
                            });
                            break;
                    }
                }
            });
            angular.forEach(soln.graph, function (gn) {
                if (!soln.hide[gn.id]){
                    var nd = gn.obj;
                    if(nd.getType() === 'TmplRel') {
                        angular.forEach(gn.inputs, function (inp) {
                            if (!soln.hide[inp.node]){
                                inp.uSym = soln.graph[inp.node].uSym;
                            }
                        });
                    }
                }
            });
        };
        
        this.getEquations = function (soln) {
            var self = this;
            // first assign unique variables to all Qnty
            //this.assignUniqueVar(soln);
            var ret = [];
            var rr = [];
            var rr1 = [];
            var nneg = [];
            var cond = {};
            angular.forEach(soln.graph, function (gn) {
                if (!soln.hide[gn.id]){
                    switch(gn.obj.getType()) {
                        case 'TmplQnty' :
                            rr = [];
                            var qnty = gn.obj.get();
                            if (!!qnty.isNonNeg) {
                                nneg.push(gn.uSym);
                            }
                            // inputs are the outputs of relations
                            angular.forEach(gn.inputs, function (inp) {
                                if (!soln.hide[inp.node]) {
                                    var rel = soln.graph[inp.node];
                                    var out = rel.getOutput(gn.id);
                                    if (!!out) {
                                        rr.push(out.uSym);
                                    }
                                }
                            });
                            if (!!rr.length) {
                                ret.push(rr.join('+') + '=' + gn.uSym);
                            }
                            break;
                        case 'TmplRel' :
                            rr = [];
                            rr1 = [];
                            cond = {};
                            angular.forEach(gn.inputs, function (inp, kk) {
                                if (!soln.hide[inp.node]) {
                                    // explain the function
                                    rr.push(inp.uSym);
                                    rr1.push(gn.obj.inputs[kk].symbol);
                                }
                            });
                            angular.forEach(gn.outputs, function (out, kk) {
                                if (!soln.hide[out.node]) {
                                    // explain the function
                                    // V1:s1, V2:s2, .. ,V4:o1, f(s1,s2,s3 ..., o1) = 0
                                    var ff = [];
                                    for (var i = 0; i < rr.length; i++) {
                                        var str = [];
                                        str.push(rr[i] + ' \\rightarrow ' + rr1[i]);
                                        if (!!cond[i]) {
                                            str.push(';');
                                            str.push(cond[i]);
                                        }
                                        ff.push(str.join(' '));
                                    }
                                    ff.push(out.uSym + ' \\rightarrow ' + gn.obj.outputs[kk].symbol );
                                    ret.push(ff.join(';') + ';' + self.eqnDb[gn.obj.outputs[kk].eqn] + 
                                        '; \\text{' + gn.getName() + '}');
                                }
                            });
                            break;
                    }
                }
            });
            angular.forEach(nneg, function (nn) {
                ret.push(nn + ' > 0');
            });
            soln.displayEqnsList = ret;
        };
        this.saveEquations = function (soln) {
            var self = this;
            // first assign unique variables to all Qnty
            //this.assignUniqueVar(soln);
            function l2m(str){
                return str.replace(/[\{\}_]/g,'');
            }
            function l2m2(str){
                return str.replace(/[\{\}]/g,'');
            }
            extractEntityName = function (hdl) {
                if (!!hdl) {
                    return hdl.split('/')[1];
                }
                return '';
            };
            var ret = [];
            var rr = [];
            var rr1 = [];
            var unknowns = [];
            var cond = {};
            var nneg = [];
            var allSyms = {};
            var eqn_count = 1;
            var strEqn = [];
            
            angular.forEach(soln.graph, function (gn) {
                if (!soln.hide[gn.id]){
                    switch(gn.obj.getType()) {
                        case 'TmplQnty' :
                            // e1:= x + y = a:
                            // the quantities on the solution path are all unknowns.
                            rr = [];
                            var qnty = gn.obj.get();
                            if (!!qnty.isNonNeg) {
                                nneg.push(gn.uSym);
                            }
                            // inputs are the outputs of relations
                            angular.forEach(gn.inputs, function (inp) {
                                if (!soln.hide[inp.node]) {
                                    var rel = soln.graph[inp.node];
                                    var out = rel.getOutput(gn.id);
                                    if (!!out) {
                                        ret.push('// ' + gn.getName() + ' comp-' + gn.bodyId 
                                            + ' ' +l2m(out.uSym));
                                        rr.push(l2m(out.uSym));
                                        unknowns.push(l2m(out.uSym));
                                        allSyms[l2m(out.uSym)] = l2m(out.uSym);
                                    }
                                }
                            });
                            if (!!rr.length) {
                                allSyms[l2m(gn.uSym)] = l2m(gn.uSym);
                                unknowns.push(l2m(gn.uSym));
                                ret.push('// ' + gn.getName() + ' comp-' + gn.bodyId + ' ' + l2m(gn.uSym));
                                ret.push( 'E' + eqn_count + " := " + rr.join('+') + ' = ' + l2m(gn.uSym) + ":");
                                strEqn.push('E' + eqn_count);
                                eqn_count++;
                            }
                            break;
                        case 'TmplRel' :
                            // e1:= subs(x + y = a, x = v1, y = V2):
                            rr = [];
                            rr1 = [];
                            cond = {};
                            
                            angular.forEach(gn.inputs, function (inp, kk) {
                                if (!soln.hide[inp.node]) {
                                    allSyms[l2m(inp.uSym)] = l2m(inp.uSym);
                                    rr.push(l2m(inp.uSym));
                                    rr1.push(l2m2(gn.obj.inputs[kk].mSymbol));
                                }
                            });
                            
                            function sq(ll,rr) {
                                var tt = [];
                                for(var i = 0; i < ll.length; i ++) {
                                    tt.push(ll[i] + ' = ' + rr[i]);
                                }
                                return tt;
                            }
                            angular.forEach(gn.outputs, function (out, kk) {
                                if (!soln.hide[out.node]) {
                                    var dbOut = gn.obj.outputs[kk];
                                    allSyms[l2m(out.uSym)] = l2m(out.uSym);
                                    ret.push('// ' + gn.getName());
                                    ret.push('E' + eqn_count + " := subs(" + 
                                        self.eqnDbMatlab[dbOut.eqn] + ","+ sq(rr1, rr).join(',') + ',' 
                                        + l2m2(dbOut.mSymbol) + ' = ' + l2m(out.uSym) + "):");
                                    strEqn.push('E' + eqn_count);
                                    ret.push('');
                                    eqn_count++;
                                }
                            });
                            break;
                    }
                }
            });
            angular.forEach(nneg, function (nn) {
                ret.push("assume (" +  l2m(nn) + " > 0):");
            });
            
            ret.push('// input: ' + l2m(soln.nodes[0].uSym));
            ret.push('// output: ' + l2m(soln.nodes[soln.nodes.length -1].uSym));
            ret.push('Q1 := ' + l2m(soln.nodes[soln.nodes.length -1].uSym) 
                + '/' + l2m(soln.nodes[0].uSym) + " =  GAIN:");
            strEqn.push('Q1'); unknowns.push('GAIN');
            ret.push('eqns := {' + strEqn.sort().join(',') +'}:' );
            ret.push('unknowns := {'+ unknowns.sort().join(',') +'}:');

            var ll = [];  
            angular.forEach(unknowns, function (d) {
                delete allSyms[d];
            });
            angular.forEach(allSyms, function (v) {
                ll.push(v);
            });
            ret.push('knowns := {'+ ll.sort().join(',') +'}:');
            ret.push('solve(eqns,unknowns,IgnoreSpecialCases)');



            var mFile = [];
            angular.forEach(ret, function (ff) {
                mFile.push(ff);
            });
            return mFile.join('\n');
        };
        //----------  
        this.exportModel = function (soln) {
            var self = this;
            // export the soln as a standalone json model
            console.log('soln',soln);
            return (soln); 
        };
        //----------
        this.mkGNodeId = function () {
            var self = this;
            self.countGNode++;
            return self.countGNode;
        };
        //------------
        this.changeCountEqn = function () {
            var self = this;
            self.changeCount.eqn++;
            self.changeCount.all++;
        };
        //------------
        this.checkDbSchema = function (obj) {
            var self = this;
            if (!obj.db ||
                    !obj.db.content ||
                    !obj.db.content.inf ||
                    !obj.db.content.inf.content ||
                    !obj.db.content.inf.content.relation ||
                    !obj.db.content.inf.content.relation.content ||
                    !obj.db.content.qdb ||
                    !obj.db.content.qdb.content) {
                return false;
            }
            return true;
        };
        this.prepareJSON = function () {
            var self = this;
            var ret = { 
                'db' : {
                    'version' : self.version.local,
                    'content' : {
                        'inf'   : {
                            'content': {
                                'relation' : {
                                    'content': {}
                                }
                            }
                        },
                        'qdb'   : {
                            'content': {}
                        },
                        'eqnDb': {
                            'content' : {}
                        },
                        'eqnDbMatlab': {
                            'content' : {}
                        },
                        'condAttrsDb' : {
                            'content' : {}
                        },
                        'condDb' : {
                            'content' : {}
                        }
                    }
                }
            };
            angular.forEach(self.qdb,function(obj){
                ret.db.content.qdb.content[obj.id] = obj.prepareJSON();
            });
            angular.forEach(self.eqnDb,function(obj,k){
                ret.db.content.eqnDb.content[k] = obj;
            });
            angular.forEach(self.eqnDbMatlab,function(obj,k){
                ret.db.content.eqnDbMatlab.content[k] = obj;
            });
            angular.forEach(self.condDb,function(obj,k){
                ret.db.content.condDb.content[k] = obj.prepareJSON();
            });
            angular.forEach(self.condAttrsDb,function(obj,k){
                ret.db.content.condAttrsDb.content[k] = obj.prepareJSON();
            });
            angular.forEach(self.inf.relation,function(obj){
                ret.db.content.inf.content.relation.content[obj.id] = obj.prepareJSON();
            });
            ret.db.version = CryptoJS.MD5(JSON.stringify(ret)).toString()
            return ret;
        };
        this.resetChangeCount = function () {
            var self = this;
            self.changeCount = {
                'Q' : 0,
                'cond' : 0,
                'eqn' : 0,
                'ph' : 0,
                'all' : 0,
                'inf': {
                    'Func': 0,
                    'Qnty': 0,
                    'Rel' : 0
                }
            };
        };
        // Ctor
        var self = this;
        if (!this.checkDbSchema(jsonObj)) {
            // error in db file
            console.log('Invalid DB syntax');
        } else {
           
            self.version = {
                'remote' :  jsonObj.db.version,
                'local': jsonObj.db.version, 
                'minor': 0
            };
            self.inf  = {'quantity': {}, 'relation': {}};
            self.qdb = {};
            self.qAliasGrpDb = {};
            self.qntyDb = {};
            self.phDbNames = {};
            self.phDbQnty = {};
            self.condAttrsDb = {};
            self.condDb = {};
            self.eqnDb = {};
            self.eqnDbMatlab = {};

            self.countGNode = 0;
            // -- temp storage
            self.gNodes = {};
            //--- first key based in inputs, second key is name
            self.relDb = {};
            self.relDbName = {};
            //----
            self.resetChangeCount();
            
            // fill the db , quantities first
            angular.forEach(jsonObj.db.content.qdb.content, function (v, k) {
                self.qdb[k] = (new TmplQ(self, k, v));
                // populate the inf too
                self.inf.quantity[k] = (new TmplQnty(self, k, '/inf/quantity/' + k, null));
            });
            angular.forEach(jsonObj.db.content.eqnDb.content, function (v, k) {
                self.eqnDb[k] = v;
            });
            angular.forEach(jsonObj.db.content.eqnDbMatlab.content, function (v, k) {
                self.eqnDbMatlab[k] = v;
            });
            angular.forEach(jsonObj.db.content.condDb.content, function (v, k) {
                self.condDb[k] = (new TmplCond(self, k, v));
            });
            angular.forEach(jsonObj.db.content.condAttrsDb.content, function (v, k) {
                self.condAttrsDb[k] = (new TmplCondAttr(self, k, v));
            });
            angular.forEach(jsonObj.db.content.inf.content.relation.content, function (v, k) {
                self.inf.relation[k] = (new TmplRel(self, k, '/inf/relation/' + k, v));
            });
            self.resetChangeCount();
            $rootScope.$watch(function () {
                return self.changeCount.all;
            }, 
            function (n,o) {
                if (n != 0) {
                    self.changeMinorVersion();
                }
            }, true);
        }
    }
    this.addDb = function (dbJson) {
        this.tree = new TmplTree(dbJson);
        return this;
    };
    
    //Ctor
    this.tree = null;
    this.data = {};
}]);

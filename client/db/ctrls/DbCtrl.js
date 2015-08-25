var appmod = angular.module('isapPkg');

//------ The controller
appmod.controller('DbCtrl',
    ['$scope', '$rootScope', 'TemplateDB', '$http','$timeout',
        function ($scope, $rootScope, tmplDbRoot, $http, $timeout) {
            // Ctor
            $scope.init_ctor = function () {
                $scope.TemplateDB = tmplDbRoot;
                $scope.nbdb_init();
            };
            $scope.TmplDb = function () {
                return tmplDbRoot.tree;
            };
            $scope.nbdb_init = function () {
                $scope.nbdb = {};
                // initialize for Qnty
                $scope.nbdb.newQ = {};
                $scope.nbdb.editQ = {};
                $scope.nbdb.newComp = {};
                $scope.nbdb.newCondAttr = {};
                $scope.nbdb.editCondAttr = {};
                $scope.nbdb.relLst = {};
                $scope.nbdb.QntyLst = {};
                $scope.nbdb.condLst = {};
                $scope.nbdb.condAttrLst = {};
                $scope.nbdb.relEInp = {};
                $scope.nbdb.relEOut = {};
                $scope.nbdb.relCInp = {};
                $scope.nbdb.relCOut = {};

                $scope.nbdb.newCond = { 
                    'isA': '', 
                    'property': {
                        'inherited' : {}, 
                        'overridden': {},
                        'attr' : '',
                        'attrVal' : ''
                    }, 
                    'has': {
                        'numParts' : 0,
                        'parts': {}
                    } 
                };
                $scope.initializeQ($scope.nbdb.newQ);
                // initialize for Rel
                $scope.resetNewRForm();

            };
            $scope.resetNewRForm = function () {
                if (!$scope.nbdb.newR) {
                    $scope.nbdb.newR = {};
                }
                
                $scope.nbdb.newR.inf = {
                    'list': {},
                    'build': {
                        'numBody' : 0,
                        'inputs': {},
                        'outputs': {},
                        'cost' : 1,
                        'relType' : 0
                    }
                };
                angular.resetForm($scope, 'newRInfform', {});
                
            };
            $scope.initializeQ = function (q) {
            };
            $scope.hdlClick = function (uiObj, obj) {
                uiObj[obj.id] = !uiObj[obj.id];
                $scope.renderMaths("dbRels");
            };
            $scope.renderMaths = function (str) {
                $timeout(function(){
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, str]);
                }, 100);
            };
            $scope.reloadDb = function (){
                // reload database
                var res = Pdb.findOne();
                tmplDbRoot.addDb(res);    
            };
            $scope.expandAllRel = function () {
                $scope.nbdb.uiTable5_flag = !!!$scope.nbdb.uiTable5_flag;
                if ($scope.nbdb.uiTable5_flag) {
                    angular.forEach($scope.TmplDb().inf.relation, function (rr) {
                        $scope.nbdb.uiTable5[rr.id] = true;
                    });
                } else {
                    $scope.nbdb.uiTable5 = {};
                }
                $timeout(function(){
                    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "dbRels"]);
                }, 100);
            };
            $scope.showDb = function () {
                $scope.toggleDbMode();
                if ($scope.dbMode) {
                    $scope.nbdb_init();
                }
            };
            
            $scope.cancelDbQnty = function (obj) {
                var assocId = obj.data;
                var s_id = assocId.split('/');
                if (s_id[1] === 'body') {
                    $scope.nbdb.dbQ[s_id[3]].body = true;
                } else {
                    $scope.nbdb.dbQ[s_id[3]].inf = true;
                }
            };
            $scope.deleteDbQnty = function (obj) {
                var assocId = obj.data;
                angular.forEach(obj.dataList, function (rel) {
                    rel.destroy();
                });
                $scope.TmplDb().getItem(assocId).destroy();
            };
            // user request for deletion
            $scope.deleteDbQ = function (obj) {
                // called from the ui
                var assocId = '/inf/quantity/' + obj.id;
                var lst = $scope.TmplDb().queryAssocQ(assocId);
                var cbObj = {
                    'cbSuccess': $scope.rmDbQ,
                    'cbCancel': $scope.cancelDbQ,
                    'data': obj,
                    'dataList': lst
                };
                $scope.askDelete(cbObj);
            };
            // the final deletion function
            $scope.rmDbQ = function (cbObj) {
                var obj = cbObj.data;
                var lst = cbObj.dataList;
                var assocId = '/inf/quantity/' + obj.id;
                
                // delete Quantity
                q = $scope.TmplDb().getItem(assocId);
                if (!!q.get().isPermanent) return;
                // delete relations
                angular.forEach(lst, function (rel) {
                    rel.destroy();
                });
                if (!!q) {
                    q.destroy();
                }
                // delete Q
                obj.destroy();
            };
            $scope.cancelDbQ = function () {
                // nothing required
            };
            $scope.editDbQShow = function (obj) {
                $scope.nbdb.editQ.show = true;
                $scope.nbdb.editQ.obj = angular.copy(obj);
            };
            $scope.editDbQCancel = function () {
                $scope.nbdb.editQ = {};
            };
            $scope.editDbQSubmit = function () {
                var obj = $scope.nbdb.editQ.obj;
                var changedAlias = false;
                // if there is a change in the aliasGrp we 
                // need to delete some of the associated relations
                var q = $scope.TmplDb().qdb[obj.id];
                if (obj.aliasGrp !== q.aliasGrp) {
                    $scope.rmAliasRels(q);
                    changedAlias = true;
                }
                var changedIsA = false;
                if (obj.isA !== q.isA) {
                    if (!!q.isA) {
                        // prev
                        // delete isA relation 
                        var relName = 'IsA_I_' + $scope.mkName(q.name); 
                        var rel = $scope.TmplDb().relDbName[relName];
                        if (!!rel) {
                            rel.destroy();
                        }
                        delete q.isA;
                    } 
                    if (!!obj.isA) {
                        changedIsA = true;
                    }
                }
                q.edit(obj);
                if (!!changedAlias) {
                    $scope.addAliasRels(q);
                }
                if (!!changedIsA) {
                    $scope.addIsAQRel(q);
                }
                $scope.editDbQCancel();
            };
            
            
            $scope.addAliasRel = function (q1Id, q2Id) {
                // make two bi-directional zero cost relations between them
                var rId;
                var q1 = $scope.TmplDb().qdb[q1Id];
                var q2 = $scope.TmplDb().qdb[q2Id];
                var t_bld = {
                    'name' : '',
                    'condName' : '',
                    'relType' : 1,
                    'cost' : 0,
                    "numBody": 0,
                    'inputs' : {
                        '0':{
                            'quantity' : '',
                            'mSymbol' : 'I_{0}',
                            'symbol' : 'I_{0}'
                        }
                    },
                    'outputs' : {
                        '0':{
                            'eqn' : 'eq_conn',
                            'mSymbol' : 'O_{0}',
                            'symbol' : 'O_{0}',
                            'quantity' : ''
                        }
                    }
                };
                // if missing
                if (!$scope.TmplDb().eqnDb['eq_conn']) {
                    $scope.TmplDb().eqnDb['eq_conn'] = 'O_{0} - I_{0} = 0';
                }
                // add connection relations S2I in Inf
                bld = angular.copy(t_bld);
                bld.inputs[0].quantity = '/inf/quantity/' + q1.id;
                bld.outputs[0].quantity = '/inf/quantity/' + q2.id;
                bld.name = 'Alias_' + q1.id + '_' + q2.id; 
                rId = $scope.TmplDb().addRel(bld,false);
                
                //---
                bld = angular.copy(t_bld);
                bld.inputs[0].quantity = '/inf/quantity/' + q2.id;
                bld.outputs[0].quantity = '/inf/quantity/' + q1.id;
                bld.name = 'Alias_' + q2.id + '_' + q1.id; 
                rId = $scope.TmplDb().addRel(bld,false);
                
                //---
            };
            $scope.rmAliasRel = function (q1Id, q2Id) {
                // rm  bi-directional zero cost relations between them
                var q1 = $scope.TmplDb().qdb[q1Id];
                var q2 = $scope.TmplDb().qdb[q2Id];
                var rel = [];
                var relName = 'Alias_' + q1.id + '_' + q2.id;
                rel.push($scope.TmplDb().relDbName[relname]);
                relName = 'Alias_' + q2.id + '_' + q1.id; 
                rel.push($scope.TmplDb().relDbName[relname]);

                // now delete the two relations
                angular.forEach(rel, function (rr) {
                    var r = $scope.TmplDb().getItem('/inf/relation/' + rr);
                    if (!!r) {
                        r.destroy();
                    }
                });
            };
            $scope.addAliasRels = function (q) {
                var ag = $scope.TmplDb().qAliasGrpDb[q.aliasGrp];
                angular.forEach(ag, function (qq) {
                    if (qq.id !== q.id) {
                        $scope.addAliasRel(q.id, qq.id);
                    }
                });
            };
            $scope.rmAliasRels = function (q) {
                var ag = $scope.TmplDb().qAliasGrpDb[q.aliasGrp];
                angular.forEach(ag, function (qq) {
                    if (qq.id !== q.id) {
                        $scope.rmAliasRel(q.id, qq.id);
                    }
                });
            };
            $scope.mkAliasGrpList = function (id) {
                $scope.nbdb.editQ.aliasGrpList = 
                    appmod.keys($scope.TmplDb().qAliasGrpDb[id]);
            };
            $scope.isUniqueQ = function (vv) {
                // check if the name is unique amount all quantities
                var found = false;
                if (vv) {
                    angular.forEach($scope.TmplDb().qdb, function (obj) {
                        if (obj.name.toLowerCase() === vv.toLowerCase()) {
                            found = true;
                            // break is done by return
                            return;
                        }
                    });
                }
                return !found;
            };
            $scope.newDbQ = function () {
                ret = false;
                // avoid duplicates
                if ($scope.isUniqueQ($scope.nbdb.newQ.name)) {
                    // a new Q added
                    var id = $scope.TmplDb().addQ($scope.nbdb.newQ);
                    $scope.autoAddRels(id);
                    $scope.showStatusMsg ("Create successful");    
                    ret = true;
                } else {
                    $scope.showStatusMsg ("Create failed");
                }
                $scope.nbdb.newQ = {};
                $scope.initializeQ($scope.nbdb.newQ);
                angular.resetForm($scope, 'newQform', {});
                return ret;
            };

            //---
            $scope.createDerivative = function (q) {
                // Derivative Qnty
                $scope.nbdb.newQ = angular.copy(q);
                delete $scope.nbdb.newQ.aliasGrp;
                // dissociate the OO-hierarchy
                $scope.nbdb.newQ.isA = ''; 
                $scope.nbdb.newQ.name = q.suggestDName();
                if (!!$scope.newDbQ()) {
                    // add integral relations -- derivative-from 
                    $scope.addDerIntgRel(q.id,true);
                    $scope.addDerIntgRel(q.id,false);
                }
            };
            $scope.suggestDRelName = function (tgt, build) {
                var qNameInp = $scope.TmplDb().getItem(
                    build.inputs[0].quantity).get().name;
                build.name = 'd/dt(' + $scope.mkName(qNameInp) +')';
            };
            $scope.suggestIRelName = function (tgt, build) {
                var qNameInp = $scope.TmplDb().getItem(
                    build.inputs[0].quantity).get().name;
                build.name = 'Int(' + $scope.mkName(qNameInp) +')';
            };            
            $scope.eqnEditDone = function () {
                $scope.nbdb.displayAllEqns.count++;
                $scope.TmplDb().changeCountEqn();
            };
            $scope.showEqnDetails = function (rel) {
                $scope.nbdb.showDbEqnDetail = rel.id;
            };
            $scope.mkName = function (str) {
                return str.replace(/\s/g, '_');
            };
            
            $scope.mkUniqId = function (obj) {
                var len = $scope.length(obj);
                while (!!obj[len]){
                    len++;
                }
                return len;
            };
            $scope.addQ2RInp = function (obj, tgt) {
                var assocId_s = obj.obj.assocId.split('/');
                // assign the src role
                assocId_s[1] = obj.src;
                var ptr =  $scope.nbdb.newR[tgt];
                // check if the number assocId was already selected and the
                // number of components for this relation
                var count = 0;
                angular.forEach(ptr.build.inputs, function (inp) {
                    if (inp.quantity === obj.obj.assocId) {
                        count++;
                    }
                });
                if ((tgt === 'inf') && (count >= ptr.numBody)) {
                    $scope.showStatusMsg("Failed to add attribute!! </br> Check 'Number of bodies' field");
                    return;
                }
                // Since we just need a unique id with respect to this data 
                // structurewe can use assoc id too. But in case of repeated 
                // elements the uniqueness is not ensured. 
                // So its a good idea to use 0,1,2,3 .. as keys 
                ptr.build.inputs[
                    $scope.mkUniqId(ptr.build.inputs)] =
                        {'quantity' : assocId_s.join('/')};
                if (obj.src !== 'body') {
                    obj.hide = true;
                }
            };
            $scope.addQ2ROut = function (obj, tgt) {
                var assocId_s = obj.obj.assocId.split('/');
                // assign the src role
                assocId_s[1] = obj.src;
                $scope.nbdb.newR[tgt].build.outputs[
                    $scope.mkUniqId($scope.nbdb.newR[tgt].build.outputs)] =
                        {'quantity': assocId_s.join('/')};
                if (obj.src !== 'body') {
                    obj.hide = true;
                }
            };
            $scope.compareQntyList = function (a, b) {
                if (a.obj.get().name.toUpperCase() < b.obj.get().name.toUpperCase()) {
                    return -1;
                }
                if (a.obj.get().name.toUpperCase() > b.obj.get().name.toUpperCase()) {
                    return 1;
                }
                return 0;
            };
            
            $scope.buildRelQnty = function () {
                tgt = 'inf'; // this is permanent now
                
                // build a list of inputs for a relation in the body and
                // save it in nbdb.newR.list.inputs
                // for 2 tier - input - same-layer and parent-layer
                //          output - same-layer
                // for 3 tier  input - same-layer,parent-layer,child-layer
                //          output - same-layer
                // Now we have some naming issue. So map 
                //          inf-->same-layer, body->child-layer, surr-> parent-layer
                // all quantities can indirectly flow. -- implicit add
                var lst = []; // input qnty list
                var olst = []; // output qnty list
                if ($scope.nbdb.newR.inf.build.numBody > 0){
                    angular.forEach($scope.TmplDb().inf.quantity, function (q) {
                        lst.push({'obj': q, 'src': 'body'});
                    });
                }
                angular.forEach($scope.TmplDb().inf.quantity, function (q) {
                    olst.push({'obj': q, 'src': 'inf'});
                    lst.push({'obj': q, 'src': 'inf'});                        
                    lst.push({'obj': q, 'src': 'surr'});                        
                });
                // hack 
                var save = $scope.nbdb.newR.inf.build.numBody;
                $scope.resetNewRForm();
                $scope.nbdb.newR[tgt].list.inputs = lst.sort($scope.compareQntyList);
                $scope.nbdb.newR[tgt].list.outputs = olst.sort($scope.compareQntyList);
                if (!!$scope.nbdb.editRel 
                    && !!$scope.nbdb.editRel[tgt] 
                    && !!$scope.nbdb.editRel[tgt].show) {
                    // pre-fill
                    $scope.nbdb.newR[tgt].build = angular.copy($scope.nbdb.editRel[tgt].obj);
                }
                $scope.nbdb.newR.inf.build.numBody = save;
            };
            $scope.canCycGen = function (rel) {
                if (appmod.length(rel.outputs) === 1) {
                    if (rel.numBody === 0) {
                        return true;
                    } else {
                        // need atleast one 'inf' based input
                        var found = false;
                        angular.forEach(rel.inputs, function (ii, idx) {
                            if (ii.quantity.split('/')[1] === 'inf') {
                                found = true;
                            }
                        });
                        if (!!found) {
                            return true;
                        }
                    }
                } else {
                    return false;
                }
            };
            $scope.genCyclicRel = function (relId) {
                // auto generate vec variant too
                $scope.genVecRel(relId);
                $scope.genSurrInps(relId);
                // generate cyclic relations.
                // TODO : have a runtime db and a persistant db
                // all add and edits should be on persistant db.
                // Only run time db should have the generated cyclic relations
                // Since I don't have time for that, the quick fix is to generate
                // cyclic relations for ONLY relations with a single output.
                var rel = $scope.TmplDb().inf.relation[relId];
                if ($scope.canCycGen(rel)) {
                    angular.forEach(rel.inputs, function (ii, idx) {
                        if (ii.quantity.split('/')[1] === 'inf') {
                            var n_rel = rel.copy();
                            n_rel.name = n_rel.name + '_' + idx;
                            if ($scope.isUniqueRname(n_rel.name)) {
                                // swap input[idx] and output
                                var tmp = n_rel.inputs[idx];
                                var o_idx = appmod.keys(n_rel.outputs)
                                n_rel.inputs[idx] = n_rel.outputs[o_idx[0]];
                                delete n_rel.outputs[o_idx[0]];
                                n_rel.outputs[0] = tmp;
                                n_rel.outputs[0].eqn = n_rel.inputs[idx].eqn;
                                delete n_rel.inputs[idx].eqn;
                                var newId = $scope.TmplDb().addRel(n_rel,false);
                                // auto generate vec variant too
                                $scope.genVecRel(newId);
                            }
                        }
                    });
                } 
                $scope.showStatusMsg("Done");
            };
            $scope.genVecRel = function (relId) {
                // for relations which have vector inputs, the input might be in 
                // body or in inf. The user will only add vector inputs in the inf 
                // and the set of such inputs will be also moved into body-1 by this 
                // function.
                var rel = $scope.TmplDb().inf.relation[relId];
                // find all inputs from inf and see if there are vectors and move them to body
                var inpIdxs = [];
                angular.forEach(rel.inputs, function (ii, idx) {
                    var qq = ii.quantity.split('/');
                    if (qq[1] === 'inf') {
                        var q = $scope.TmplDb().getQ(qq[3]);
                        if (q.isVector) {
                            inpIdxs.push(idx);
                        }
                    }
                });
                if (!!inpIdxs.length) {
                    var n_rel = rel.copy();
                    n_rel.name = n_rel.name + '_v';
                    if ($scope.isUniqueRname(n_rel.name)) {
                        n_rel.numBody = 1;
                        angular.forEach(inpIdxs, function (idx) {
                            n_rel.inputs[idx].body = 1;
                            var qq = n_rel.inputs[idx].quantity.split('/');
                            qq[1] = 'body';
                            n_rel.inputs[idx].quantity = qq.join('/');
                        });
                        $scope.TmplDb().addRel(n_rel,false);
                    }
                } 
                // find all inputs from body-1 and see if there are vectors and move them to inf
                inpIdxs = [];
                var scalarFound = false;
                if (rel.numBody > 0) {
                    angular.forEach(rel.inputs, function (ii, idx) {
                        var qq = ii.quantity.split('/');
                        var q = $scope.TmplDb().getQ(qq[3]);
                        if ((qq[1] === 'body') && (ii.body === 1)) {
                            if (q.isVector) {
                                inpIdxs.push(idx);
                            } else {
                                scalarFound = true;
                            }
                        }
                    });
                }
                if (!!inpIdxs.length) {
                    var n_rel = rel.copy();
                    n_rel.name = n_rel.name + '_i';
                    if ($scope.isUniqueRname(n_rel.name)) {
                        if (!scalarFound) {
                            n_rel.numBody --;
                        }
                        angular.forEach(inpIdxs, function (idx) {
                            delete n_rel.inputs[idx].body;
                            var qq = n_rel.inputs[idx].quantity.split('/');
                            qq[1] = 'inf';
                            n_rel.inputs[idx].quantity = qq.join('/');
                        });
                        $scope.TmplDb().addRel(n_rel,false);
                    }
                } 
            };
            $scope.genSurrInps = function (relId) {
                // for all relations that have a single input from a lower-layer component,
                // we can get that from the upper-layer too.
                var rel = $scope.TmplDb().inf.relation[relId];
                var found = false;
                if (rel.numBody === 1) {
                    var n_rel = rel.copy();
                    n_rel.name = n_rel.name + '_u';
                    if ($scope.isUniqueRname(n_rel.name)) {
                        angular.forEach(rel.inputs, function (ii, idx) {
                            var qq = ii.quantity.split('/');
                            if (qq[1] === 'body') {
                                qq[1] = 'surr';
                                n_rel.inputs[idx].quantity = qq.join('/');
                                delete  n_rel.inputs[idx].body;
                                found = true;
                            }
                        });
                    }
                    if (!!found) {
                        n_rel.numBody = 0;
                        $scope.TmplDb().addRel(n_rel,false);
                    }
                }
            };
            $scope.allGenSurrInps = function () {
                angular.forEach($scope.TmplDb().inf.relation, function (ff) {
                    $scope.genSurrInps(ff.id);
                } );
            };
            $scope.isNameValid = function (val) {
                var ret = true;
                return ret;
            };
            
            //--- 
            $scope.rmDbRelProxy = function (obj) {
                obj.rel.destroy();
            };
            $scope.rmDbRel = function (obj) {
                $scope.rmDbRelProxy({'rel': obj});
            };
            
            //----------------------
            $scope.addCondAttrDb = function () {
                var ref = $scope.nbdb.newCondAttr; 
                if (!!ref.name){
                    $scope.TmplDb().addCondAttr($scope.nbdb.newCondAttr);
                    $scope.showStatusMsg("Successfully added attribute");
                }
                $scope.nbdb.newCondAttr = {};
            };
            // edit trigger
            $scope.editCondAttrDb = function (obj) {
                $scope.nbdb.editCondAttr = angular.copy(obj);
            };
            $scope.editDoneCondAttrDb = function () {
                var ref = $scope.nbdb.editCondAttr;
                if (!!$scope.TmplDb().condAttrsDb[ref.id]){
                    $scope.TmplDb().condAttrsDb[ref.id].edit($scope.nbdb.editCondAttr);
                    $scope.showStatusMsg("Edit successful");
                }
                $scope.cancelCondAttrDb();
            };
            $scope.cancelCondAttrDb = function () {
                $scope.nbdb.editCondAttr = {};
            };
            $scope.rmCondAttrDb = function (obj) {
                // If the attribute is not used by any one remove it.
                var conds = $scope.TmplDb().findCondUsingCondAttr(obj);
                if (!!appmod.length(conds)) {
                    $scope.showStatusMsg('Sorry can not remove');                   
                } else {
                    obj.destroy();
                    $scope.showStatusMsg('Remove successful');
                }
            };
            $scope.addDbCond = function () {
                // some manipulation
                var ref = $scope.nbdb.newCond.property;
                $scope.nbdb.newCond.property = ref.overridden;
                $scope.TmplDb().addCond($scope.nbdb.newCond);
                $scope.resetDbNewCond($scope.nbdb.newCond);
            };
            $scope.editDbCond = function () {
                var ref = $scope.nbdb.editCond;
                // $scope.nbdb.editCond.property = ref.property.overridden;
                // $scope.TmplDb().condDb[ref.id] = ref;
                $scope.TmplDb().condDb[ref.id].change({
                    'name' : ref.name,
                    'property': ref.property.overridden
                });
                delete $scope.nbdb.editCond;
            };
            $scope.startEditDbCond = function (id) {
                $scope.nbdb.editCond = angular.copy($scope.TmplDb().condDb[id]);
                var tmp = $scope.nbdb.editCond.property;
                $scope.nbdb.editCond.property = {
                        'inherited' : {}, 
                        'overridden': tmp,
                        'attr' : '',
                        'attrVal' : ''
                };
                $scope.exposeCondIsA($scope.nbdb.editCond);
            };
            $scope.resetDbEditCond = function () {
                delete $scope.nbdb.editCond; 
            };
            $scope.resetDbNewCond = function () {
                $scope.nbdb.newCond = { 
                    'isA': '', 
                    'property': {
                        'inherited' : {}, 
                        'overridden': {},
                        'attr' : '',
                        'attrVal' : ''
                    }, 
                    'has': {
                        'numParts' : 0,
                        'parts': {}
                    } 
                };
                angular.resetForm($scope, 'newCondform', {});
            };
            $scope.deleteDbCond = function (kk) {
                var cond = $scope.TmplDb().condDb[kk];
                var lst = [];
                angular.forEach(cond.rels, function(relAssocId) {
                    var rel = $scope.TmplDb().getItem(relAssocId);
                    lst.push(rel)
                });
                
                var cbObj = {
                    'cbSuccess': $scope.rmDbCond,
                    'cbCancel': $scope.cancelDbQ,
                    'data': cond,
                    'dataList': lst
                };
                $scope.askDelete(cbObj);
            };
            $scope.rmDbCond = function (cbObj) {
                var lst = cbObj.dataList;
                var cond = cbObj.data;
                // delete relations
                angular.forEach(lst, function (rel) {
                    rel.destroy();
                });
                cond.destroy();
            };
            $scope.copyPropertyAttr = function (k,v,cond) {
                cond.property.attr = k;
                cond.property.attrVal = v.toLowerCase();
            };
            $scope.rmPropertyAttr = function (k, cond) {
                delete cond.property.overridden[k];
            };
            $scope.exposeCondIsA = function (cond) {
                if (!!cond.isA) {
                    var inh_cond = $scope.TmplDb().condDb[cond.isA];
                    cond.property.inherited = inh_cond.getAllAttrs();
                    cond.has = angular.copy(inh_cond.has); 
                }
            };
            $scope.condDisplayFn = function (obj,id) {
                obj.condDisp = $scope.TmplDb().condDb[id].showAttrs();
            };
            
            $scope.moreAttr = function (cond) {
                var k = cond.property.attr;
                var v = cond.property.attrVal;
                if (k && v) {
                    var update = false; 
                    if (cond.property.inherited[k] !== undefined){ 
                        if (cond.property.inherited[k] !== v) {
                            update = true;
                        }
                    } else {
                        update = true;
                    }
                    if (update) {
                        cond.property.overridden[k] = v;
                    }
                }
                cond.property.attr = '';
                cond.property.attrVal = '';
            };
            $scope.isUniqueCondName = function (vv) {
                // check if the name is unique amount all Conds
                var found = false;
                if (vv) {
                    angular.forEach($scope.TmplDb().condDb, function (obj) {
                        if (obj.name.toLowerCase() === vv.toLowerCase()) {
                            found = true;
                            // break is done by return
                            return;
                        }
                    });
                }
                return !found;
            };
           
            $scope.exposeQntyIsA = function (qnty) {
                if (!!qnty.isA) {
                    var inh_qnty = $scope.TmplDb().qdb[qnty.isA];
                    qnty.name = inh_qnty.name + '--';
                    qnty.desc = inh_qnty.desc;
                    qnty.domain = inh_qnty.domain;
                    qnty.isVector = inh_qnty.isVector;
                    qnty.isNonNeg = inh_qnty.isNonNeg;
                }
            };
            //----during db rel addition its called
            $scope.rmQ4RInp = function (hdl, tgt) {
                var ret = {};
                angular.forEach($scope.nbdb.newR[tgt].build.inputs, function (inp, k) {
                    if (inp.quantity !== hdl) {
                        ret[k] = inp;
                    }
                });
                $scope.nbdb.newR[tgt].build.inputs = ret;
                $scope.nbdb.newR[tgt].matchInp = 
                    $scope.TmplDb().getMatchingTmplR($scope.nbdb.newR[tgt].build);
                // try to restore the list
                var hdl_s = hdl.split('/');
                if (hdl_s[1] === 'surr') {
                    hdl_s[1] = 'inf';
                }
                hdl = hdl_s.join('/');
                angular.forEach($scope.nbdb.newR[tgt].list.inputs, function (o) {
                    if (!!o.hide) {
                        if (o.obj.assocId === hdl) {
                            delete o.hide;
                        }
                    }
                });
                //$scope.suggestRelName(tgt,$scope.nbdb.newR[tgt].build);
            };
            $scope.rmQ4ROut = function (hdl, tgt) {
                var ret = {};
                angular.forEach($scope.nbdb.newR[tgt].build.outputs, function (v, k) {
                    if (v.quantity !== hdl) {
                        ret[k] = v;
                    }
                });
                $scope.nbdb.newR[tgt].build.outputs = ret;
                // try to restore the list
                var hdl_s = hdl.split('/');
                if (hdl_s[1] === 'surr') {
                    hdl_s[1] = 'inf';
                }
                hdl = hdl_s.join('/');
                angular.forEach($scope.nbdb.newR[tgt].list.outputs, function (o) {
                    if (!!o.hide) {
                        if (o.obj.assocId === hdl) {
                            delete o.hide;
                        }
                    }
                });
                //$scope.suggestRelName(tgt,$scope.nbdb.newR[tgt].build);
            };
            $scope.isUniqueRname = function (v_name) {
                return $scope.TmplDb().isUniqueRname(v_name);
            };
            $scope.isUniqueR = function(build){
                // Only after the inputs and outputs are entered will 
                // the name be allowed to be entered.
                if (build.condName) {
                    var obj = {
                        'id' : build.id, // if present its and edit
                        'condName': build.condName,
                        'inputs' : build.inputs
                    };
                    return $scope.TmplDb().isUniqueR(obj);
                }
                return true;
            }   
            $scope.setDefaultEqn = function (rel) {
                rel.setDefaultEqn();
            };
            $scope.saveNewR = function(tgt){
                var isBody = ((tgt === 'body')? true : false);
                // now add it
                var id  = $scope.TmplDb().addRel($scope.nbdb.newR[tgt].build,isBody);
                $scope.buildRelQnty();
                $scope.showStatusMsg ("Create successful");
            };

            // automatically add derivative relation
            $scope.addDerIntgRel = function (q_id, isBody) {
                var t_bld = {
                    'name' : '',
                    'condName' : '',
                    'relType' : 2, /* 2 - derivative, 3 - integral */
                    'cost' : 1,
                    "numBody": 0,
                    'inputs' : {
                        '0': {
                            'quantity' : '',
                            'mSymbol' : 'I_{0}',
                            'symbol' : 'I_{0}'
                        }
                    },
                    'outputs' : {
                        '0' : {
                            'eqn' : '',
                            'mSymbol' : 'O_{0}',
                            'symbol' : 'O_{0}',
                            'quantity' : ''
                        }
                    }
                };
                var tgt = 'inf';
                if (!!isBody) {
                    tgt = 'body';
                }
                var dq = $scope.TmplDb().findQ(
                    $scope.TmplDb().qdb[q_id].suggestDName());
                if (!!dq) {
                    // if missing
                    if (!$scope.TmplDb().eqnDb['eq_derivative']) {
                        $scope.TmplDb().eqnDb['eq_derivative'] = 'O_{0} - d(I_{0})/dt = 0';
                    }

                    var bld = angular.copy(t_bld);
                    bld.inputs[0].quantity = '/' + tgt + '/quantity/' + q_id;
                    bld.outputs[0].quantity = '/' + tgt + '/quantity/' + dq.id;
                    bld.outputs[0].eqn = 'eq_derivative';
                    $scope.suggestDRelName(tgt,bld);
                    $scope.TmplDb().addRel(bld,isBody);

                    // also add the integral relation
                    t_bld = {
                        'name' : '',
                        'condName' : '',
                        'relType' : 3, /* 2 - derivative, 3 - integral */
                        'cost' : 1,
                        "numBody": 0,
                        'inputs' : {
                            '0': {
                                'quantity' : '',
                                'mSymbol' : 'I_{0}',
                                'symbol' : 'I_{0}'
                            },
                            "1": {
                                "quantity": "/inf/quantity/Q17", /* Time*/
                                "symbol": "T_s",
                                "mSymbol": "T_s"
                            } 
                        },
                        'outputs' : {
                            '0' : {
                                'eqn' : '',
                                'mSymbol' : 'O_{0}',
                                'symbol' : 'O_{0}',
                                'quantity' : ''
                            }
                        }
                    };
                    // if missing
                    if (!$scope.TmplDb().eqnDb['eq_integral']) {
                        $scope.TmplDb().eqnDb['eq_integral'] = 'O_{0} - \\int_0^t I_{0} dt = 0';
                    }

                    var bld = angular.copy(t_bld);
                    bld.outputs[0].quantity = '/' + tgt + '/quantity/' + q_id;
                    bld.inputs[0].quantity = '/' + tgt + '/quantity/' + dq.id;
                    bld.outputs[0].eqn = 'eq_integral';
                    $scope.suggestIRelName(tgt,bld);
                    $scope.TmplDb().addRel(bld,isBody);


                }
            };
            $scope.editDbRelShow = function (tgt,rel) {
                $scope.nbdb.editRel = {};
                $scope.nbdb.editRel[tgt] = {
                    'show' : true,
                    'obj' : rel
                };
                $scope.nbdb.newR.inf.build.numBody = rel.numBody;
            };
            $scope.saveEditR = function(tgt){
                var isBody = ((tgt === 'body')? true : false);
                // now add it
                $scope.TmplDb().editRel($scope.nbdb.newR[tgt].build,isBody);
                $scope.buildRelQnty();
                $scope.showStatusMsg ("Edit successful");
                $scope.cancelEditR(tgt);
            };
            $scope.cancelEditR = function (tgt) {
                $scope.nbdb.editRel[tgt] = {
                    'show' : false,
                    'obj' : ''
                };
            };
            $scope.autoAddRels = function (qId) {
                var dbq = $scope.TmplDb().getQ(qId);
                // add a new association in body
                $scope.TmplDb().addQnty(qId, true);
                // add a new association in inf
                $scope.TmplDb().addQnty(qId, false);
                // add a new relations for flow
                // $scope.batchAddRel(qId);
                if (!!dbq.isA) {
                    $scope.addIsAQRel(dbq);
                }
                // same for its derivative
                // add the derivative relation if Quantity exists
                var dq = $scope.TmplDb().findQ(dbq.suggestDName());
                if (!!dq) {
                    $scope.TmplDb().addQnty(dq.id, true);
                    $scope.TmplDb().addQnty(dq.id, false);
                    // $scope.batchAddRel(dq.id);
                    // add derivative relation -- derivative-to 
                    $scope.addDerIntgRel(dbq.id,true);
                    $scope.addDerIntgRel(dbq.id,false);    
                }
            };
            $scope.addIsAQRel = function (q) {
                var t_bld = {
                    'name' : '',
                    'condName' : '',
                    'relType' : 1,
                    'cost' : 0,
                    "numBody": 0,
                    'inputs' : {
                        '0':{
                            'quantity' : '',
                            'mSymbol' : 'I_{0}',
                            'symbol' : 'I_{0}'
                        }
                    },
                    'outputs' : {
                        '0':{
                            'eqn' : 'eq_conn',
                            'mSymbol' : 'O_{0}',
                            'symbol' : 'O_{0}',
                            'quantity' : ''
                        }
                    }
                };
                // if missing
                if (!$scope.TmplDb().eqnDb['eq_conn']) {
                    $scope.TmplDb().eqnDb['eq_conn'] = 'O_{0} - I_{0} = 0';
                }
             
                // add connection relations S2I in Inf
                bld = angular.copy(t_bld);
                bld.inputs[0].quantity = '/inf/quantity/' + q.id;
                bld.outputs[0].quantity = '/inf/quantity/' + q.isA;
                bld.name = 'IsA_I_' + $scope.mkName(q.name); 
                $scope.TmplDb().addRel(bld,false);


            };

            // save db on server ------
            $scope.shareDbCb = function(){
                // check if the DB is complete
                if (!$scope.TmplDb().isComplete()) {
                    $scope.showStatusMsg("Error: Database incomplete!!");
                    return;
                } 
                // push the database to the server
                var res = Pdb.findOne();
                res.db = $scope.TmplDb().prepareJSON().db;
                Pdb.update({'_id': res._id}, {'db': res.db});
                $scope.showStatusMsg("Successfully shared database ");
                $scope.TmplDb().resetChangeCount();
                $scope.TmplDb().version.local = $scope.TmplDb().version.remote;
                $scope.TmplDb().version.minor = 0;
            };
            $scope.compareRelList = function (a, b) {
                if (a.name.toUpperCase() < b.name.toUpperCase()) {
                    return -1;
                }
                if (a.name.toUpperCase() > b.name.toUpperCase()) {
                    return 1;
                }
                return 0;
            };

            $scope.buildEqnList = function () {
                $scope.nbdb.dbEqns = [];
                angular.forEach($scope.TmplDb().getAllRel(), function (rel) {
                    if ($scope.nbdb.displayAllEqns.state) {
                        if ($scope.nbdb.displayAllEqns.defaults) {
                            // only defaults
                            if (rel.isDefault()) {
                                $scope.nbdb.dbEqns.push(rel);
                            }
                        } else {
                            // all 
                            $scope.nbdb.dbEqns.push(rel);
                        }
                    } else {
                        if (!rel.isComplete()) {
                            $scope.nbdb.dbEqns.push(rel);
                        }
                    }
                });
                $scope.nbdb.dbEqns.sort($scope.compareRelList);
            };
            $scope.showAllEqns = function () {
                // 
                $scope.nbdb.displayAllEqns.state = true;
                $scope.nbdb.displayAllEqns.defaults = false;
                $scope.nbdb.displayAllEqns.count++;
            };
            $scope.showIncompEqns = function () {
                // 
                $scope.nbdb.displayAllEqns.state = false;
                $scope.nbdb.displayAllEqns.defaults = false;
                $scope.nbdb.displayAllEqns.count++;
            };
            $scope.showDefEqns = function () {
                // 
                $scope.nbdb.displayAllEqns.state = true;
                $scope.nbdb.displayAllEqns.defaults = true;
                $scope.nbdb.displayAllEqns.count++;
            };
            // Ctor
            $scope.init_ctor();
        }
    ]
);

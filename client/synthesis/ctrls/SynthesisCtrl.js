var appmod = angular.module('isapPkg');


//------ The controller
appmod.controller('SynthesisCtrl',
    ['$scope', '$rootScope', '$http', '$timeout', "TemplateDB",
        function ($scope, $rootScope, $http, $timeout, tmplDbRoot) {
            // wait for the templateDB service to be ready
            $scope.startRun = function () {
                $scope.TmplDb();
                $scope.TemplateDB = tmplDbRoot;
                $scope.dbChangeCount = angular.copy($scope.TmplDb().changeCount);     
                // start     
                $scope.startEngine();
            };
            $scope.TmplDb = function () {
                return tmplDbRoot.tree;
            };
            $scope.length = appmod.length;
            
            $scope.init_ctor = function () {
                if (!tmplDbRoot.tree){
                    $scope.$watch(tmplDbRoot.tree, $scope.startRun);
                }
                $scope.startRun();
              
            };
            
            function mkStKey (id1,id2) {
                // /surr/quantity/Q2 -- with reference to the component
                return '/' + id1 + '/quantity/' + id2; 
            };
            $scope.buildQ4Synt = function () {
                var st = $scope.synb.stchg;
                st.inputs = {};
                st.outputs = {};
                var sys = {id:'inf', name: 'System'};

                var k1,k2;
                // inputs are genarally from the surroundings.
                // For quantities that can't flow we need to get 
                // them from within the body. That means they have to be 
                // with in the system
                angular.forEach($scope.TmplDb().inf.quantity, function (qnty) {
                    q = qnty.get();
                    k2 = mkStKey(sys.id, q.id);
                    st.inputs[k2] = {'qObj':q, 'src': sys};
                    st.outputs[k2] = {'qObj':q, 'src': sys};
                });
                // hide the selected ones
                angular.forEach($scope.synb.stateChange.inputs, function (inp) {
                    k1 = mkStKey(inp.comp.id, inp.Q);
                    if (!!st.inputs[k1]) {
                        st.inputs[k1].hide = true;
                    }
                    if (!!st.outputs[k1]) {
                        st.outputs[k1].hide = true;
                    }
                });
                angular.forEach($scope.synb.stateChange.outputs, function (out) {
                    k1 = mkStKey(out.comp.id, out.Q);
                    if (!!st.inputs[k1]) {
                        st.inputs[k1].hide = true;
                    }
                    if (!!st.outputs[k1]) {
                        st.outputs[k1].hide = true;
                    }
                });
            };
            $scope.sensorTypeChg = function () {
                $scope.synb.stateChange.inputs = {}
                $scope.synb.stateChange.outputs = {}
                $scope.buildQ4Synt();
            };
            $scope.rmStateChangeInp =  function (obj) {
                $scope.synb.queryDb = false;
                var k = mkStKey(obj.comp.id, obj.Q);
                delete $scope.synb.stateChange.inputs[k];
                $scope.buildQ4Synt();
            };
            $scope.rmStateChangeOut =  function (obj) {
                $scope.synb.queryDb = false;
                var k = mkStKey(obj.comp.id, obj.Q);
                delete $scope.synb.stateChange.outputs[k];
                $scope.buildQ4Synt();
            };
            $scope.addQ2StChgInp = function (obj) {
                $scope.synb.queryDb = false;
                var st = $scope.synb.stateChange;
                var k = mkStKey(obj.src.id, obj.qObj.id);
                st.inputs[k] = {'Q': obj.qObj.id, 'comp': obj.src};   
                $scope.buildQ4Synt();
            };
            $scope.addQ2StChgOut = function (obj) {
                $scope.synb.queryDb = false;
                var st = $scope.synb.stateChange;
                var k = mkStKey(obj.src.id, obj.qObj.id);
                st.outputs[k] = {'Q': obj.qObj.id, 'comp': obj.src};
                $scope.buildQ4Synt();
            };
            $scope.displayNode = function(soln, nd) {
                if (!nd) {
                    soln.UI.displayNode = null;
                } else {
                    soln.UI.displayNode = nd;
                }
            }; 
            

            $scope.startEngine = function () {
                $scope.synb = {
                    // desired
                    'stateChange' : {
                        'inputs': {}, 
                        'outputs': {}
                    },
                    // for select
                    'stchg' : {
                        'inputs' : {},
                        'outputs' : {}
                    },
                    'userConfig' : appmod.userConfig,
                    'gVar' : appmod.gVar,
                    
                    'thereIs' : {
                        'attr' : '',
                        'cond' : {}
                    },
                    'solnCart' : {},
                    'viewSol' : {},
                    'show' : '',
                    'queryDb' : 0,
                    'solnReady' : 0,
                    'page' : 0
                };
                $scope.UI = {};
                $scope.nb = {};

            };
            $scope.toJson = angular.toJson;
            $scope.clearStats = function (src) {
                if (!src) {
                    appmod.gVar = {};
                    $scope.synb.gVar = appmod.gVar;
                } else {
                    $scope.synb.gVar[src].stats = [];
                    delete $scope.synb.gVar[src].solns;
                }
            };
            $scope.diffStats = function () {
                $scope.synb.solnReady ++;
            };
            
            $scope.updateUserConf = function () {};
            $scope.resetUserConf = function () {
                appmod.userConfig = angular.copy(appmod.userConfigStatic);
                $scope.synb.userConfig = appmod.userConfig;
            };
            //---------
            $scope.searchCb = function() {
                $scope.startEngine();
                $scope.buildQ4Synt();
            };
            $scope.searchDb = function () {
                $scope.synb.timer = $timeout($scope.searchDbProxy,1000);
                $scope.synb.queryDb = 1;
            };
            $scope.resetFilters = function () {
                $scope.initFilters();
                $scope.solutionGrps();
            };
            $scope.initFilters = function () {
                $scope.synb.viewSol = {};
                // initialize defaults
                // $scope.synb.viewSol.excludeIntegral = true;
                $scope.synb.viewSol.maxCost = 150;
                $scope.synb.viewSol.allRels = {};
                // create a list of all relations
                angular.forEach($scope.solnsRaw, function (sol) {
                    angular.forEach(sol.nodes, function (nd) {
                        if (nd.getType() === 'Relation') {
                            $scope.synb.viewSol.allRels[nd.getName()] = 0;
                        }
                    });
                });
            };
            $scope.selectRel = function (idx) {
                // select only domain specific solutions
                if (!!idx) {
                    $scope.synb.viewSol.relIdx = idx;
                } else {
                    delete $scope.synb.viewSol.relIdx;
                }
                $scope.solutionGrps();
            };
            $scope.selectDomain = function (idx) {
                // select only domain specific solutions
                if (!!idx) {
                    $scope.synb.viewSol.domainIdx = idx;
                } else {
                    delete $scope.synb.viewSol.domainIdx;
                }
                $scope.solutionGrps();
            };
            $scope.selectStruct = function (idx) {
                // select only domain specific solutions
                if (!!idx) {
                    $scope.synb.viewSol.structIdx = idx;
                } else {
                    delete $scope.synb.viewSol.structIdx;
                }
                $scope.solutionGrps();
            };
            $scope.solutionGrps = function () {
                // unique numbering
                // filter out useless solns
                // create groups
                
                function uniqueNumbering(solns) {
                    // sort
                    var solnsArray = appmod.vals(solns);
                    solnsArray = solnsArray.sort(function (a, b) {return (a.wtCost - b.wtCost);});
                    var t_solns = {};
                    // set unique id for solns, zero based for easy indexing
                    var ll_count = 0;
                    angular.forEach(solnsArray, function (ll) {
                        ll.id = ll_count++;
                        appmod.push(t_solns,ll);
                    });
                    solns = t_solns;
                    return solns;
                }
                function isValid(sol) {
                    ret = true;
                    if (!!ret) {
                        // excludeBbox
                        if (!!$scope.synb.viewSol.excludeBbox) {
                            angular.forEach(sol.nodes, function (gn) {
                                if ((gn.getType() === 'Relation') 
                                    && (gn.obj.relType === 0) && (!!gn.obj.isBlkBox)) {
                                    // must exclude 
                                    ret = false;
                                }
                            });
                        }
                    }

                    if (!!ret) {
                        // excludeIntegral
                        if (!!$scope.synb.viewSol.excludeIntegral) {
                            angular.forEach(sol.nodes, function (gn) {
                                if ((gn.getType() === 'Relation') 
                                    && (gn.obj.relType === 3)) {
                                    // must exclude 
                                    ret = false;
                                }
                            });
                        }
                    }
                    
                    if (!!ret) {
                        // maxCost
                        if (!!$scope.synb.viewSol.maxCost 
                            && (sol.cost > $scope.synb.viewSol.maxCost)) {
                            ret = false;
                        }
                    }
                    function trimmer (str) {
                        // function name matching
                        return str.split(/_/)[0];
                    }
                    if (!!ret) {
                        // check of the relation name is banned (Must exclude)
                        angular.forEach(sol.nodes, function (gn) {
                            if ((gn.getType() === 'Relation')) {
                                var gname = (gn.obj.name);
                                if ($scope.synb.viewSol.allRels[gname] === '2') {
                                    // must exclude 
                                    ret = false;
                                } 
                            }
                        });
                    }
                    if (!!ret) {
                        // (Must include)
                        var relsInSol = {};
                        angular.forEach(sol.nodes, function (gn) {
                            if ((gn.getType() === 'Relation')) {
                                var gname = trimmer(gn.obj.name);
                                relsInSol[gname] = true;
                            }
                        });
                        // now see if all must include exists
                        angular.forEach($scope.synb.viewSol.allRels, function (v, k) {
                            if (v === '1') {
                                // must preset flag
                                var gname = trimmer(k);
                                if (!relsInSol[gname]) {
                                    // not present in soln -- discard
                                    ret = false;
                                }
                            }
                        });
                    }
                    
                    return ret;
                }
                function filterOutUseless (gp) {
                    var gg = {};
                    // after the change, the index may or may not be there. Use set intersection
                    if ((!!$scope.synb.viewSol.domainIdx) 
                        && (!!$scope.solnDomainGrps[$scope.synb.viewSol.domainIdx])) {
                        gg = {};
                        angular.forEach($scope.solnDomainGrps[$scope.synb.viewSol.domainIdx].solnIds, function (id) {
                            if (gp[id]) {
                                gg[id] = gp[id];
                            }
                        });
                        gp = gg;
                    }
                    if ((!!$scope.synb.viewSol.relIdx) 
                        && (!!$scope.solnRelGrps[$scope.synb.viewSol.relIdx])) {
                        gg = {};
                        angular.forEach($scope.solnRelGrps[$scope.synb.viewSol.relIdx].solnIds, function (id) {
                            if (gp[id]) {
                                gg[id] = gp[id];
                            }
                        });
                        gp = gg;
                    }
                    if ((!!$scope.synb.viewSol.structIdx) 
                        && (!!$scope.solnGrps[$scope.synb.viewSol.structIdx])) {
                        gg = {};
                        angular.forEach($scope.solnGrps[$scope.synb.viewSol.structIdx].solnIds, function (id) {
                            if (gp[id]) {
                                gg[id] = gp[id];
                            }
                        });
                        gp = gg;
                    }
                    // some more filters
                    if (!!appmod.userConfig.enableSolnFilter) {
                        gg = {};
                        angular.forEach(gp, function (sol) {
                            if (!!isValid(sol)) {
                                gg[sol.id] = sol;
                            }
                        });
                        gp = gg;
                    }
                    return gp;
                }
                function createGroups (solns) {
                    // conceptual structural 
                    var groups = {};
                    angular.forEach(solns, function (soln) {
                        // make a key with the conceptual structures of the PS
                        var cs = [];
                        angular.forEach(soln.nodes, function (gn) {
                            if (!!gn.obj.condName) {
                                if (!cs.length || cs[cs.length-1] !== gn.obj.condName) {
                                    cs.push(gn.obj.condName);
                                } 
                            }
                        });
                        var key = cs.join('>');
                        if (!groups[key]) {
                            groups[key] = {'key': key, 'length': cs.length, 'cStruct' : cs, 'solnIds' : []};
                        }
                        groups[key].solnIds.push(soln.id); 
                    });
                    $scope.solnGrps = groups;
                    //-----------------------------------
                    // relations 
                    function trimmer (str) {
                        // function name matching
                        return str.split(/_/)[0];
                    }
                    groups = {};
                    angular.forEach(solns, function (soln) {
                        // make a key with the relations of the PS
                        var cs = [];
                        angular.forEach(soln.nodes, function (gn) {
                            // custom relations
                            if ((gn.getType() === 'Relation')&&(gn.obj.relType === 0)) {
                                var gname = trimmer(gn.obj.name);
                                if (!cs.length || cs[cs.length-1] !== gname) {
                                    cs.push(gname);
                                } 
                            }
                        });
                        var key = cs.join('>');
                        if (!groups[key]) {
                            groups[key] = {'key': key, 'length': cs.length, 'cStruct' : cs, 'solnIds' : []};
                        }
                        // since solutions are sorted all that goes in are also sorted.
                        groups[key].solnIds.push(soln.id); 
                    });
                    $scope.solnRelGrps = groups;
                    // lets group them using domains
                    groups = {};
                    angular.forEach(solns, function (soln) {
                        // make a key with the relations of the PS
                        var cs = [];
                        var domains = {};
                        angular.forEach(soln.nodes, function (gn) {
                            if (gn.getType() === 'Relation') {
                                angular.forEach(gn.inputs, function (ii) {
                                    var iGn = soln.gNodes[ii.node];
                                    domains[iGn.obj.get().domain] = true;
                                });
                                angular.forEach(gn.outputs, function (ii) {
                                    var iGn = soln.gNodes[ii.node];
                                    domains[iGn.obj.get().domain] = true;
                                });
                            }
                        });
                        cs = appmod.keys(domains).sort();
                        var key = cs.join('>');
                        if (!groups[key]) {
                            groups[key] = {'key': key, 'length': cs.length, 'cStruct' : cs, 'solnIds' : []};
                        }
                        // since solutions are sorted all that goes in are also sorted.
                        groups[key].solnIds.push(soln.id); 
                    });
                    $scope.solnDomainGrps = groups;
                }
                var gp = $scope.solnsRaw;
                if (!appmod.userConfig.isExpt) {
                    gp = uniqueNumbering(gp);
                }
                // in order to apply the filter on the full set of inputs 
                // create the group twice 
                $scope.solns = gp;
                createGroups($scope.solns);
                $scope.solns = filterOutUseless(gp);    
                createGroups($scope.solns);
            };
            $scope.prepareSolnsSpace = function () {
                function mkSId(gn) {
                    if (gn.getType() === 'Relation'){
                        return gn.obj.name + '@' + gn.bodyId;
                    } else {
                        return gn.obj.get().name + '@' + gn.bodyId;
                    }
                }
                function mkLnk (src, dst) {
                    return src + '->' + dst;
                }
                function fxx(soln, hTree) {
                    // show solution principle
                    // prepare data
                    var map = hTree.map;
                    
                    var links = hTree.linksMap;
                    angular.forEach(soln.nodes, function (gn, idx1) {
                        if (gn.getType() === 'Relation') {
                            var gId = mkSId(gn);
                            if (!map[gId]) {
                                map[gId] = {
                                    'id'    : gId,
                                    'name' : gn.obj.name,
                                    'desc' : gn.obj.desc,
                                    'cond' : gn.obj.condName,
                                    'comp' : gn.bodyId,
                                    'inputs' : gn.obj.inputs,
                                    'outputs' : gn.obj.outputs,
                                    'type' : 'Relation'
                                };
                            }
                            var prevGn = soln.nodes[idx1 - 1];
                            angular.forEach(gn.inputs, function (ii) {
                                if (!soln.hide[ii.node]) {
                                    var n = soln.gNodes[ii.node];
                                    var nId = mkSId(n);
                                    if (!map[nId]) {
                                        map[nId] = {
                                            'id'   : nId, 
                                            'name' : n.obj.get().name, 
                                            'comp' : n.bodyId,
                                            'type' : 'Quantity'
                                        };
                                    }
                                    
                                    if (prevGn.id === ii.node) {
                                        links[mkLnk(mkSId(n),mkSId(gn))] = {
                                            'sp' : true,
                                            'source' : map[mkSId(n)],
                                            'target' : map[mkSId(gn)]
                                        };
                                    } else {
                                        links[mkLnk(mkSId(n), mkSId(gn))] = {
                                            'source' : map[mkSId(n)],
                                            'target' : map[mkSId(gn)]
                                        };
                                    }
                                }
                            });
                            // outputs
                            var nextGn = soln.nodes[idx1 + 1];
                            angular.forEach(gn.outputs, function (ii) {
                                if (!soln.hide[ii.node]) {
                                    var n = soln.gNodes[ii.node];
                                    var nId = mkSId(n);
                                    if (!map[nId]) {
                                        map[nId] = {
                                            'name' : n.obj.get().name, 
                                            'comp' : n.bodyId,
                                            'type' : 'Quantity'
                                        };
                                    }
                                    if (nextGn.id === ii.node) {
                                        links[mkLnk(mkSId(gn),mkSId(n))] = {
                                            'sp' : true,
                                            'source' : map[mkSId(gn)],
                                            'target' : map[mkSId(n)]
                                        };
                                    } else {
                                        links[mkLnk(mkSId(gn),mkSId(n))] = {
                                            'source' : map[mkSId(gn)],
                                            'target' : map[mkSId(n)]
                                        };
                                    }
                                }
                            });
                        } 
                    });
                    
                    map[mkSId(soln.nodes[0])].start = true;
                    map[mkSId(soln.nodes[soln.nodes.length -1])].end = true;                    
                }

                $scope.solnsSpace = {
                    'map' : {}, 
                    'linksMap' : {}, 
                    'nodes' : [],
                    'links' : [] 
                };
                angular.forEach($scope.solnsRaw, function (soln) {
                    fxx(soln, $scope.solnsSpace);
                });
                // fills arrays
                angular.forEach($scope.solnsSpace.map, function (m) {
                    $scope.solnsSpace.nodes.push(m);
                });
                angular.forEach($scope.solnsSpace.linksMap, function (ll) {
                    $scope.solnsSpace.links.push(ll);
                });
                $scope.solnsSpaceCount ++;
            };
            $scope.searchDbProxy = function() {
                function setWtCost(solns) {
                    angular.forEach(solns, function (soln) {
                        var iCost = 0;
                        angular.forEach (soln.nodes, function (gn) {
                            iCost = iCost + appmod.length(gn.inputs);
                        });
                        soln.wtCost = 0.5 * iCost + 0.5 * soln.cost;
                    });
                }
                function doRest(gp, $scope) {
                    $scope.solnsRaw = gp;
                    setWtCost(gp);
                    $scope.solnsSpaceCount = 0;
                    $scope.initFilters();
                    $scope.solutionGrps();
                    if ($scope.solns.length === 0) {
                        $scope.synb.queryDb = 2;
                    } else {
                        $scope.synb.page = 1;
                        $scope.synb.queryDb = 0;
                    }
                }
                
                $rootScope.$on('jobDone', function(e, data){
                    // do something
                    var _scope = $scope;
                    var _gp = data;
                    doRest(_gp, _scope);
                });

                // look for solution principle
                var gp;
                if (!!$scope.length($scope.synb.stateChange.outputs)) {
                    $scope.synb.sensorType = 'direct';
                    gp = $scope.TmplDb().getAllSolutions($scope.synb.stateChange);
                } else {
                    $scope.synb.sensorType = 'feedback';
                    gp = $scope.TmplDb().getAllFeedbackSolutions($scope.synb.stateChange);
                }
            };
            $scope.showSP = function (soln) {
                // show solution principle
                // prepare data
                var map = {};
                var nodes = [];
                var links = [];
                angular.forEach(soln.nodes, function (gn, idx1) {
                    if (gn.getType() === 'Relation') {
                        if (!map[gn.id]) {
                            map[gn.id] = {
                                'name' : gn.obj.name,
                                'desc' : gn.obj.desc,
                                'cond' : gn.obj.condName,
                                'comp' : gn.bodyId,
                                'inputs' : gn.obj.inputs,
                                'outputs' : gn.obj.outputs,
                                'type' : 'Relation'
                            };
                        }
                        var prevGn = soln.nodes[idx1 - 1];
                        angular.forEach(gn.inputs, function (ii) {
                            if (!soln.hide[ii.node]) {
                                var n = soln.gNodes[ii.node];
                                if (!map[n.id]) {
                                    map[n.id] = {
                                        'name' : n.obj.get().name, 
                                        'comp' : n.bodyId,
                                        'domain' : n.obj.get().domain,
                                        'type' : 'Quantity'
                                    };
                                }
                                
                                if (prevGn.id === ii.node) {
                                    links.push({
                                        'sp' : true,
                                        'source' : map[n.id],
                                        'target' : map[gn.id]
                                    });
                                } else {
                                    links.push({
                                        'source' : map[n.id],
                                        'target' : map[gn.id]
                                    });
                                }
                            }
                        });
                        // outputs
                        var nextGn = soln.nodes[idx1 + 1];
                        angular.forEach(gn.outputs, function (ii) {
                            if (!soln.hide[ii.node]) {
                                var n = soln.gNodes[ii.node];
                                if (!map[n.id]) {
                                    map[n.id] = {
                                        'name' : n.obj.get().name, 
                                        'comp' : n.bodyId,
                                        'domain' : n.obj.get().domain,
                                        'type' : 'Quantity'
                                    };
                                }
                                if (nextGn.id === ii.node) {
                                    links.push({
                                        'sp' : true,
                                        'source' : map[gn.id],
                                        'target' : map[n.id]
                                    });
                                } else {
                                    links.push({
                                        'source' : map[gn.id],
                                        'target' : map[n.id]
                                    });
                                }
                            }
                        });
                    } 
                });
                angular.forEach(map, function (m) {
                    nodes.push(m);
                });
                map[soln.nodes[0].id].start = true;
                map[soln.nodes[soln.nodes.length -1].id].end = true;
                // data is ready, now call d3
                var hTree = { 
                    'soln': soln, 
                    'map' : map, 
                    'links' : links, 
                    'nodes' : nodes, 
                    'comps' : $scope.showComp(soln)
                };
                $scope.synb.solnPrin = hTree;
                if (!$scope.synb.solnPrinChg) {
                    $scope.synb.solnPrinChg = 1;
                }
                $scope.synb.solnPrinChg = $scope.synb.solnPrinChg + 1
            };
            $scope.showComp = function (soln) {
                var cTree = soln.cNodeTree;
                var hTree = {'name' : 'comp-' + cTree.rootId + ':surroundings'};
                var stk = [];
                stk.push({'id': cTree.rootId, 'ht': hTree});
                var ss;
                while(ss = stk.pop()) {
                    if (!ss.ht.name) {
                        ss.ht.name = 'comp-' + ss.id;
                    }
                    var cn = cTree.kids[ss.id];
                    angular.forEach(cn.kids, function(ii) {
                        if (!ss.ht.children) {
                            ss.ht.children = [];
                        }
                        var ho = {'name' : 'comp-' + ii};
                        ss.ht.children.push(ho);
                        stk.push({'id' : ii, 'ht' : ho});
                    });
                };
                return hTree; 
            };
            $scope.hideSolPrinDiv = function () {
                $scope.synb.hideSolPrinDiv = true;
            }; 
            $scope.showSolPrinDiv = function () {
                $scope.synb.hideSolPrinDiv = false;
            }; 
            $scope.try2Hide = function (soln, id) {
                soln.hide[id] = id;
                delete soln.userUnHide[id];
                $scope.TmplDb().checkConnectivity(soln);
                $scope.postHideActions(soln);
            };
            $scope.postHideActions = function (soln) {
                $scope.TmplDb().getBorderRels(soln);
                $scope.TmplDb().reFillCondAttrs(soln);
                $scope.updateSym();
                // tell the display
                var hTree = $scope.synb.solnSe;
                angular.forEach(hTree.map, function (m) {
                    delete m.hide;
                    delete m.borderRel;
                    delete m.userUnHide;
                });
                angular.forEach(soln.hide, function (nn) {
                    hTree.map[nn].hide = true;
                });
                angular.forEach(soln.userUnHide, function (nn) {
                    hTree.map[nn].userUnHide = true;
                });
                angular.forEach(soln.borderRels, function (nn) {
                    hTree.map[nn].borderRel = true;
                }); 
                $scope.hideEquations(soln); 
            };
            $scope.actRelationId = function (soln, nodeId) {
                soln.uiHide = nodeId;
                soln.userUnHide[soln.uiHide] = soln.uiHide;
                delete soln.hide[soln.uiHide];
                $scope.postHideActions(soln);
            };
            $scope.actRelation = function () {
                var soln = $scope.solns[$scope.showSolSeId];
                soln.userUnHide[soln.uiHide] = soln.uiHide;
                delete soln.hide[soln.uiHide];
                $scope.postHideActions(soln);
            };
            $scope.autoActivateAll = function () {
                appmod.userConfig.exploreFrontiers = !appmod.userConfig.exploreFrontiers;
                var soln = $scope.solns[$scope.showSolSeId];
                $scope.postHideActions(soln);
            };
            $scope.deactRelation = function () {
                var soln = $scope.solns[$scope.showSolSeId];
                //$('#soln-se-plot-menu').css("opacity",'0');
                $scope.try2Hide(soln, soln.uiHide);
            };
            $scope.deactAllRelation = function (soln) {
                angular.forEach(soln.userUnHide, function (id) {
                    $scope.try2Hide(soln, id);
                });
            };
            $scope.updateSym = function () {
                // just update the uSym
                var hTree = $scope.synb.solnSe;
                var soln = hTree.soln;
                var links = hTree.links;
                var tLink = {};
              
                angular.forEach(links, function (ll) {
                    tLink[ll.id] = ll;
                });
                angular.forEach(soln.gNodes, function (gn, idx1) {
                    if (gn.getType() === 'Relation') {
                        angular.forEach(gn.inputs, function (ii) {
                            var n = soln.gNodes[ii.node];
                            var lk = n.id + '_' + gn.id;
                            if (!soln.hide[ii.node]) {
                                tLink[lk].uSym = n.uSym; 
                            }
                           
                        });
                        // outputs
                        angular.forEach(gn.outputs, function (ii) {
                            var n = soln.gNodes[ii.node];
                            var lk = gn.id + '_' + n.id;
                            if (!soln.hide[gn.id]) {
                                tLink[lk].uSym = ii.uSym;
                            }
                        });
                    } 
                });
            };
            $scope.showSolSe = function (soln) {
                $scope.synb.wait = 1;
                function fxx(soln, $scope) {
                    var soln = soln;
                    var $scope = $scope;
                    return function () {
                        // need the full solution.
                        if (!soln.detailed) {
                            $scope.TmplDb().getDetailedSoln(soln);
                        }
                        // for future
                        $scope.showSolSeId = soln.id;
                        // show solution with side-effects
                        // prepare data
                        var map = {};
                        var nodes = [];
                        var links = [];
                        var tLink = {};
                        

                        angular.forEach(soln.gNodes, function (gn, idx1) {
                            if (gn.getType() === 'Relation') {
                                if (!map[gn.id]) {
                                    map[gn.id] = {
                                        'id'   : gn.id,
                                        'name' : gn.obj.name,
                                        'desc' : gn.obj.desc,
                                        'cond' : gn.obj.condName,
                                        'comp' : gn.bodyId,
                                        'inputs' : gn.obj.inputs,
                                        'outputs' : gn.obj.outputs,
                                        'assocLinks' : {},
                                        'type' : 'Relation'
                                    };
                                }
                                if (!!soln.hide[gn.id]) {
                                    map[gn.id].hide = true;
                                }
                                if (!!soln.borderRels[gn.id]) {
                                    map[gn.id].borderRel = true;
                                }
                                angular.forEach(gn.inputs, function (ii) {
                                    var n = soln.gNodes[ii.node];
                                    if (!map[n.id]) {
                                        map[n.id] = {
                                            'id'   : n.id,
                                            'name' : n.obj.get().name, 
                                            'domain' : n.obj.get().domain, 
                                            'comp' : n.bodyId,
                                            'assocLinks' : {},
                                            'type' : 'Quantity'
                                        };
                                    }
                                    var lk = n.id + '_' + gn.id;
                                    if (!tLink[lk]) {
                                        tLink[lk] = {
                                            'id'     : lk,
                                            'source' : map[n.id],
                                            'target' : map[gn.id]
                                        };
                                    }
                                    if (!!soln.hide[ii.node]) {
                                        map[n.id].hide = true;
                                    } else {
                                        tLink[lk].uSym = n.uSym;
                                    }
                                   
                                });
                                // outputs
                                angular.forEach(gn.outputs, function (ii) {
                                    var n = soln.gNodes[ii.node];
                                    if (!map[n.id]) {
                                        map[n.id] = {
                                            'id'   : n.id,
                                            'name' : n.obj.get().name, 
                                            'domain' : n.obj.get().domain,
                                            'comp' : n.bodyId,
                                            'assocLinks' : {},
                                            'type' : 'Quantity'
                                        };
                                    }
                                    if (!!soln.hide[ii.node]) {
                                        map[n.id].hide = true;
                                    }
                                    var lk = gn.id + '_' + n.id;
                                    if (!tLink[lk]) {
                                        tLink[lk] = {
                                            'id'     : lk,
                                            'source' : map[gn.id],
                                            'target' : map[n.id]
                                        };
                                    }
                                    if (!soln.hide[gn.id]) {
                                        tLink[lk].uSym = ii.uSym;
                                    }
                                    
                                });
                            } 
                        });
                        // mark the solution principle on the link
                        angular.forEach(soln.nodes, function (gn, idx1) {
                            map[gn.id].sp = true;
                            if (gn.getType() === 'Relation') {
                                var prevGn = soln.nodes[idx1 - 1];
                                angular.forEach(gn.inputs, function (ii) {
                                    if (!soln.hide[ii.node]) {
                                        var n = soln.gNodes[ii.node];
                                        var lk = n.id + '_' + gn.id;
                                        tLink[lk].sp = true;
                                    }
                                });
                                // outputs
                                var nextGn = soln.nodes[idx1 + 1];
                                angular.forEach(gn.outputs, function (ii) {
                                    if (!soln.hide[ii.node]) {
                                        var n = soln.gNodes[ii.node];
                                        var lk = gn.id + '_' + n.id;
                                        tLink[lk].sp = true;
                                    }
                                });
                            } 
                        });

                        angular.forEach(map, function (m) {
                            nodes.push(m);
                        });
                        angular.forEach(tLink, function (l) {
                            links.push(l);
                        });
                        map[soln.nodes[0].id].start = true;
                        map[soln.nodes[soln.nodes.length -1].id].end = true;
                        // make a list of all links associated to a node
                        angular.forEach(links, function (ll) {
                            ll.source.assocLinks[ll.id] = ll;
                            ll.target.assocLinks[ll.id] = ll;
                        });
                        
                        // data is ready, now call d3
                        var hTree = { 
                            'soln': soln,
                            'map' : map, 
                            'links' : links, 
                            'nodes' : nodes,
                            'comps' : $scope.showComp(soln)
                        };
                        $scope.synb.solnSe = hTree;
                        if (!$scope.synb.solnSeChg) {
                            $scope.synb.solnSeChg = 1;
                        }
                        $scope.synb.solnSeChg = $scope.synb.solnSeChg + 1
                        // prepare the equations too
                        $scope.synb.show = soln;
                        delete $scope.synb.wait;
                    }
                }
                $timeout(fxx(soln, $scope), 1000);
                
            };
            $scope.showBundlePlot = function (soln) {
                // display all views
                $scope.showDomainPlot(soln);
                $scope.showSP(soln);
            };
            
            $scope.showDomainPlot = function (soln) {
                // make data compliant to 
                var map = {};
                var nodes = [];
                var links = [];
                
                map['root'] = {
                    'parent': '', 
                    'name' : 'root', 
                    'children': {}
                };
                angular.forEach($scope.domain, function (d) {
                    map[d] =  {
                        'parent': map['root'], 
                        'name' : d, 
                        'children': {}
                    };
                    map['root'].children[d] = map[d];
                });
                angular.forEach(soln.gNodes, function (gn) {
                    if (!soln.hide[gn.id]){
                        if (gn.getType() === 'Quantity') {
                            var r = gn.obj.get();
                            map[r.name] =  {
                                'parent': map[r.domain] , 
                                'name' : r.name, 
                                'domain' : r.domain,
                                'children': {}
                            };
                            map[r.domain].children[r.name] = map[r.name];
                        }
                    }
                });
                // children fixer
                angular.forEach(map, function (m) {
                    var h = [];
                    angular.forEach(m.children, function (dd) {
                        h.push(dd);
                    });
                    m.children = h;
                });
                // to highlight soln-principle
                var rels = {};
                var hopCount = 1;
                angular.forEach(soln.nodes, function (gn, idx) {
                    if (gn.getType() === 'Quantity') {
                        map[gn.obj.get().name].spIdx = idx;
                        map[gn.obj.get().name].hopCount = hopCount ++;
                        nodes.push(map[gn.obj.get().name]);
                    } else {
                        var prev = idx-1,
                            next = idx+1;
                        rels[prev + '_' + next] = gn;
                    }
                });
                angular.forEach(nodes, function (n, idx) {
                    if (!!idx) {
                        var nn = nodes[idx - 1];
                        links.push({
                            'source' : nn,
                            'target' : n
                        });
                    }
                });
                // cleanup
                angular.forEach($scope.domain, function (d) {
                    if (!map[d].children.length) {
                        // delete from parent
                        map[d].parent.children.remove(map[d]);
                        delete map[d];
                    }
                });
                var hTree = { 
                    'soln': soln, 
                    'rels' : rels,
                    'map' : map, 
                    'links' : links, 
                    'nodes' : nodes
                };
                $scope.synb.domainSolns = hTree;
                if (!$scope.synb.domainSolnsChg) {
                    $scope.synb.domainSolnsChg = 1;
                }
                $scope.synb.domainSolnsChg = $scope.synb.domainSolnsChg + 1;
            };
            $scope.shortList = function (solnId) {
                if (!$scope.synb.solnCart) {
                    $scope.synb.solnCart = {};
                }
                $scope.synb.solnCart[solnId] = true;
            };
            $scope.rmShortList = function (solnId) {
                delete $scope.synb.solnCart[solnId];
            };
            $scope.saveGraph = function (imgObj, fname) {
                var data = imgObj;
                var a = document.createElement('a');
                var blob = new Blob([data], {'type': 'application/octet-stream'});
                a.href = window.URL.createObjectURL(blob);
                a.download = fname;
                a.click();
            };
            $scope.savePlot = function (htmlId) {
                var svg = $('#'+ htmlId).find('svg')[0];
                var serializer = new XMLSerializer();
                var str = serializer.serializeToString(svg);
                //Need to deal with weird serializations problem in webkit
                //WebKit
                str = str.replace(/xmlns=\S*/g, 'xmlns="http://www.w3.org/2000/svg"')
                
                var fname = 'graph.svg';
                $scope.saveGraph(str,fname);
            };
            $scope.saveGraph2Disk = function (soln, idx) {
                var fName = 'plot_' + idx +'.gv';
                $scope.saveGraph(soln.gv, fName);
            };
            $scope.saveImg2Disk = function (soln, idx) {
                var fName = 'plot_' + idx +'.svg';
                $scope.saveGraph(soln.svgImg, fName);
            };

            //----------
            $scope.showEquations = function (soln) {
                soln.showEqn = true;
                $scope.TmplDb().getEquations(soln);
                $timeout(function(){                      
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"solnEqn"]);
                }, 1000);
            };
            $scope.hideEquations = function (soln) {
                soln.showEqn = false;
            };
            $scope.printEquations = function (soln) {
                function Popup(id, data) 
                {
                    var mywindow = window.open('', 'Equations-'+id, 'height=400,width=600');
                    mywindow.document.write('<html><head><title>Equations for Solution-'+id+'</title>');
                    mywindow.document.write('</head><body >');
                    mywindow.document.write(data);
                    mywindow.document.write('</body></html>');
                    mywindow.print();
                    mywindow.close();
                    return true;
                }
                Popup(soln.id, jQuery('#synEqn' + soln.id).html());
            };
            $scope.saveEquations = function (soln, idx) {
                var data = $scope.TmplDb().saveEquations(soln);
                var fName = 'plot_' + idx +'.mu';
                $scope.saveGraph(data, fName);
            };
            //----------
            $scope.askDelete = function (obj) {
               $scope.nb.askDelete = obj;
               jQuery('#confirmDelete').modal('show');
            };
            $scope.askDeleteConfirm = function () {
               var obj = $scope.nb.askDelete;
               obj.cbSuccess(obj);
            };
            $scope.askDeleteCancel = function () {
               var obj = $scope.nb.askDelete;
               obj.cbCancel(obj);
            };
            //-------------
            $scope.try2InhibitByCond = function (soln,comp,attr) {
                if(!$scope.TmplDb().try2InhibitByCond(soln, comp,attr)) {
                    $scope.showStatusMsg("Cannot Inihibit node");
                } else {
                    $scope.showBundlePlot(soln);
                    $scope.showStatusMsg("Done");
                }
            };    
            $scope.try2Inhibit = function (soln,id) {
                // qnty
                var qnty_gNode;
                if (!id) {
                    soln.UI.displayCmdMenu = false;
                    qnty_gNode = soln.UI.dispCmdNode;
                } else {
                    qnty_gNode = soln.graph[id];
                }
                if(!$scope.TmplDb().try2Inhibit(soln, qnty_gNode)) {
                    $scope.showStatusMsg("Can't Inihibit node");
                } else {
                    $scope.showStatusMsg("Done");
                    $scope.showBundlePlot(soln);
                }
            };
            $scope.try2reduce = function (soln) {
                $scope.TmplDb().try2reduce(soln); 
                $scope.showBundlePlot(soln);
            };
            $scope.clearAllInhibit = function (soln) {
                $scope.TmplDb().clearAllInhibit(soln);
            };
            $scope.fltGetCondName = function (rels) {
                var out = {};
                angular.forEach(rels, function (rel) {
                    if (!!rel.condName){
                        var nm = $scope.TmplDb().condDb[rel.condName].name;
                        if (!out[rel.condName]) {
                            out[rel.condName] = {'name' : nm, 'relIds' : []};
                        }
                        out[rel.condName]['relIds'].push(rel.id);
                    }
                });
                var ret = [];
                angular.forEach(out, function (oo) {
                    ret.push(oo);
                });
                ret = ret.sort(function (a,b) {
                    if (a.name.toUpperCase() < b.name.toUpperCase()) {
                        return -1;
                    }
                    if (a.name.toUpperCase() > b.name.toUpperCase()) {
                        return 1;
                    }
                    return 0;
                });
                return ret;
            };
            $scope.prepareData4SynbThereIs = function () {
                $scope.synb.thereIs.lst = $scope.fltGetCondName($scope.TmplDb().inf.relation);
            };
            $scope.getThereIsQnty = function () {
                // the synb.thereIs.relIds is the input
                // the output quantities for the relations has to be displayed
                var out = {};
                if ($scope.synb.thereIs.relIds){
                    angular.forEach($scope.synb.thereIs.relIds.relIds, function (relId) {
                        angular.forEach($scope.TmplDb().inf.relation[relId].outputs, function (oo) {
                            var qId = oo.quantity.split('/')[3];
                            out[qId] = qId;
                        });
                    });
                }
                $scope.synb.thereIs.qIds = appmod.keys(out);
            };
            $scope.fgColors = d3.scale.category20().range();
            $scope.bgColors = d3.scale.category20c().range(); 
            $scope.svgfgColors = d3.scale.category20b().range();
            $scope.svglgdColors = d3.scale.category20b().range();

            $scope.bgColors[0] = 'rgb(71,47,85)';
            $scope.bgColors.push('#fff');
            $scope.fgColors.push('#fff');
            
            $scope.selectSvgFgColor = function (divs, color) {
                var _divs = JSON.parse(divs);
                angular.forEach(_divs, function (div) {
                    jQuery(div).attr('style', 'fill: ' + color );
                });
            };
            $scope.selectSvgLgdColor = $scope.selectSvgFgColor;
            $scope.selectBgColor = function (div, color) {
                jQuery(div).css('background-color', color);
            };
            $scope.selectFgColor = function (div, color) {
                jQuery(div).css('color', color);
            };
            $scope.toggleFrontier = function (div) {
                var dis = jQuery(div).css('display');
                if (!dis) {
                    dis = 'inline';
                }
                if (dis === 'inline') {
                    dis = 'none';
                } else {
                    dis = 'inline';
                }
                jQuery(div).css('display', dis);
            };
            $scope.toggleFrontierAll = function () {
                var divs = ['#soln-se-plot .frontier', '#soln-se-plot .frontier-link'];
                angular.forEach(divs, function (div) {
                    $scope.toggleFrontier(div);
                });
            };
            // Ctor
            $scope.init_ctor();
        }
    ]
);

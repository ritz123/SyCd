// finds loop based solutions
var appmod = angular.module('isapPkg');
appmod.service("loopFinder", function (){

var sf = this;
this.bfsFS = function (gp, startId, config) {
    // use colored-dfs to find loops and return the path
    var eStk = [], nStk = [];
    this.paths = [];
    count = 0;
    this.stats = {'fxCall' : 0, 'nodePush': 0, 'nodePop': 0};

    
    function length (obj) {
        var ret = [];
        _.each(obj, function (ss, k) {
            ret.push(ss);
        });
        return ret.length;
    };

    // bfs with support for loop detection
    this.bfs = function (id, maxPaths) {
        var self = this;
        function explore(id, cldStk, path, edge) {
            var node  = gp.nodes[id];
            if (maxPaths <= 0) return;
            var numOut = length(gp.nodes[id].out);
            if (!!numOut) {
                _.each (gp.nodes[id].out, function (oo, k) {
                    var e = gp.edges[oo];
                    var cEdge = _.clone(edge); 
                    cEdge.push(oo);
                    var cPath = _.clone(path); 
                    cPath.push(e.dst);

                    // look if the dest was already scanned
                    if (path.indexOf(e.dst) !== -1) {
                        // its a loop
                        
                        // fill up the path info for returning
                        if (gp.nodes[e.dst].type === 'Quantity') {
                            var end = cPath.length -1;
                            var lcount = 0;
                            for (var i = end - 1; i > 0; i --) {
                                lcount ++;
                                if (cPath[i] === cPath[end]) {
                                    break;
                                } 
                                
                            }
                            var gotcha = true;
                            if (lcount < 4) {
                                // avoid int-diff - 4 len
                                // avoid self loop in rel - 2 len
                                // len 1 & 3 invalid 
                                
                                // I don't think I can check the real gnodes from this function.
                                // so just discarding the solution - TODO
                                gotcha = false;
                            }
                            if (!!gotcha) {
                                var cost = 0;
                                _.each(cEdge, function (n) {
                                    cost = cost + gp.edges[n].cost;
                                });
                                cost = cPath.length;
                                // found a loop
                                self.paths.push({
                                    'id': count ++, 
                                    'cost' : cost, 
                                    'key' : appmod.pad(cost, 10) + ':' + cPath.join('_'),
                                    'nodeIds' : cPath
                                });
                                maxPaths --;
                            }
                        } else {
                            // relation.
                            var end = cPath.length -1;
                            var lcount = 0;
                            for (var i = end - 1; i > 0; i --) {
                                if (cPath[i] === cPath[end]) {
                                    break;
                                } 
                                // count one less. so break ahead.
                                lcount ++;
                            }
                            var gotcha = true;
                            if (lcount === 1) {
                                // avoid self loops
                                
                                // I don't think I can check the real gnodes from this function.
                                // so just discarding the solution - TODO
                                gotcha = false;
                            }
                            if (!!gotcha) {
                                var cost = 0;
                                _.each(cEdge, function (n) {
                                    cost = cost + gp.edges[n].cost;
                                });
                                cost = cPath.length;
                                // found a loop
                                self.paths.push({
                                    'id': count ++, 
                                    'cost' : cost, 
                                    'key' : appmod.pad(cost, 10) + ':' + cPath.join('_'),
                                    'nodeIds' : cPath
                                });
                                maxPaths --;
                            }
                        }
                        
                        
                    } else {
                        cldStk.push({
                            'nodeId' : e.dst,
                            'path' : cPath,
                            'edge' : cEdge
                        });
                        self.stats.nodePush ++;

                    }
                });
            }
        }

        
        var scanStk = [];
        var data = {'nodeId' : id, 'path' : [], 'edge': []};
        data.path.push(id);
        scanStk.push(data);
        self.stats.nodePush ++;
        var nd;
        do {
            var cldStk = [];
            while(nd = scanStk.pop()){
                self.stats.fxCall ++;
                self.stats.nodePop ++;
                explore(nd.nodeId, cldStk, nd.path, nd.edge);
            };
            // sort to have a pre-described order
            scanStk = cldStk.sort(function (a,b) {
                if (a.id < b.id) {return -1;}
                if (a.id > b.id) {return 1;}
                return 0;
            });
        } while (!!scanStk.length);
    }
    this.showPaths = function () {
        return this.paths;
    };
    //------------
    this.bfs(startId, config.numSolns);
}

// dsf loop finder
// find all loops using dfs upto a height 
this.dfsFS = function (gp, startId, config) {
    // use colored-dfs to find loops and return the path
    var stk = [];
    var eStk = [], nStk = [];
    this.paths = [];
    this.stats = {'fxCall' : 0, 'nodePush': 0, 'nodePop': 0};
    count = 0;
    
    
    function length (obj) {
        var ret = [];
        _.each(obj, function (ss, k) {
            ret.push(ss);
        });
        return ret.length;
    };

    // find all solutions till a depth
    this.fx = function(id, maxDepth) {
        var self = this;
        self.stats.fxCall ++;
        nStk.push(id);
        self.stats.nodePush ++;
        if (!gp.nodes[id].colored) {
            gp.nodes[id].colored = true;
            if (nStk.length < maxDepth){
                var numOut = length(gp.nodes[id].out);
                if (!!numOut) {
                    _.each (gp.nodes[id].out, function (oo, k) {
                        eStk.push(oo);
                        var e = gp.edges[oo];
                        self.fx(e.dst, maxDepth);
                        eStk.pop();
                    });
                }
            }
            delete gp.nodes[id].colored;
        } else {
            // the end node might be a quantity or a relation.
            if (gp.nodes[id].type === 'Quantity') {
                var end = nStk.length -1;
                var lcount = 0;
                for (var i = end - 1; i > 0; i --) {
                    lcount ++;
                    if (nStk[i] === nStk[end]) {
                        break;
                    } 
                }
                var gotcha = true;
                if (lcount < 4) {
                    // avoid int-diff - 4 len
                    // avoid self loop in rel - 2 len
                    // len 1 & 3 invalid 
                    
                    // I don't think I can check the real gnodes from this function.
                    // so just discarding the solution - TODO
                    gotcha = false;
                }
                if (!!gotcha) {
                    var cost = 0;
                    _.each(eStk, function (n) {
                        cost = cost + gp.edges[n].cost;
                    });
                    cost = nStk.length;
                    // found a loop
                    self.paths.push({
                        'id': count ++, 
                        'cost' : cost, 
                        'key' : appmod.pad(cost, 10) + ':' + nStk.join('_'),
                        'nodeIds' : _.clone(nStk)
                    });
                }
            } else {
                // relation.
                var end = nStk.length -1;
                var lcount = 0;
                for (var i = end - 1; i > 0; i --) {
                    if (nStk[i] === nStk[end]) {
                        break;
                    } 
                    // count one less. so break ahead.
                    lcount ++;
                }
                var gotcha = true;
                if (lcount === 1) {
                    // avoid self loops
                    
                    // I don't think I can check the real gnodes from this function.
                    // so just discarding the solution - TODO
                    gotcha = false;
                }
                if (!!gotcha) {
                    var cost = 0;
                    _.each(eStk, function (n) {
                        cost = cost + gp.edges[n].cost;
                    });
                    cost = nStk.length;
                    // found a loop
                    self.paths.push({
                        'id': count ++, 
                        'cost' : cost,
                        'key' : appmod.pad(cost, 10) + ':' + nStk.join('_'),
                        'nodeIds' : _.clone(nStk)
                    });
                }
            }
        }
        nStk.pop();
        self.stats.nodePop ++;
    };

    // find only a fixed set of solutions
    this.gx = function(id, numSolns, maxDepth) {
        var self = this;
        self.stats.fxCall ++;
        if (self.paths.length >= numSolns) return;
        nStk.push(id);
        self.stats.nodePush ++;
        if (!gp.nodes[id].colored) {
            gp.nodes[id].colored = true;
            if (nStk.length < maxDepth){
                var numOut = length(gp.nodes[id].out);
                if (!!numOut) {
                    _.each (gp.nodes[id].out, function (oo, k) {
                        eStk.push(oo);
                        var e = gp.edges[oo];
                        self.gx(e.dst, numSolns, maxDepth);
                        eStk.pop();
                    });
                }
            }
            delete gp.nodes[id].colored;
        } else {
            // the end node might be a quantity or a relation.
            if (gp.nodes[id].type === 'Quantity') {
                var end = nStk.length -1;
                var lcount = 0;
                for (var i = end - 1; i > 0; i --) {
                    lcount ++;
                    if (nStk[i] === nStk[end]) {
                        break;
                    } 
                    
                }
                var gotcha = true;
                if (lcount < 4) {
                    // avoid int-diff - 4 len
                    // avoid self loop in rel - 2 len
                    // len 1 & 3 invalid 
                    
                    // I don't think I can check the real gnodes from this function.
                    // so just discarding the solution - TODO
                    gotcha = false;
                }
                if (!!gotcha) {
                    var cost = 0;
                    _.each(eStk, function (n) {
                        cost = cost + gp.edges[n].cost;
                    });
                    cost = nStk.length;
                    // found a loop
                    self.paths.push({
                        'id': count ++, 
                        'cost' : cost, 
                        'key' : appmod.pad(cost, 10) + ':' + nStk.join('_'),
                        'nodeIds' : _.clone(nStk)
                    });
                }
            } else {
                // relation.
                var end = nStk.length -1;
                var lcount = 0;
                for (var i = end - 1; i > 0; i --) {
                    if (nStk[i] === nStk[end]) {
                        break;
                    } 
                    // count one less. so break ahead.
                    lcount ++;
                }
                var gotcha = true;
                if (lcount === 1) {
                    // avoid self loops
                    
                    // I don't think I can check the real gnodes from this function.
                    // so just discarding the solution - TODO
                    gotcha = false;
                }
                if (!!gotcha) {
                    var cost = 0;
                    _.each(eStk, function (n) {
                        cost = cost + gp.edges[n].cost;
                    });
                    cost = nStk.length;
                    // found a loop
                    self.paths.push({
                        'id': count ++, 
                        'cost' : cost,
                        'key' : appmod.pad(cost, 10) + ':' + nStk.join('_'),
                        'nodeIds' : _.clone(nStk)
                    });
                }
            }
        }
        nStk.pop();
        self.stats.nodePop ++;
    };

    this.getAllSolns = function () {
        this.fx(startId, config.fMaxDepth);
    };

    this.getNSolns = function () {
        this.gx(startId, config.numSolns, config.fMaxDepth)
    };

    this.showPaths = function () {
        return this.paths;
    };
    //------------
    
}

});
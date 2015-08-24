// find path based solutions
var appmod = angular.module('isapPkg');
appmod.service("pathFinder", function (){
    var sf = this;
// a priority queue - low priority on top of heap
this.PriorityQueue = function () {
    // a hash table
    function HashTable (N) {
        this.hashFn = function (k) {
            return k%N;
        }
        this.find = function (k) {
            var self = this;
            var i = self.hashFn(k);
            var ptr = self.kBkt[i];
            while (!!ptr && !!ptr['next']) {
                self.stats.compare ++;
                // assume linked list in ascending order
                if (ptr.next.key === k) {
                    // found
                    return { 'result' : ptr.next, 'prev' : ptr};
                } else if (ptr.next.key < k){
                     self.stats.compare ++;
                    // check next entry
                    ptr = ptr.next;
                } else {
                    // not present
                    return { 'result' : null, 'prev' : ptr};
                }
            };
            // not present
            return { 'result' : null, 'prev' : ptr};
        };

        this.push = function (k, obj) {
            var self = this;
            var ret = self.find(k);
            if (!ret.result) {
                ret.prev.next = {'obj' : obj, 'key' : k, 'next' : ret.prev.next };
            } else {
                // already present.
            }
        };

        this.pop = function (k) {
            var self = this;
            var ret = self.find(k);
            if (!!ret.result) {
                ret.prev.next = ret.result.next;
                return ret.result.obj;
            } else {
                // absent.
                return null;
            }
        };

        this.ctor = function () {
            var self = this;
            for (var i = 0; i < N; i ++) {
                self.kBkt.push({next: ''});
            }
        };
        //---
        this.kBkt = [];
        this.stats = {'compare' : 0};
        this.ctor();
    }

    this.swap = function (idx, idx2) {
        var self = this;
        self.stats.swap ++;
        if ((idx === idx2) || !self.data[idx] || !self.data[idx2] )return;
        // swap
        var tmp = self.data[idx2];
        self.data[idx2] = self.data[idx];
        self.data[idx2].pQIdx = idx2;

        self.data[idx] = tmp; 
        self.data[idx].pQIdx = idx;
    };
    this.push = function (key, obj) {
        // push key, obj to the end of the heap and bubble it upward
        var self = this;
        var uid = this.uid();
        var pkg = {'priority' : key, 'obj': obj, 'pQId' : uid, 'pQIdx' : self.data.length};
        self.data.push(pkg);
        self.hTable.push(uid, pkg);
        // heapify upward
        var _idx = self.data.length - 1;
        self.bubbleUp(_idx);
        return uid;
    };
    this.uid = function () {
        return (this.pQId ++);
    };
    this.changePriority = function (pQId, newPriority) {
        var obj = this.pop(pQId);
        return this.push(newPriority, obj);
    };
    this.bubbleUp = function (idx) {
        var self = this;
        if (idx > 0) {
            var idx2 = Math.floor((idx-1)/2);
            while (idx2 >= 0 
                && self.data[idx2].priority > self.data[idx].priority) {
                self.stats.compare ++;
                // swap
                self.swap(idx, idx2);
                idx = idx2;
                // move up the heap array if required
                idx2 = Math.floor((idx-1)/2);
            };
            self.stats.compare ++;
        }
    };
    this.bubbleDown = function (idx) {
        var self = this;
        var lf = 2*idx + 1;
        var rt = lf + 1;
        while (true) {
            // rt cld present
            if (rt >= self.data.length) {
                // lf cld present
                if (lf >= self.data.length) {
                    // no child is present
                    break;
                } else {
                    // only lf cld present
                    self.stats.compare ++;
                    if (self.data[idx].priority > self.data[lf].priority) {
                        // swap
                        self.swap(idx, lf);
                    }
                    break;
                }
            } else {
                // both cld present
                self.stats.compare ++;
                if (self.data[lf].priority < self.data[rt].priority) {
                    // left smaller
                    self.stats.compare ++;
                    if (self.data[idx].priority > self.data[lf].priority) {
                        // swap
                        self.swap(idx, lf);
                        idx = lf;
                        // move up the heap array if required
                        lf = 2*idx + 1;
                        rt = lf + 1;
                    } else {
                        break;
                    }
                } else {
                    // right smaller
                    self.stats.compare ++;
                    if (self.data[idx].priority > self.data[rt].priority) {
                        // swap
                        self.swap(idx, rt);
                        idx = rt;
                        // move up the heap array if required
                        lf = 2*idx + 1;
                        rt = lf + 1;
                    } else {
                        break;
                    }
                    
                }
            }
        }; 
    };

    this.pop = function (id) {
        // give from the top
        var self = this;
        var len = self.data.length
        if (!len) {
            return null;
        }
        var idx = -1;
        if (id === undefined) {
            idx = 0;
            if (len === 1) {
                var ret = self.data.pop().obj;
                // delete self.idHash[ret.pQId];
                self.hTable.pop(ret.pQId);
                return ret;
            }
        } else {
            var ii = self.hTable.pop(id);
            if (!ii) {
                return null;
            }
            idx = ii.pQIdx;
        }
        self.swap(idx, len -1)
        var ret = self.data.pop().obj;
        // delete self.idHash[ret.pQId];
        self.hTable.pop(ret.pQId);
        // heapify up and down it will automatically 
        // stop at the correct position
        self.bubbleUp (idx);
        self.bubbleDown (idx);
        return ret;
    };
    this.data = [];
    this.hTable = new HashTable(53);
    this.pQId = 0;
    this.stats = {'compare' : 0, 'swap' : 0, 'hTable' : this.hTable.stats};
}
// a priority queue - low priority on top of heap
this.SimplePriorityQueue = function () {
   
    this.swap = function (idx, idx2) {
        var self = this;
        self.stats.swap ++;
        if ((idx === idx2) || !self.data[idx] || !self.data[idx2] )return;
        // swap
        var tmp = self.data[idx2];
        self.data[idx2] = self.data[idx];
        self.data[idx2].pQIdx = idx2;

        self.data[idx] = tmp; 
        self.data[idx].pQIdx = idx;
    };
    this.push = function (key, obj) {
        // push key, obj to the end of the heap and bubble it upward
        var self = this;
        var pkg = {'priority' : key, 'obj': obj, 'pQIdx' : self.data.length};
        self.data.push(pkg);
        // heapify upward
        var _idx = self.data.length - 1;
        self.bubbleUp(_idx);
    };
    
    this.bubbleUp = function (idx) {
        var self = this;
        if (idx > 0) {
            var idx2 = Math.floor((idx-1)/2);
            while (idx2 >= 0 
                && self.data[idx2].priority > self.data[idx].priority) {
                self.stats.compare ++;
                // swap
                self.swap(idx, idx2);
                idx = idx2;
                // move up the heap array if required
                idx2 = Math.floor((idx-1)/2);
            };
            self.stats.compare ++;
        }
    };
    this.bubbleDown = function (idx) {
        var self = this;
        var lf = 2*idx + 1;
        var rt = lf + 1;
        while (true) {
            // rt cld present
            if (rt >= self.data.length) {
                // lf cld present
                if (lf >= self.data.length) {
                    // no child is present
                    break;
                } else {
                    // only lf cld present
                    self.stats.compare ++;
                    if (self.data[idx].priority > self.data[lf].priority) {
                        // swap
                        self.swap(idx, lf);
                    }
                    break;
                }
            } else {
                // both cld present
                self.stats.compare ++;
                if (self.data[lf].priority < self.data[rt].priority) {
                    // left smaller
                    self.stats.compare ++;
                    if (self.data[idx].priority > self.data[lf].priority) {
                        // swap
                        self.swap(idx, lf);
                        idx = lf;
                        // move up the heap array if required
                        lf = 2*idx + 1;
                        rt = lf + 1;
                    } else {
                        break;
                    }
                } else {
                    // right smaller
                    self.stats.compare ++;
                    if (self.data[idx].priority > self.data[rt].priority) {
                        // swap
                        self.swap(idx, rt);
                        idx = rt;
                        // move up the heap array if required
                        lf = 2*idx + 1;
                        rt = lf + 1;
                    } else {
                        break;
                    }
                    
                }
            }
        }; 
    };

    this.pop = function () {
        // give from the top
        var self = this;
        var len = self.data.length
        if (!len) {
            return null;
        }
        if (len === 1) {
            var ret = self.data.pop().obj;
            return ret;
        }
        self.swap(0, len -1)
        var ret = self.data.pop().obj;
        self.bubbleDown (0);
        return ret;
    };
    this.data = [];
    this.stats = {'compare' : 0, 'swap' : 0};
}

// RevDijkstra

// reverse Dijkstra
this.RevDijkstra = function (graph) {
    // graph should be of the form
    // {
    //     nodes : {n1: {out: {n2: e1}, in: {n4: e5}, id: n1}}},
    //     edges : {e1: {cost: 4, id: e1}}
    // }
    
    // reverse shortest path
    this.findSP = function (sId, tId) {
        var self = this;
        var s = self.graph.nodes[sId];
        var t = self.graph.nodes[tId];
        if (!s || !t) {
            console.log('Error: wrong index');
            return false;
        }
        // BFS and cost
        // prepare the cost field
        _.each(self.graph.nodes, function (n, k) {
            delete n.tmp_cost; 
        });
        var pQ = self.pQ;
        t.tmp_cost = 0;
        t.pQId = pQ.push(0,t);
        var nd;
        var found = false;
        while (nd = pQ.pop()) {
            // explore node
            if (nd.id === sId) {
                // we have reached the start node
                // but continue till all nodes are explored
                found = true;
            } else {
                // push kids
                _.each(nd.in, function (eId, nId) {
                    var cld = self.graph.nodes[nId];
                    self.stats.compare ++;
                    var newCost = nd.tmp_cost + self.graph.edges[eId].cost;
                    if (cld.tmp_cost === undefined) {
                        cld.tmp_cost = newCost;
                        cld.spEdge = eId; // shortest path edge
                        cld.pQId = pQ.push(cld.tmp_cost, cld);
                    } else if (newCost < cld.tmp_cost) {
                        self.stats.compare ++;
                        // we need to change the priority.
                        cld.tmp_cost = newCost;
                        cld.spEdge = eId; // shortest path edge
                        cld.pQId = pQ.changePriority(cld.pQId, cld.tmp_cost);
                    }
                    
                });
            }
        };
        // the SP is ready
        return found;
    };
    this.graph = graph;
    this.pQ = new sf.PriorityQueue();
    this.stats = {'compare' : 0, 'pQ' : this.pQ.stats};
}

// eppstein KSP
//
// This is a simplified eppstein algorithm without considering 
// any thing special for the size of the out degree edges. So 
// there is no heap of 3-outdegree. It just keeps track of the
// array of edges that need switching.
//
this.eppsteinKSP = function (graph, config) {
    this.findPath = function (startId, endId, k) {
        var self = this;
        var paths = [];
        var pQ = self.pQ;
        var minCost = self.graph.nodes[startId].tmp_cost;
        var pqKey = appmod.pad(0 + minCost, 10) + ':';
        var obj = {
            'nodeId': startId, 
            'eMap' : [],
            'nFreq' : {},
            's2h_delta' : 0,
            'key' : pqKey
        };
        obj.nFreq[startId] = 1;
        pQ.push(pqKey, obj);
        self.stats.nodePush ++;
       
        function getDstNodeAry (_map) {
            var nds = [];
            if (!!_map.length) {
                nds.push(self.graph.edges[_map[0]].src);
            }
            _.each(_map, function (ee, idx) {
                nds.push(self.graph.edges[ee].dst);
            });
            return nds;
        }
        var i, refNode; 
        for (i = 0, refNode = pQ.pop(); 
            (i < k) && !!refNode; 
            i ++, refNode = pQ.pop()) {

            var discard = false;
            self.stats.fxCall ++;
            self.stats.nodePop ++;
            var p_map = _.clone(refNode.eMap);
            // walk and explore
            var ptr = refNode.nodeId;
            var s2ptr_delta = refNode.s2h_delta;
            while(ptr != endId) {
                var ptrNode = self.graph.nodes[ptr];
                _.each(ptrNode.out, function (e, nxt) {
                    var fn = self.graph.nodes[nxt];
                    // spEdge ensures that the node is on 
                    // the shortest path from dst 
                    if ((e !== ptrNode.spEdge) 
                        && (!!fn.spEdge || fn.id === endId)) {
                        // avoid loops
                        var cld_map = _.clone(p_map);
                        cld_map.push(e);
                        var n_dst = self.graph.edges[e].dst;
                        var s2h_delta = s2ptr_delta + self.graph.edges[e].delta;
                        // since the edge cost is 0 or 1, we can get a good estimate about
                        // the final minimum path length from this point to the end.
                        // for all other paths through this node the cost will be more than this.
                        if ((s2h_delta + minCost) <= config.dMaxPathCost) {
                            if (!refNode.nFreq[n_dst]) {
                                var t_nFreq = _.clone(refNode.nFreq);
                                t_nFreq[n_dst] = 1;
                                pqKey = appmod.pad(minCost + s2h_delta, 10) + ':' 
                                    + getDstNodeAry(cld_map).join('_');
                                pQ.push(pqKey, {
                                    'nodeId': nxt, 
                                    'eMap' : cld_map, 
                                    'nFreq' : t_nFreq,
                                    's2h_delta' : s2h_delta,
                                    'key' : pqKey
                                });
                                self.stats.nodePush ++;
                            }
                        } 
                    }
                });
                ptr = self.graph.edges[ptrNode.spEdge].dst;
                s2ptr_delta += self.graph.edges[ptrNode.spEdge].delta;
                p_map.push(ptrNode.spEdge);
                if ((s2ptr_delta + minCost) > config.dMaxPathCost) {
                    discard = true;
                    self.stats.discard_cost ++;
                    break;
                }
                if (refNode.nFreq[ptr] === undefined) {
                    refNode.nFreq[ptr] = 0;
                }
                refNode.nFreq[ptr] ++;
                if (refNode.nFreq[ptr] > 1) {
                    discard = true;
                    self.stats.discard_loop ++;
                    break;
                }
            }
            if (!!discard) {
                i --;
            } else {
                function printNodeInfo () {
                    var ll = [];
                    ll.push(self.graph.edges[p_map[0]].src);
                    _.each(p_map, function (e, ii) {
                        ll.push(self.graph.edges[e].dst);
                    });
                    paths.push({
                        'id' : i,
                        'key' : refNode.key,
                        'cost' :  minCost + s2ptr_delta, 
                        'nodeIds' : ll
                    });
                }
                printNodeInfo();
            }
        }
        return paths;
    };

    this.getKSP = function (startId, endId, k_paths) {
        var self = this;
        self.startId = startId;
        self.endId = endId;
        // get SP
        var rD = self.rD;
        if (!rD.findSP(startId, endId)) {
            // didn't find a path
            // console.log('Found no path');
            return false;
        }
        // the cone from the output is ready.
        // create the input cone.
        // set up the delta's for the edges
        _.each(self.graph.nodes, function (nObj, pqKey) {
            if (!!nObj.spEdge) {
                // node lies in the cone from the output
                _.each(nObj.out, function (eId, rNId) {
                    rObj = self.graph.nodes[rNId];
                    if (!!rObj.spEdge || (rNId === endId)) {
                        self.graph.edges[eId].delta = (rObj.tmp_cost  + 
                            self.graph.edges[eId].cost) - nObj.tmp_cost;
                    }
                });
            }
        });
        self.paths = self.findPath(startId, endId, k_paths);
        return true;
    };

    // avoid loops. Its not required for good solutions
    this.showPaths = function (k) {
        return this.paths;
    };
    // --
    this.graph = graph;
    this.pQ = new sf.SimplePriorityQueue();
    this.rD = new sf.RevDijkstra(this.graph);
    this.stats = {
        'fxCall' : 0, 
        'nodePush' : 0, 
        'nodePop' : 0,
        'pQ' : this.pQ.stats, 
        'revDjk' : this.rD.stats,
        'discard_cost' : 0,
        'discard_loop' : 0
    };
}


// simple dfs 
this.dfsDS = function (graph, config) {
    var sf = this;
    function length (obj) {
        var ret = [];
        _.each(obj, function (ss, k) {
            ret.push(ss);
        });
        return ret.length;
    };

    this.getKSP = function (startId, endId, k_paths) {
        var self = this;
        var gp = self.graph;
        var nStk = [];
        nStk.push(startId);
        gp.nodes[startId].colored = true;

        function fx(vCost) {
            if (vCost >= 0) {
                var n = nStk[nStk.length -1];
                if (n === endId) {
                    // found. push path info into pQ
                    var cost = config.dMaxPathCost - vCost;
                    self.stats.nodePush ++;
                    var pqKey = appmod.pad(cost, 10) + ':' + nStk.join('_');
                    self.pQ.push(pqKey , {'cost': cost, 'key': pqKey, 'nodeIds': _.clone(nStk)});
                } else {
                    var numOut = length(gp.nodes[n].out);
                    if (!!numOut) {
                        _.each (gp.nodes[n].out, function (oo, k) {
                            var e = gp.edges[oo];
                            if (!gp.nodes[e.dst].colored) {
                                nStk.push(e.dst);
                                self.stats.fxCall ++;
                                gp.nodes[e.dst].colored = true;
                                fx(vCost - e.cost);
                                delete gp.nodes[e.dst].colored;
                                nStk.pop();
                            }
                        });
                    }
                }
            }
        }
        fx(config.dMaxPathCost);   
        self.stats.fxCall ++;
        nStk.pop();
        return true;
    };

    // avoid loops. Its not required for good solutions
    this.showPaths = function (k_paths) {
        var self = this;
        var paths = [];
        var n, i = 0;
        while(n = self.pQ.pop()) {
            self.stats.nodePop ++;
            n.id = i;
            paths.push(n);
            i ++;
            if (i >= k_paths) {break;}
        };
        return paths;
    };

    this.graph = graph;
    this.pQ = new sf.SimplePriorityQueue();
    this.stats = {'fxCall' : 0, 'nodePush': 0, 'nodePop': 0, 'pQ' : this.pQ.stats};

}
});
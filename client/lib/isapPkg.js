// this needs to be loaded first. So manually load this file.
var appmod = angular.module('isapPkg', ['angular-meteor', 'ui.router' 
    , "ui", "igTypeahead", "ui.bootstrap"
    ]);

function onReady() {
    angular.bootstrap(document, ['isapPkg']);
}


if (Meteor.isCordova) {
    angular.element(document).on("deviceready", onReady);
} else {
    angular.element(document).ready(onReady);
}


//------ utilities
appmod.keys = function (obj) {
    var ret = [];
    angular.forEach(obj, function (v, k) {
        ret.push(k);
    });
    return ret;
};
appmod.vals = function (obj) {
    var ret = [];
    angular.forEach(obj, function (v, k) {
        ret.push(v);
    });
    return ret;
};
appmod.pad = function (n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
// a global variable
appmod.gVar = {};

appmod.userConfigStatic = {
    'isExpt' : false,
    'isElecCtrl' : true,
    'numSolns' : 100,
    'dMaxPathCost' : 15, 
    'fMaxDepth' : 20,
    'fsAlgo' : 'BFS',
    'dMaxCNodes' : 3,
    'fMaxCNodes' : 3,
    'exploreFrontiers' : false,
    'enableSolnFilter' : true,
    'allowDupDomain' : false,
    'dsAlgo' : 'KSP',
};
appmod.userConfig = angular.copy(appmod.userConfigStatic);

appmod.length = function (obj) {
    var ret = [];
    angular.forEach(obj, function (ss) {
        ret.push(ss);
    });
    return ret.length;
};
appmod.push = function (obj, val) {
    var len = appmod.length(obj);
    obj[len] = val;
};
appmod.strCond = function (obj) {
    var kk = appmod.keys(obj);
    var len = kk.length;
    if (len > 0) {
        if ((len === 1) && (kk.indexOf('0') !== -1)) {
            return obj['0'] + '';
        }
        var ret = [];
        angular.forEach(obj, function (v, k) {
            var kk = k.split('_').join('');
            if (v !== undefined) {
                ret.push(kk + ':' + v);
            }
        });
        return ret.join(' ');
    }
    return "";
};

appmod.capitalize = function (str) {
    str = str.replace(/_/g, ' ');
    return str.substring(0, 1).toUpperCase() + str.substring(1);
};


angular.resetForm = function (scope, formName, defaults) {
    jQuery('form[name=' + formName + '], form[name=' + formName + '] .ng-dirty')
        .removeClass('ng-dirty').addClass('ng-pristine');
    var form = scope[formName];
    if (form) {
        form.$dirty = false;
        form.$pristine = true;
        var field;
        for (field = 0; field < form.length; field++) {
            if (form[field].$pristine === false) {
                form[field].$pristine = true;
            }
            if (form[field].$dirty === true) {
                form[field].$dirty = false;
            }
        }
    }
    var d;
    for (d = 0; d < defaults.length; d++) {
        scope[d] = defaults[d];
    }
};
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
//------ Directives
appmod.directive('capitalizeFirst', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            var capitalize = function (inputValue) {
                if (!!inputValue) {
                    var capitalized = inputValue.charAt(0).toUpperCase() +
                                     inputValue.substring(1);
                    if (capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                }
                return null;
            }
            modelCtrl.$parsers.push(capitalize);
            if (!!scope[attrs.ngModel]) {
                capitalize(scope[attrs.ngModel]);  // capitalize initial value
            }
        }
    };
});

appmod.directive('lowerCase', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            var myLowerCase = function (inputValue) {
                if (!!inputValue) {
                    var capitalized = inputValue.toLowerCase();
                    if (capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                }
                return null;
            }
            modelCtrl.$parsers.push(myLowerCase);
            if (!!scope[attrs.ngModel]) {
                myLowerCase(scope[attrs.ngModel]);  // capitalize initial value
            }
        }
    };
});



// rebuild a list after watching a variable by calling a callback
appmod.directive('bsTrigger', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.bsTriggerWatch, function (n, o) {
                var cb = attrs.bsTriggerCb;
                var cbData = attrs.bsTriggerCbData;
                if (n !== o) {
                    scope[cb](cbData);
                }
            }, true);
        }
    };
});

appmod.directive ('bsDomainPlot', ["TemplateDB", function (tmplDb) {
    function fx (elem, data) {
        var diameter = 700, width = 1000, height = 700,
            radius = diameter / 2,
            innerRadius = radius - 120;

        var cluster = d3.layout.cluster()
            .size([360, innerRadius])
            .sort(null);

        var bundle = d3.layout.bundle();

        var line = d3.svg.line.radial()
            .interpolate("bundle")
            .tension(.85)
            .radius(function(d) { return d.y; })
            .angle(function(d) { return d.x / 180 * Math.PI; });

        d3.select(elem[0]).select("svg").remove();
        var svgHeader = d3.select(elem[0]).append("svg")
            .attr("id", "domain-view-plot")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox","0.00 0.00 900.00 900.00")
            .attr('preserveAspectRatio','xMidYMid meet');

        var svg = svgHeader.append("g")
                .attr("transform", "translate(" + (width/2) + "," + (height/2) + ")");
        
        svg.append("defs")
            .append("marker")
                .attr("id", "arrow")
                // .attr("markerWidth", 10)
                // .attr("markerHeight", 10)
                .attr("orient", "auto")
                .attr("refX", 0)
                .attr("refY", 5)
                .attr("viewBox","0 0 10 10")
                .attr("markerUnits","strokeWidth")
                .append("polyline")
                    .attr("fill", "#000")
                    .attr("stroke", "#000")
                    .attr("points","0,0 10,5 0,10 1,5");
            
        var css_text= ' \
            #domain-view-plot { \
                width: 100%; \
                min-height: 100px; \
            } \
            #domain-view-plot    .node { \
                font: 300 11px "Helvetica Neue", Helvetica, Arial, sans-serif; \
            } \
            #domain-view-plot    .node:hover { \
                fill: #000; \
            } \
            #domain-view-plot    .link { \
                stroke: #cccccc; \
                stroke-width: 1px; \
                stroke-opacity: .9; \
                fill: none; \
            } \
            #domain-view-plot    .node:hover, \
            #domain-view-plot    .node--source, \
            #domain-view-plot    .node--target { \
                font-weight: normal; \
            } \
            #domain-view-plot    .node--source { \
                fill: #2ca02c; \
            } \
            #domain-view-plot    .node--target { \
                fill: #d62728; \
            } \
            #domain-view-plot    .link--mouse { \
                stroke: #765728 !important; \
                stroke-width: 2px !important; \
            } \
            #domain-view-plot    .link--source, \
            #domain-view-plot    .link--target { \
                stroke-opacity: 1; \
                stroke-width: 2px; \
            } \
            #domain-view-plot    .link--source { \
                stroke: #d62728; \
            } \
            #domain-view-plot    .link--target { \
                stroke: #2ca02c; \
            } \
            ';

        svg.append('style')
            .attr('type', 'text/css')
            .text(css_text);

        var link = svg.append("g").selectAll(".link"),
            node = svg.append("g").selectAll(".node");

        var randColor = d3.scale.category10().range().sort(function(){
            return .5 - Math.random();
        });
        var color = d3.scale.category10().range(randColor);

        function dataprocess(obj) {
            var nodes = cluster.nodes(obj.map['root']),
                links = obj.links,
                soln = obj.soln;
            
            // modify the link variable
            link = link
                .data(bundle(links))
                .enter()
                .append("path")
                    .each(function(d) { 
                        d.source = d[0], d.target = d[d.length - 1]; 
                    })
                    .attr("class", "link")
                    .attr("d", line)
                    .attr("marker-mid","url(#arrow)")
                    .on("mouseover", function (d) {
                        mouseoveredLnk(d,obj.rels);
                    })
                    .on("mouseout", mouseoutedLnk)
                    ;
                
           
            // modify the node variable
            node = node
                .data(nodes.filter(function(n) { return !n.children; }))
                .enter().append("text")
                    .attr("class", "node")
                    .attr("fill", function(d) {return color(d.domain)})
                    .attr("dy", ".31em")
                    .attr("transform", function(d) { 
                        return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); 
                    })
                    .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
                    .text(function(d) { return d.name; })
                    .on("mouseover", mouseovered)
                    .on("mouseout", mouseouted);
           
            

        }
        dataprocess(data);

        var tooltip = d3.select(elem[0]).append('div')
            .attr("class", "svgtooltip")               
            .style("opacity", 0);

        var svgElem = $(elem[0]).find('svg').get(0);
        // set pan zoom mouse wheel
        svgPanZoom(svgElem,{
            panEnabled: true,
            dragEnabled: false,
            controlIconsEnabled: true,
            zoomEnabled: true,
            minZoom: 0.05,
            maxZoom: 20,
            center: true,
            fit: true
        });
        
        var width = diameter/2;
        // draw legend
        var legend = svgHeader.selectAll(".legend")
            .data(color.domain())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { return "translate(" + (120-width) + "," + (10 + i * 20) + ")"; });

        // draw legend colored rectangles
        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        // draw legend text
        legend.append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return d;})

        function mouseovered(d) {
            node
                .each(function(n) { n.target = n.source = false; });

            link
                .classed("link--target", function(l) { 
                    if (l.target === d) return l.source.source = true; 
                })
                .classed("link--source", function(l) { 
                    if (l.source === d) return l.target.target = true; 
                });

            node
                .classed("node--target", function(n) { return n.target; })
                .classed("node--source", function(n) { return n.source; });
        }

        function mouseouted(d) {
            link
                .classed("link--target", false)
                .classed("link--source", false);

            node
                .classed("node--target", false)
                .classed("node--source", false);
        }

        function mouseoveredLnk (d, rels) {
            link.classed("link--mouse", function (l) {return l === d? true : false;});
            tooltip.style("opacity", 0.9);

            var relkey = d.source.spIdx + '_' + d.target.spIdx;
            var relgn = rels[relkey];
            if (!!relgn){
                tooltip.html(
                        "<div><b>Rel: </b>" + relgn.obj.name + "</div>" +
                        (!!tmplDb.tree.condDb[relgn.obj.condName]? 
                            "<div><b>CStruct: </b>" + 
                            tmplDb.tree.condDb[relgn.obj.condName].name  + 
                            "</div>": ""
                        ) +
                        "<div><b>Hop No:</b>" + Math.min(d.source.hopCount, d.target.hopCount) + " </div> " 
                    )
                    .style("left", (d3.event.pageX + 30) + "px")     
                    .style("top", (d3.event.pageY - 30) + "px"); 
            }
        }
        function mouseoutedLnk (d) {
            link.classed("link--mouse", false);
            tooltip.style("opacity", 0);
        }

    }

    function getVar(ptr,idx) {
        var s_idx = idx.split('.');
        var ret = ptr;
        angular.forEach(s_idx, function(i){
            ret = ret[i];
        });
        return ret;
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.bsSolWatch, function (n, o) {
                if (!!n && n != o) {
                    var sol = getVar(scope, attrs.bsSolData);
                    fx(element,sol);
                }
            }, true);
        }
    };
}]);

appmod.directive ('bsSolnPrinPlot', ["TemplateDB", function (tmplDb) {

    function fx (elem, data) {
        var width,
            height,
            rectWidth = rectHeight = 20,
            radius = 8;
        
        var ptr = $(elem);
        var marginWidth = 0;
        while (!ptr.width()) {
            ptr = ptr.parent();
            marginWidth = 40;
        }
        width = ptr.width() - marginWidth;
        if (width < 1200) {
            width = 1200;
        }
        height = $(elem).height();
        if (height < 1000) {
            height = 1000;
        }
        var randColor = d3.scale.category20().range().sort(function(){
            return .5 - Math.random();
        });
        var color = d3.scale.category20().range(randColor);

        var force = d3.layout.force()
            .gravity(0.1)
            .linkDistance(20)
            .charge(-300)
            .size([width, height]);

        d3.select(elem[0]).select("svg").remove();
        var svgHeader = d3.select(elem[0]).append("svg")
            .attr("id", "soln-prin-plot")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox","0.00 0.00 900.00 500.00")
            .attr('preserveAspectRatio','xMidYMid meet');

        var svg = svgHeader.append("g")
                .attr("transform", "translate(0,0)");
        
        svg.append("defs")
            .append("marker")
                .attr("id", "arrow")
                .attr("markerWidth", 4)
                .attr("markerHeight", 3)
                .attr("orient", "auto")
                .attr("refX", 10 + 4*radius + 2)
                .attr("refY", 5)
                .attr("viewBox","0 0 10 10")
                .attr("markerUnits","strokeWidth")
                .append("polyline")
                    .attr("points","0,0 10,5 0,10 1,5")
                    .attr("fill","#f3c");
            
        var css_text = '\
            #soln-prin-plot .node { \
                stroke: #ffffff; \
                stroke-width: 1.5px; \
                font-size: 1.2em; \
            } \
            #soln-prin-plot .link { \
                fill: #fce; \
                stroke: #ccc; \
                stroke-width: 1.5px; \
            } \
            #soln-prin-plot .sp { \
                stroke: #f3c !important; \
            } \
            #soln-prin-plot .fixed { \
                stroke: cyan !important; \
            } \
            #soln-prin-plot .relation { \
                stroke: #ffffff; \
            } \
            #soln-prin-plot .svg-node-text { \
                stroke: none; \
                fill: #faa; \
            } \
            #soln-prin-plot .legend, \
            #soln-prin-plot .halo--legend { \
                fill: #faa; \
            } \
            #soln-prin-plot .c0 { \
                stroke : #cccccc; \
                stroke-width: 2px; \
            } \
            #soln-prin-plot .start .c0, \
            #soln-prin-plot .start .c2 { \
                stroke : #05B305; \
                stroke-dasharray: 5,5; \
                stroke-width: 2px; \
            } \
            #soln-prin-plot .end .c1 { \
                stroke: red; \
                stroke-width: 2px; \
            }';

        svg.append('style')
            .attr('type', 'text/css')
            .text(css_text);

        var nodes = data.nodes,
            links = data.links;

        force.nodes(nodes)
            .links(links)
            .start();

        var link = svg.append("g").selectAll("line")
            .data(links)
            .enter()
                .insert("svg:line")
                .attr("class", "link")
                .classed('sp', function (d) {return d.sp;});

        link
            .attr("marker-end","url(#arrow)");

        function dblclick(d) {
            d3.select(this).classed("fixed", d.fixed = false);
        }

        force.on("tick", function(e) {
            node
                .attr("transform", function(d) { 
                    return "translate(" + d.x + "," + d.y + ")"; 
                });

            link
                .attr("x1", function(d) {return d.source.x;})
                .attr("x2", function(d) {return d.target.x;})
                .attr("y1", function(d) {return d.source.y;})
                .attr("y2", function(d) {return d.target.y;});

        });  
        

        var drag = d3.behavior.drag()
            .on("dragstart", function(){
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).classed("fixed", function(d) {return (d.fixed = false);});
                force.resume();
                
            })
            .on("drag", function(de){
                d3.event.sourceEvent.stopPropagation(); 
                var cur;
                cur = d3.mouse(this);
                de.x += cur[0];
                de.y += cur[1];
                d3.select(this)
                    .attr("transform",  "translate(" + de.x + "," + de.y + ")");

                link
                    .attr("x1", function(d) {return d.source.x;})
                    .attr("x2", function(d) {return d.target.x;})
                    .attr("y1", function(d) {return d.source.y;})
                    .attr("y2", function(d) {return d.target.y;});

            })
            .on("dragend", function(){
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).classed("fixed", function(d) {return (d.fixed = true);});
            });

        
        var node = svg.append("g").selectAll(".node")
            .data(nodes)
            .enter().append("g")
                .attr("class", "node")
                .attr("fill", function(d) {return color(d.comp)})
                .classed("start", function (d) {return (!!d.start);})
                .classed("end", function (d) {return (!!d.end);})
                .on("mouseover", mouseovered)
                .on("mouseout", mouseouted)
                .on("dblclick", dblclick)
                .call(drag);



        var tooltip = d3.select(elem[0]).append('div')
            .attr("class", "svgtooltip")               
            .style("opacity", 0);

        // Add diff colors for components
        var circles = 
            node.filter(function(d){ return (d.type === 'Quantity');})
            .classed("relation", false)
            .classed("quantity", true)
            .append("g");

        var circle_c0 = circles    
            .append("circle")
            .classed ('c0', true)
            .attr("r", radius+1);

        var circle_c1 = circles    
            .append("circle")
            .classed ('c1', true)
            .attr("r", radius);
            
        var circle_c2 = circles    
            .append("circle")
            .classed ('c2', true)
            .attr("r", radius-1);

        var rects = node
            .filter(function(d){ return (d.type === 'Relation');})
            .classed("relation", true)
            .classed("quantity", false)
            .append("rect")
            .attr("x", -rectWidth/2)
            .attr("y", -rectHeight/2)
            .attr("width", rectWidth)
            .attr("height", rectHeight);
            

        node.append("text")
            .classed('svg-node-text', true)
            .attr("stroke", "none")
            .attr("font-size", ".5em")
            .attr("dy", "1em")
            .attr("dx", "1.5em")
            .style("text-anchor", "start")
            .text(function (d) {return d.name;})

      
        function mouseovered (d) {
            tooltip.transition()
                .duration(1000)
                .style("opacity", 0.9);
            if (d.type === 'Relation') {
                var inpstr = "";
                var outstr = "";
                angular.forEach(d.inputs, function (ii) {
                    inpstr = inpstr + tmplDb.tree.getItem(ii.quantity).get().name + ',';
                });
                angular.forEach(d.outputs, function (ii) {
                    outstr = outstr + tmplDb.tree.getItem(ii.quantity).get().name + ',';
                });
                tooltip
                    .html("<div class='tooltip-div'><div><b>Rel: </b>" + d.name + "</div>" +
                        "<div><b>Desc: </b>" + d.desc + "</div>" +
                        (
                            !!tmplDb.tree.condDb[d.cond]? 
                            "<div><b>CStruct: </b>" + tmplDb.tree.condDb[d.cond].name + "</div>" : ""
                        ) +
                        "<div><b>Inputs: </b>" + inpstr + "</div>" +
                        "<div><b>Outputs: </b>" + outstr + "</div>" +
                        "</div>"
                    )
                    .style("left", (d3.event.pageX + 50) + "px")     
                    .style("top", (d3.event.pageY - 50) + "px"); 
            } else {
                tooltip
                    .html("<div class='tooltip-div'><div><b>Qnty: </b>" + d.name + 
                        "</div><div><b>Domain: </>" + d.domain + "</div></div>")
                    .style("left", (d3.event.pageX + 50) + "px")     
                    .style("top", (d3.event.pageY - 50) + "px"); 
            }
        }
        function mouseouted (d) {
            tooltip.transition()        
                .duration(500)      
                .style("opacity", 0);
        }
        
    
        function compute () {
            force.start();
            var n = nodes.length;
            for (var i = n * n; i > 0; --i) {
                if (force.alpha() <= 0.0001) break;
                force.tick();
            }
            force.stop();

            link
                .attr("x1", function(d) {return d.source.x;})
                .attr("x2", function(d) {return d.target.x;})
                .attr("y1", function(d) {return d.source.y;})
                .attr("y2", function(d) {return d.target.y;});

            node
                .attr("transform", function(d) { 
                    return "translate(" + d.x + "," + d.y + ")"; 
                });
        }
        // initial run
        setTimeout(compute(), 10); 

        var svgElem = $(elem[0]).find('svg').get(0);
        // set pan zoom mouse wheel
        svgPanZoom(svgElem,{
            panEnabled: true,
            dragEnabled: false,
            controlIconsEnabled: true,
            zoomEnabled: true,
            minZoom: 0.05,
            maxZoom: 20,
            center: true,
            fit: true
        });  

        // draw legend
        var lwidth = 150, lheight = 50, iCount = 0;
        var legend = svgHeader.selectAll(".legend")
            .data(color.domain())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { 
                iCount ++;
                return "translate(0," + (lheight + i * 20) + ")"; 
            });

        // draw legend colored rectangles
        legend.append("rect")
            .attr("x", lwidth - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        // draw legend text
        legend.append("text")
            .attr("x", lwidth - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return ('comp-' + d);});

        // legends for halo
        var halo = [
            {'text': 'start node', 'color' : '#05B305'},
            {'text': 'end node',  'color' : 'red'},
            {'text': 'soln principle',   'color' : '#f3c'}
        ];
        // draw legend
        var haloLegend = svgHeader.selectAll(".halo--legend")
            .data(halo)
            .enter()
                .append("g")
                    .attr("class", "halo--legend")
                    .attr("transform", function(d, i) { 
                        return "translate(0," + (lheight + (iCount * 20) + (i * 20)) + ")"; 
                    });

        // draw legend colored rectangles
        haloLegend.append("rect")
            .attr("x", lwidth - 17)
            .attr("width", 16)
            .attr("height", 16)
            .style("stroke-width", "1px")
            .style("fill", "none")
            .style("stroke", function (d) {return d.color});

        // draw legend text
        haloLegend.append("text")
            .attr("x", lwidth - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return  d.text;});

        // draw the component tree
        var oWidth = width, oHeight = 200;
        var overly = d3.select(elem[0]).append('div')
            .attr('class', 'svg-overlay')
            .attr('width', oWidth)
            .attr('height', oHeight);

        function treeBuild(ol,json, w,h) {
            var m = [20, 100, 20, 150],
                i = 0,
                root;
            w = w - m[1] - m[3];
            h = h - m[0] - m[2];
            var tree = d3.layout.tree()
                .size([h, w]);

            var diagonal = d3.svg.diagonal()
                .projection(function(d) { return [d.y, d.x]; });

            var css_text = '\
                #soln-prin-plot-comp .link { \
                    fill: none !important; \
                    stroke: #ccc !important; \
                    stroke-width: 1px !important; \
                } \
                #soln-prin-plot-comp .node { \
                    stroke: #ccc !important; \
                    stroke-width: 1px !important; \
                    font-size: 1.2em !important; \
                }';

            var vis_svg = ol.append("svg:svg")
                .attr("id", "soln-prin-plot-comp")
                .attr("width", w + m[1] + m[3])
                .attr("height", h + m[0] + m[2]);

            vis_svg.append("defs")
                .append("marker")
                    .attr("id", "arrowptr")
                    .attr("markerWidth", 10)
                    .attr("markerHeight", 10)
                    .attr("orient", "auto")
                    .attr("refX", 10)
                    .attr("refY", 5)
                    .attr("viewBox","0 0 10 10")
                    .attr("markerUnits","strokeWidth")
                    .append("polyline")
                        .attr("fill", "#fff")
                        .attr("stroke", "#fff")
                        .attr("points","0,0 10,5 0,10 1,5");
                        
            var vis = vis_svg    
              .append("svg:g")
                .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

            vis_svg.append('style')
                .attr('type', 'text/css')
                .text(css_text);
            
            root = json;
            root.x0 = h / 2;
            root.y0 = 0;
            update(root);

            function update(source) {
                var duration = d3.event && d3.event.altKey ? 5000 : 500;
                // Compute the new tree layout.
                var nodes = tree.nodes(root).reverse();
                // Normalize for fixed-depth.
                nodes.forEach(function(d) { d.y = d.depth * 60; });
                // Update the nodes…
                var node = vis.selectAll("g.node")
                    .data(nodes, function(d) { return d.id || (d.id = ++i); });
                // Enter any new nodes at the parent's previous position.
                var nodeEnter = node.enter().append("svg:g")
                    .attr("class", "node")
                    .attr("transform", function(d) { 
                        return "translate(" + source.y0 + "," + source.x0 + ")"; 
                    });
                nodeEnter.append("svg:circle")
                    .attr("r", 1e-6)
                    .style("fill",  "#fff");
                nodeEnter.append("svg:text")
                    .attr("x", function(d) { return d.children? -10 : 10; })
                    .attr("dy", "-.5em")
                    .attr("text-anchor", function(d) { return d.children ? "end" : "start"; })
                    .text(function(d) { return d.name; })
                    .style("fill-opacity", 1e-6);
                // Transition nodes to their new position.
                var nodeUpdate = node.transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

                nodeUpdate.select("circle")
                    .attr("r", 4.5)
                    .style("fill", "#fff");

                nodeUpdate.select("text")
                    .style("fill-opacity", 1);

                // Transition exiting nodes to the parent's new position.
                var nodeExit = node.exit().transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
                    .remove();

                nodeExit.select("circle")
                    .attr("r", 1e-6);

                nodeExit.select("text")
                    .style("fill-opacity", 1e-6);

                // Update the links…
                var link = vis.selectAll("path.link")
                    .data(tree.links(nodes), function(d) { return d.target.id; });

                // Enter any new links at the parent's previous position.
                link.enter().insert("svg:path", "g")
                    .attr("class", "link")
                    .attr("d", function(d) {
                        var o = {x: source.x0, y: source.y0};
                        return diagonal({source: o, target: o});
                    })
                    .attr("marker-end","url(#arrowptr)")
                    .transition()
                        .duration(duration)
                        .attr("d", diagonal);

                // Transition links to their new position.
                link.transition()
                    .duration(duration)
                    .attr("d", diagonal);

                // Transition exiting nodes to the parent's new position.
                link.exit().transition()
                    .duration(duration)
                    .attr("d", function(d) {
                        var o = {x: source.x, y: source.y};
                        return diagonal({source: o, target: o});
                    })
                    .remove();

                // Stash the old positions for transition.
                nodes.forEach(function(d) {
                    d.x0 = d.x;
                    d.y0 = d.y;
                });
            }
        }

        treeBuild(overly, data.comps, oWidth, oHeight);
    }

    function getVar(ptr,idx) {
        var s_idx = idx.split('.');
        var ret = ptr;
        angular.forEach(s_idx, function(i){
            ret = ret[i];
        });
        return ret;
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.bsSolWatch, function (n, o) {
                if (!!n && n != o) {
                    var sol = getVar(scope, attrs.bsSolData);
                    $(element).html("");
                    fx(element,sol);
                }
            }, true);
        }
    };
}]);


appmod.directive ('bsSolnSePlot', ["TemplateDB", function (tmplDb) {

    function fx (elem, data, $scope) {
        var width,
            height,
            rectWidth = rectHeight = 20,
            radius = 8;

        var ptr = $(elem);
        var marginWidth = 0;
        while (!ptr.width()) {
            ptr = ptr.parent();
            marginWidth = 40;
        }
        width = ptr.width() - marginWidth;
        if (width < 1200) {
            width = 1200;
        }
        height = $(elem).height();
        if (height < 1000) {
            height = 1000;
        }

        var randColor = d3.scale.category20().range().sort(function(){
            return .5 - Math.random();
        });
        var color = d3.scale.category20().range(randColor);


        var force = d3.layout.force()
            .gravity(0.1)
            .linkDistance(40)
            .friction(0.4)
            .charge(-300)
            .size([width, height]);

        d3.select(elem[0]).select("svg").remove();
        
        var svgHeader = d3.select(elem[0]).append("svg")
            .attr('id', 'soln-se-plot')
            .attr("version", "1.1")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox","0.00 0.00 1000.00 800.00")
            .attr('preserveAspectRatio','xMidYMid meet');

        var svg = svgHeader.append("g")
                .attr("transform", "translate(0,0)");

        var defs = svg.append("defs");

        defs.append("marker")
            .attr("id", "arrow")
            .attr("markerWidth", 4)
            .attr("markerHeight", 3)
            .attr("orient", "auto")
            .attr("refX", 10 + 4*radius + 2)
            .attr("refY", 5)
            .attr("viewBox","0 0 10 10")
            .attr("markerUnits","strokeWidth")
            .append("polyline")
                .attr("points","0,0 10,5 0,10 1,5")
                .attr("fill","#f3c");

        var css_text = '\
            #soln-se-plot .node { \
                stroke: #ffffff; \
                stroke-width: 1.5px; \
                font-size: 2em; \
                cursor: move; \
            } \
            #soln-se-plot .svg-show-link { \
                fill: none; \
                stroke: #aaa; \
                stroke-width: 1.5px; \
            } \
            #soln-se-plot .svg-hide-link{ \
                fill: none; \
                stroke: #777; \
                stroke-width: 1.5px; \
                opacity: 0.00; \
            } \
            #soln-se-plot .frontier-link { \
                opacity: 0.3; \
                fill: none; \
                stroke: #ccc; \
                stroke-width: 1.5px; \
            } \
            #soln-se-plot .link--sp, \
            #soln-se-plot .node--sp .c1 { \
                stroke: #f3c; \
            } \
            #soln-se-plot .fixed { \
                stroke: cyan !important; \
            } \
            #soln-se-plot .svg-hide { \
                opacity: 0.0; \
            } \
            #soln-se-plot .frontier { \
                opacity: 0.3; \
                stroke: #ccc; \
            }\
            #soln-se-plot .frontier .c1 { \
                stroke: rgb(110, 157, 218); \
            } \
            #soln-se-plot .node:hover .c2, \
            #soln-se-plot .link--highlight { \
                stroke: yellow !important; \
                fill: yellow !important; \
            } \
            #soln-se-plot .svg-node-text { \
                stroke: none; \
                fill: #ccc; \
            } \
            #soln-se-plot .legend, \
            #soln-se-plot .halo--legend { \
                fill: #fff; \
                cursor: pointer; \
            } \
            #soln-se-plot .start .c1 { \
                stroke : #05B305 !important; \
                stroke-dasharray: 5,5; \
                stroke-width: 2px; \
            } \
            #soln-se-plot .end .c1 { \
                stroke: red !important; \
                stroke-width: 2px; \
            } \
            ';

            

        svg.append('style')
            .attr('type', 'text/css')
            .text(css_text);


        var nodes = data.nodes,
            links = data.links;

        force.nodes(nodes)
            .links(links)
            .start();

        var glink = svg.selectAll(".link")
            .data(links)
            .enter()
                .append("g")
                .attr("class", "link")
                .classed('link--sp', function (d) {return d.sp;})
                .classed("svg-hide-link", function (l) {return (!!l.source.hide || !!l.target.hide);})
                .classed("svg-show-link", function (l) {return !(!!l.source.hide || !!l.target.hide);})
                .classed("frontier-link", function (l) {
                    return ((!!l.source.borderRel && !l.target.hide) 
                        ||  (!!l.target.borderRel && !l.source.hide));})
                ;
                
        var link = glink
            .insert("svg:line")
            .attr("class", "line")
            .attr("marker-end","url(#arrow)")
            .each(function (d,i){
                d.linkAryId = i;
            });
        function dragstart(){
            force.stop();
            d3.event.sourceEvent.stopPropagation(); 
            d3.select(this).classed("fixed", function(d) {return (d.fixed = true);});
        }
        function drag(de){
            d3.event.sourceEvent.stopPropagation(); 
            force.stop();
            var cur;
            cur = d3.mouse(this);
            de.x += cur[0];
            de.y += cur[1];
            d3.select(this)
                .attr("transform",  "translate(" + de.x + "," + de.y + ")")
                .each(function (d) {
                    angular.forEach(d.assocLinks, function (v, k) {
                        d3.select(glink[0][v.linkAryId]).select('line')
                            .attr("x1", function(d) {return d.source.x;})
                            .attr("x2", function(d) {return d.target.x;})
                            .attr("y1", function(d) {return d.source.y;})
                            .attr("y2", function(d) {return d.target.y;});

                        d3.select(glink[0][v.linkAryId]).select('text')
                            .attr("stroke", "none")
                            .attr("font-size", "1em")
                            .attr('x', function (d) {return (d.source.x + d.target.x)/2;})
                            .attr('y', function (d) {return (d.source.y + d.target.y)/2;})
                            .attr("dy", ".35em")
                            .style("text-anchor", "start")
                            .text(function (d) {return d.uSym;});
                    });
                });                    
        }

        function dragend(de){
            d3.event.sourceEvent.stopPropagation(); 
            force.stop();
            
            var cur;
            cur = d3.mouse(this);
            de.x += cur[0];
            de.y += cur[1];
            d3.select(this)
                .attr("transform",  "translate(" + de.x + "," + de.y + ")")
                .each(function (d) {
                    angular.forEach(d.assocLinks, function (v, k) {
                        d3.select(glink[0][v.linkAryId]).select('line')
                            .attr("x1", function(d) {return d.source.x;})
                            .attr("x2", function(d) {return d.target.x;})
                            .attr("y1", function(d) {return d.source.y;})
                            .attr("y2", function(d) {return d.target.y;});

                        d3.select(glink[0][v.linkAryId]).select('text')
                            .attr("stroke", "none")
                            .attr("font-size", "1em")
                            .attr('x', function (d) {return (d.source.x + d.target.x)/2;})
                            .attr('y', function (d) {return (d.source.y + d.target.y)/2;})
                            .attr("dy", ".35em")
                            .style("text-anchor", "start")
                            .text(function (d) {return d.uSym;});
                    });
                }); 
        }

        function dblclick (d) {
            d3.select(this).classed("fixed", d.fixed = false);
        }

        var drag = force.drag()
            .on("dragstart", dragstart)
            .on("drag", drag)
            .on("dragend", dragend);
            
        var node = svg.selectAll(".node")
            .data(nodes)
            .enter()
                .append("g")            
                .attr("class", "node")
                .attr("fill", function(d) {return color(d.comp)})
                .classed("svg-hide", function (d) {return (!!d.hide && !d.borderRel);})
                .classed('node--sp', function (d) {return d.sp;})
                .classed('frontier', function (d) {return d.borderRel;})
                .classed("start", function (d) {return (!!d.start);})
                .classed("end", function (d) {return (!!d.end);})
                .on("mouseover", mouseovered)
                .on("mouseout", mouseouted)
                .on("dblclick", dblclick)
                .call(drag)
                ;

        var tooltip = d3.select(elem[0]).append('div')
            .attr("class", "svgtooltip")               
            .style("opacity", 0);

       
        // Add diff colors for components
        var circles = node.filter(function(d){ return (d.type === 'Quantity');})
            .classed("relation", false)
            .classed("quantity", true)
            .append ("g");
               

        var circles_c0 = circles
            .append("circle")
                .classed ('c0', true)
                .attr("r", radius+1);

        var circles_c1 = circles
            .append("circle")
                .classed ('c1', true)
                .attr("r", radius);

        var circles_c2 = circles
            .append("circle")
                .classed ('c2', true)
                .attr("r", radius-1);

        var rects = node.filter(function(d){ return (d.type === 'Relation');})
            .classed("relation", true)
            .classed("quantity", false)
            .append ("g")
                
        var rect_c0 = rects
                .append("rect")
                    .classed('c0', true)
                    .attr("x", -rectWidth/2)
                    .attr("y", -rectHeight/2)
                    .attr("width", rectWidth+2)
                    .attr("height", rectHeight+2)
                    .attr("transform", "translate(-1,-1)");


        var rect_c1 = rects
                .append("rect")
                    .classed('c1', true)
                    .attr("x", -rectWidth/2)
                    .attr("y", -rectHeight/2)
                    .attr("width", rectWidth)
                    .attr("height", rectHeight);

        var rect_c2 = rects
                .append("rect")
                    .classed('c2', true)
                    .attr("x", -rectWidth/2)
                    .attr("y", -rectHeight/2)
                    .attr("width", rectWidth-2)
                    .attr("height", rectHeight-2)
                    .attr("transform", "translate(1,1)");

        node.append("text")
            .classed('svg-node-text', true)
            .attr("stroke", "none")
            .attr("font-size", ".5em")
            .attr("dy", ".35em")
            .style("text-anchor", "start")
            .text(function (d) {return d.name;});

        var linktext = glink.append("text")
            .classed('svg-node-text', true)
            .attr("stroke", "none")
            .attr("font-size", "1em")
            .attr('x', function (d) {return (d.source.x + d.target.x)/2;})
            .attr('y', function (d) {return (d.source.y + d.target.y)/2;})
            .attr("dy", ".35em")
            .style("text-anchor", "start")
            .text(function (d) {return d.uSym;});

        var cMenu = d3.select("#soln-se-plot-menu");

        // context menu
        var contextMenuShowing = false;

        function shortRun(N) {
            if (!N) { N = 10;}
            force.resume();
            for (var i = 0; i < N; i ++) {
                force.tick();
            }
            force.stop();  
        }

        d3.select('body').on('click', function () {
            if (contextMenuShowing) {
                contextMenuShowing = false;
                cMenu.style('opacity', 0);
                
            }
            // to allow re-drawing when activate is pressed
            shortRun(1);
        });

        function showContextMenu (d, _data, _this) {
            // right click causes dragstart to get called
            contextMenuShowing = true;
            mouseouted(d);
            _data.soln.uiHide = d.id;
            cMenu
                .style("opacity", 0.9)
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY) + "px"); 
            d3.event.preventDefault();
            d3.event.stopPropagation();
            $scope.$apply();
        }
       
        function mouseovered (d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);

            if (d.type === 'Relation') {    
                var inpstr = "";
                var outstr = "";
                angular.forEach(d.inputs, function (ii) {
                    inpstr = inpstr + tmplDb.tree.getItem(ii.quantity).get().name + ',';
                });
                angular.forEach(d.outputs, function (ii) {
                    outstr = outstr + tmplDb.tree.getItem(ii.quantity).get().name + ',';
                });
                tooltip
                    .html(
                        "<div class='tooltip-div'><div><b>Rel: </b>" + d.name + "</div>" +
                        "<div><b>Desc: </b>" + d.desc + "</div>" +
                        (
                            !!tmplDb.tree.condDb[d.cond]? 
                            "<div><b>CStruct: </b>" + tmplDb.tree.condDb[d.cond].name + "</div>" : "" 
                        ) +
                        "<div><b>Inputs: </b>" + inpstr + "</div>" +
                        "<div><b>Outputs: </b>" + outstr + "</div>" +
                        "</div>"
                    )
                    .style("left", (d3.event.pageX + 50) + "px")     
                    .style("top", (d3.event.pageY - 50) + "px"); 
            } else {
                tooltip.html("<div class='tooltip-div'><div><b>Qnty: </b>" + d.name + 
                        "</div><div><b>Domain: </>" + d.domain + "</div></div>")
                    .style("left", (d3.event.pageX + 50) + "px")     
                    .style("top", (d3.event.pageY - 50) + "px"); 

            }
            // highlight inputs and outputs
            var gn = data.soln.gNodes[d.id];
            d.highLight = true;
            angular.forEach(gn.inputs, function (ii) {
                if (!data.soln.hide[ii.node] || !!data.map[ii.node].borderRel) {
                    data.map[ii.node].highLight = true;
                }
            });
            angular.forEach(gn.outputs, function (ii) {
                if (!data.soln.hide[ii.node] || !!data.map[ii.node].borderRel) {
                    data.map[ii.node].highLight = true;
                }
            });
            angular.forEach(d.assocLinks, function (v, k) {
                d3.select(glink[0][v.linkAryId]).select('line')
                    .classed("link--highlight", function (l) {
                        return (!!l.target.highLight && !!l.source.highLight);
                    });
            });
           
        }

        function mouseouted (d) {
            tooltip.transition()        
                .duration(500)      
                .style("opacity", 0);
            // rm highlight 
            var gn = data.soln.gNodes[d.id];
            delete d.highLight;
            angular.forEach(gn.inputs, function (ii) {
                if (!data.soln.hide[ii.node] || !!data.map[ii.node].borderRel) {
                    delete data.map[ii.node].highLight;
                }
            });
            angular.forEach(gn.outputs, function (ii) {
                if (!data.soln.hide[ii.node] || !!data.map[ii.node].borderRel) {
                    delete data.map[ii.node].highLight;
                }
            });
            angular.forEach(d.assocLinks, function (v, k) {
                d3.select(glink[0][v.linkAryId]).select('line')
                    .classed ("link--highlight", false);
            });
        }

        function compute () {
            force.resume();
            var n = nodes.length;
            for (var i = n * 10; i > 0; --i) {
                if (force.alpha() <= 0.001) break;
                force.tick();
            }
            force.stop();
            force.on("tick", function(e) {
                node
                    .each(function (d) {
                        if (!!d.borderRel) {
                            d3.select(this)
                                .classed("node", true)
                                .classed("svg-hide", false)
                                .classed('frontier', true)
                                .on('mouseover', mouseovered)
                                .on('mouseout', mouseouted)
                                .on('dblclick', dblclick)
                                .on('dragstart', dragstart)
                                .on('drag', drag)
                                .on('dragend', dragend)
                                ;
                        } else if (!!d.hide) {
                            d3.select(this)
                                .classed("node", false)
                                .classed("svg-hide", true)
                                .classed('frontier', false)
                                .on('mouseover', null)
                                .on('mouseout', null)
                                .on('dblclick', null)
                                .on('dragstart', null)
                                .on('drag', null)
                                .on('dragend', null)
                                ;
                        } else {
                            d3.select(this)
                                .classed("node", true)
                                .classed("svg-hide", false)
                                .classed('frontier', false)
                                .on('mouseover', mouseovered)
                                .on('mouseout', mouseouted)
                                .on('dblclick', dblclick)
                                .on('dragstart', dragstart)
                                .on('drag', drag)
                                .on('dragend', dragend)
                                ;
                        }
                        d3.select(this)
                            .attr("transform", function(d) { 
                                return "translate(" + d.x + "," + d.y + ")"; 
                            });

                        if (!!d.borderRel || !!d.userUnHide) {
                            d3.select(this).on("contextmenu", function() {
                                var _this = this;
                                showContextMenu(d, data, _this);
                                d3.event.stopPropagation();
                            });
                        } else {
                            d3.select(this).on("contextmenu",function() {
                                d3.event.preventDefault();
                                d3.event.stopPropagation(); 
                            });
                        }
                    })
                    ;

                glink
                    .each(function (d) {
                        if (!d.source.hide && !d.target.hide) {
                            d3.select(this)
                                .classed("svg-show-link", true)
                                .classed("svg-hide-link", false)
                                .classed("frontier-link", false);
                        } else if ((!d.source.hide && !!d.target.borderRel) || 
                            (!d.target.hide && !!d.source.borderRel)) {
                            d3.select(this)
                                .classed("svg-show-link", true)
                                .classed("svg-hide-link", false)
                                .classed("frontier-link", true);
                        } else {
                            d3.select(this)
                                .classed("svg-show-link", false)
                                .classed("svg-hide-link", true)
                                .classed("frontier-link", false);
                        }


                        d3.select(this).selectAll('line')
                            .attr("x1", function(d) {return d.source.x;})
                            .attr("x2", function(d) {return d.target.x;})
                            .attr("y1", function(d) {return d.source.y;})
                            .attr("y2", function(d) {return d.target.y;})
                            ;
                        d3.select(this).selectAll('text')   
                            .attr("stroke", "none")
                            .attr("font-size", "1em")
                            .attr('x', function (d) {return (d.source.x + d.target.x)/2;})
                            .attr('y', function (d) {return (d.source.y + d.target.y)/2;})
                            .attr("dy", ".35em")
                            .style("text-anchor", "start")
                            .text(function (d) {return d.uSym;});
                    })
                    ;
            }); 
            shortRun(1);
        }

        // initial run
        setTimeout(compute(), 10); 
        var svgElem = $(elem[0]).find('svg').get(0);
        // set pan zoom mouse wheel
        svgPanZoom(svgElem,{
            panEnabled: true,
            dragEnabled: false,
            controlIconsEnabled: true,
            zoomEnabled: true,
            minZoom: 0.05,
            maxZoom: 20,
            center: true,
            fit: true
        }); 

        var lwidth = 150, lheight = 50, iCount = 0;
        // draw legend
        var legend = svgHeader.selectAll(".legend")
            .data(color.domain())
            .enter()
                .append("g")
                    .attr("class", "legend")
                    .attr("transform", function(d, i) { 
                        iCount ++;
                        return "translate(0," + (lheight + i * 20) + ")"; 
                    });

        // draw legend colored rectangles
        legend.append("rect")
            .attr("x", lwidth - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        // draw legend text
        legend.append("text")
            .attr("x", lwidth - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return ('comp-' + d);});

        // legends for halo
        var halo = [
            {'text': 'start node', 'color' : 'green'},
            {'text': 'end node',  'color' : 'red'},
            {'text': 'frontier node', 'color': 'rgb(110, 157, 218)'},
            {'text': 'soln principle',   'color' : '#f3c'}
        ];
        function haloFn () {
            shortRun();
        }
        // draw legend
        var haloLegend = svgHeader.selectAll(".halo--legend")
            .data(halo)
            .enter()
                .append("g")
                    .attr("class", "halo--legend")
                    .attr("transform", function(d, i) { 
                        return "translate(0," + (lheight + (iCount * 20) + (i * 20)) + ")"; 
                    })
                    .on('click', haloFn);

        // draw legend colored rectangles
        haloLegend.append("rect")
            .attr("x", lwidth - 17)
            .attr("width", 16)
            .attr("height", 16)
            .style("stroke-width", "1px")
            .style("fill", "none")
            .style("stroke", function (d) {return d.color});

        // draw legend text
        haloLegend.append("text")
            .attr("x", lwidth - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return  d.text;});

        // draw the component tree
        var oWidth = width, oHeight = 200;
        var overly = d3.select(elem[0]).append('div')
            .attr('class', 'svg-overlay')
            .attr('width', oWidth)
            .attr('height', oHeight);

        function treeBuild(ol,json, w,h) {
            var m = [20, 100, 20, 150],
                i = 0,
                root;
            w = w - m[1] - m[3];
            h = h - m[0] - m[2];
            var tree = d3.layout.tree()
                .size([h, w]);

            var diagonal = d3.svg.diagonal()
                .projection(function(d) { return [d.y, d.x]; });

            var css_text = '\
                #soln-se-plot-comp .link { \
                    fill: none !important; \
                    stroke: #ccc !important; \
                    stroke-width: 1px !important; \
                } \
                #soln-se-plot-comp .node { \
                    stroke: #ccc !important; \
                    stroke-width: 1px !important; \
                    font-size: 1.2em !important; \
                }';

            var vis_svg = ol.append("svg:svg")
                .attr("id", "soln-prin-plot-comp")
                .attr("width", w + m[1] + m[3])
                .attr("height", h + m[0] + m[2]);

            vis_svg.append("defs")
                .append("marker")
                    .attr("id", "arrowptr")
                    .attr("markerWidth", 10)
                    .attr("markerHeight", 10)
                    .attr("orient", "auto")
                    .attr("refX", 10)
                    .attr("refY", 5)
                    .attr("viewBox","0 0 10 10")
                    .attr("markerUnits","strokeWidth")
                    .append("polyline")
                        .attr("fill", "#fff")
                        .attr("stroke", "#fff")
                        .attr("points","0,0 10,5 0,10 1,5");

            var vis = vis_svg    
              .append("svg:g")
                .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

            

            vis_svg.append('style')
                .attr('type', 'text/css')
                .text(css_text);
            
            root = json;
            root.x0 = h / 2;
            root.y0 = 0;
            update(root);

            function update(source) {
                var duration = d3.event && d3.event.altKey ? 5000 : 500;
                // Compute the new tree layout.
                var nodes = tree.nodes(root).reverse();
                // Normalize for fixed-depth.
                nodes.forEach(function(d) { d.y = d.depth * 60; });
                // Update the nodes…
                var node = vis.selectAll("g.node")
                    .data(nodes, function(d) { return d.id || (d.id = ++i); });
                // Enter any new nodes at the parent's previous position.
                var nodeEnter = node.enter().append("svg:g")
                    .attr("class", "node")
                    .attr("transform", function(d) { 
                        return "translate(" + source.y0 + "," + source.x0 + ")"; 
                    });
                nodeEnter.append("svg:circle")
                    .attr("r", 1e-6)
                    .style("fill",  "#fff");
                nodeEnter.append("svg:text")
                    .attr("x", function(d) { return d.children? -10 : 10; })
                    .attr("dy", "-.5em")
                    .attr("text-anchor", function(d) { return d.children ? "end" : "start"; })
                    .text(function(d) { return d.name; })
                    .style("fill-opacity", 1e-6);
                // Transition nodes to their new position.
                var nodeUpdate = node.transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

                nodeUpdate.select("circle")
                    .attr("r", 4.5)
                    .style("fill", "#fff");

                nodeUpdate.select("text")
                    .style("fill-opacity", 1);

                // Transition exiting nodes to the parent's new position.
                var nodeExit = node.exit().transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
                    .remove();

                nodeExit.select("circle")
                    .attr("r", 1e-6);

                nodeExit.select("text")
                    .style("fill-opacity", 1e-6);

                // Update the links…
                var link = vis.selectAll("path.link")
                    .data(tree.links(nodes), function(d) { return d.target.id; });



                // Enter any new links at the parent's previous position.
                link.enter().insert("svg:path", "g")
                    .attr("class", "link")
                    .attr("d", function(d) {
                        var o = {x: source.x0, y: source.y0};
                        return diagonal({source: o, target: o});
                    })
                    .attr("marker-end","url(#arrowptr)")
                    .transition()
                        .duration(duration)
                        .attr("d", diagonal);

                // Transition links to their new position.
                link.transition()
                    .duration(duration)
                    .attr("d", diagonal);

                // Transition exiting nodes to the parent's new position.
                link.exit().transition()
                    .duration(duration)
                    .attr("d", function(d) {
                        var o = {x: source.x, y: source.y};
                        return diagonal({source: o, target: o});
                    })
                    .remove();

                // Stash the old positions for transition.
                nodes.forEach(function(d) {
                    d.x0 = d.x;
                    d.y0 = d.y;
                });
            }
        }

        treeBuild(overly, data.comps, oWidth, oHeight);
    }

    function getVar(ptr,idx) {
        var s_idx = idx.split('.');
        var ret = ptr;
        angular.forEach(s_idx, function(i){
            ret = ret[i];
        });
        return ret;
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.bsSolWatch, function (n, o) {
                if (!!n && n != o) {
                    var sol = getVar(scope, attrs.bsSolData);
                    $(element).html("");
                    fx(element,sol, scope);
                }
            }, true);
        }
    };
}]);

appmod.directive ('bsSolnsSpacePlot', ["TemplateDB", function (tmplDb) {
   
    function fx (elem, data) {

        var width = 1000,
            height = 800,
            rectWidth = rectHeight = 20,
            radius = 8;
        
        var ptr = $(elem);
        var marginWidth = 0;
        while (!ptr.width()) {
            ptr = ptr.parent();
            marginWidth = 40;
        }
        width = ptr.width() - marginWidth;
        if (width < 1000) {
            width = 1000;
        }
        height = $(elem).height();
        if (height < 800) {
            height = 800;
        }
        var randColor = d3.scale.category20().range().sort(function(){
            return .5 - Math.random();
        });
        var color = d3.scale.category20().range(randColor);

        var force = d3.layout.force()
            .gravity(0.1)
            .linkDistance(20)
            .charge(-300)
            .size([width, height]);

        d3.select(elem[0]).select("svg").remove();
        var svgHeader = d3.select(elem[0]).append("svg")
            .attr("id", "soln-space")
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox","0.00 0.00 900.00 500.00")
            .attr('preserveAspectRatio','xMidYMid meet');

        var svg = svgHeader.append("g")
                .attr("transform", "translate(0,0)");
        
        svg.append("defs")
            .append("marker")
                .attr("id", "arrow")
                .attr("markerWidth", 4)
                .attr("markerHeight", 3)
                .attr("orient", "auto")
                .attr("refX", 10 + 4*radius + 2)
                .attr("refY", 5)
                .attr("viewBox","0 0 10 10")
                .attr("markerUnits","strokeWidth")
                .append("polyline")
                    .attr("points","0,0 10,5 0,10 1,5")
                    .attr("fill","#f3c");
            
        var css_text = '\
            #soln-space .node { \
                stroke: #ffffff; \
                stroke-width: 1.5px; \
            } \
            #soln-space .link { \
                fill: #fce; \
                stroke: #ccc; \
                stroke-width: 1.5px; \
            } \
            #soln-space .sp { \
                stroke: #f3c !important; \
            } \
            #soln-space .fixed { \
                stroke: cyan !important; \
            } \
            #soln-space .relation { \
                stroke: #ffffff; \
            } \
            #soln-space .svg-node-text { \
                stroke: none; \
                fill: #faa; \
            } \
            #soln-space .legend, \
            #soln-space .halo--legend { \
                fill: #faa; \
            } \
            #soln-space .c0 { \
                stroke : #cccccc; \
                stroke-width: 2px; \
            } \
            #soln-space .start .c0, \
            #soln-space .start .c2 { \
                stroke : #05B305; \
                stroke-width: 2px; \
            } \
            #soln-space .end .c1 { \
                stroke: red; \
                stroke-width: 2px; \
            }';

        svg.append('style')
            .attr('type', 'text/css')
            .text(css_text);

        var nodes = data.nodes,
            links = data.links;

        force.nodes(nodes)
            .links(links)
            .start();

        var link = svg.append("g").selectAll("line")
            .data(links)
            .enter()
                .insert("svg:line")
                .attr("class", "link")
                .classed('sp', function (d) {return d.sp;});

        link
            .attr("marker-end","url(#arrow)");

        function dblclick(d) {
            d3.select(this).classed("fixed", d.fixed = false);
        }

        force.on("tick", function(e) {
            node
                .attr("transform", function(d) { 
                    return "translate(" + d.x + "," + d.y + ")"; 
                });

            link
                .attr("x1", function(d) {return d.source.x;})
                .attr("x2", function(d) {return d.target.x;})
                .attr("y1", function(d) {return d.source.y;})
                .attr("y2", function(d) {return d.target.y;});

        });  
        

        var drag = d3.behavior.drag()
            .on("dragstart", function(){
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).classed("fixed", function(d) {return (d.fixed = false);});
                force.resume();
                
            })
            .on("drag", function(de){
                d3.event.sourceEvent.stopPropagation(); 
                var cur;
                cur = d3.mouse(this);
                de.x += cur[0];
                de.y += cur[1];
                d3.select(this)
                    .attr("transform",  "translate(" + de.x + "," + de.y + ")");

                link
                    .attr("x1", function(d) {return d.source.x;})
                    .attr("x2", function(d) {return d.target.x;})
                    .attr("y1", function(d) {return d.source.y;})
                    .attr("y2", function(d) {return d.target.y;});

            })
            .on("dragend", function(){
                d3.event.sourceEvent.stopPropagation();
                d3.select(this).classed("fixed", function(d) {return (d.fixed = true);});
            });

        
        var node = svg.append("g").selectAll(".node")
            .data(nodes)
            .enter().append("g")
                .attr("class", "node")
                .attr("fill", function(d) {return color(d.comp)})
                .classed("start", function (d) {return (!!d.start);})
                .classed("end", function (d) {return (!!d.end);})
                .on("mouseover", mouseovered)
                .on("mouseout", mouseouted)
                .on("dblclick", dblclick)
                .call(drag);



        var tooltip = d3.select(elem[0]).append('div')
            .attr("class", "svgtooltip")               
            .style("opacity", 0);

        // Add diff colors for components
        var circles = 
            node.filter(function(d){ return (d.type === 'Quantity');})
            .classed("relation", false)
            .classed("quantity", true)
            .append("g");

        var circle_c0 = circles    
            .append("circle")
            .classed ('c0', true)
            .attr("r", radius+1);

        var circle_c1 = circles    
            .append("circle")
            .classed ('c1', true)
            .attr("r", radius);
            
        var circle_c2 = circles    
            .append("circle")
            .classed ('c2', true)
            .attr("r", radius-1);

        var rects = node
            .filter(function(d){ return (d.type === 'Relation');})
            .classed("relation", true)
            .classed("quantity", false)
            .append("rect")
            .attr("x", -rectWidth/2)
            .attr("y", -rectHeight/2)
            .attr("width", rectWidth)
            .attr("height", rectHeight);
            

        node.append("text")
            .classed('svg-node-text', true)
            .attr("stroke", "none")
            .attr("font-size", ".5em")
            .attr("dy", "1em")
            .attr("dx", "1.5em")
            .style("text-anchor", "start")
            .text(function (d) {return d.name;})

      
        function mouseovered (d) {
            tooltip.transition()
                .duration(1000)
                .style("opacity", 0.9);
            if (d.type === 'Relation') {
                var inpstr = "";
                var outstr = "";
                angular.forEach(d.inputs, function (ii) {
                    inpstr = inpstr + tmplDb.tree.getItem(ii.quantity).get().name + ',';
                });
                angular.forEach(d.outputs, function (ii) {
                    outstr = outstr + tmplDb.tree.getItem(ii.quantity).get().name + ',';
                });
                tooltip
                    .html("<div class='tooltip-div'><div><b>Rel: </b>" + d.name + "</div>" +
                        "<div><b>Desc: </b>" + d.desc + "</div>" +
                        (
                            !!tmplDb.tree.condDb[d.cond]? 
                            "<div><b>CStruct: </b>" + tmplDb.tree.condDb[d.cond].name + "</div>" : ""
                        ) +
                        "<div><b>Inputs: </b>" + inpstr + "</div>" +
                        "<div><b>Outputs: </b>" + outstr + "</div>" +
                        "</div>"
                    )
                    .style("left", (d3.event.pageX + 50) + "px")     
                    .style("top", (d3.event.pageY - 50) + "px"); 
            } else {
                tooltip
                    .html("<div class='tooltip-div'><div><b>Qnty: </b>" + d.name + 
                        "</div></div>")
                    .style("left", (d3.event.pageX + 50) + "px")     
                    .style("top", (d3.event.pageY - 50) + "px"); 
            }
        }
        function mouseouted (d) {
            tooltip.transition()        
                .duration(500)      
                .style("opacity", 0);
        }
        
    
        function compute () {
            force.start();
            var n = nodes.length;
            for (var i = n * n; i > 0; --i) {
                if (force.alpha() <= 0.0001) break;
                force.tick();
            }
            force.stop();

            link
                .attr("x1", function(d) {return d.source.x;})
                .attr("x2", function(d) {return d.target.x;})
                .attr("y1", function(d) {return d.source.y;})
                .attr("y2", function(d) {return d.target.y;});

            node
                .attr("transform", function(d) { 
                    return "translate(" + d.x + "," + d.y + ")"; 
                });
        }
        // initial run
        setTimeout(compute(), 10); 

        var svgElem = $(elem[0]).find('svg').get(0);
        // set pan zoom mouse wheel
        svgPanZoom(svgElem,{
            panEnabled: true,
            dragEnabled: false,
            controlIconsEnabled: true,
            zoomEnabled: true,
            minZoom: 0.05,
            maxZoom: 20,
            center: true,
            fit: true
        });  

    }

   

    function getVar(ptr,idx) {
        var s_idx = idx.split('.');
        var ret = ptr;
        angular.forEach(s_idx, function(i){
            ret = ret[i];
        });
        return ret;
    }
    return {
        restrict : 'A',
        link : function (scope, element, attrs) {
            scope.$watch(attrs.bsSolnsSpaceWatch, function (n, o) {
                if (!!n && n != o) {
                    var sol = getVar(scope, attrs.bsSolnsSpaceData);
                    $(element).html("");
                    fx(element, sol);
                }
            }, true);
        }
    };
}]);

appmod.directive ('bsDfsVsKspPlot', ["TemplateDB", function (tmplDb) {

    function fx (elem, data_lhs, data_rhs) {

        function ffx (data, divId) {            
            var margin = {top: 20, right: 30, bottom: 30, left: 40},
                width = 960 - margin.left - margin.right,
                height = 800 - margin.top - margin.bottom;
            var elemHead = d3.select(elem[0]).append("div").attr("class","well");
                elemHead.append("label").text(divId);
            var svgHeader = elemHead
                .append("svg")
                .attr("id", divId)
                .attr("width", "100%")
                .attr("height", height)
                .attr("viewBox","0.00 0.00 900.00 900.00")
                .attr('preserveAspectRatio','xMidYMid meet');

            var chart = svgHeader.append("g")
                    .attr("transform", "translate(" + (width/2) + "," + (height/2) + ")");
            
            divId = '#' + divId;
            var css_text= '\
                ' + divId + ' .missing { \
                  fill: red !important; \
                } \
                ' + divId + ' .bar { \
                  fill: steelblue; \
                } \
                ' + divId + ' .text { \
                  color: red; \
                  font-size: 2px; \
                } \
                ' + divId + ' .axis text { \
                  font: 10px sans-serif; \
                } \
                ' + divId + ' .axis path, \
                ' + divId + ' .axis line { \
                  fill: none; \
                  stroke: #000; \
                  shape-rendering: crispEdges; \
                } \
                ' + divId + ' .x.axis path { \
                  display: none; \
                } ';
                

            chart.append('style')
                .attr('type', 'text/css')
                .text(css_text);

            
            var x = d3.scale.linear()
                .range([0, width]);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");


            var xdata = [];
            var ydata = [];
            angular.forEach(data, function (tt) {
                xdata.push(tt.id);
            });
            x.domain([0, d3.max(xdata)]);
            y.domain([0, d3.max(data, function(d) { return d.cost; })]);

            chart.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            chart.append("g")
                .attr("class", "y axis")
                .call(yAxis);

           
            
            var bar = chart.selectAll(".bar")
                .data(data)
              .enter().append("g")
                .attr("class", "bar");

            bar.append("rect")
                .attr("x", function(d) { return x(d.id); })
                .attr("y", function(d) { return y(d.cost); })
                .classed('missing', function(d) { return !!d.missing})
                .attr("height", function(d) { return height - y(d.cost); })
                .attr("width", 4);

                
            bar.append("text")
                .attr("class", "text")
                .attr("transform", "rotate(-90)")
                .attr("y", function(d) { return x(d.id); })
                .attr("x", function(d) { return -height; })
                .attr("dy", "-0.5em")
                .text(function(d) { return d.key; })
                // .text(function(d) { return d.nodeIds.join('_'); })
                ;


            // set pan zoom mouse wheel
            var svgElem = $(elem[0]).find('svg').get(0);
            svgPanZoom(divId,{
                panEnabled: true,
                dragEnabled: false,
                controlIconsEnabled: true,
                zoomEnabled: true,
                minZoom: 0.05,
                maxZoom: 20,
                center: true,
                fit: true
            });
        }

        d3.select(elem[0]).select("svg").remove();

        var topId = d3.select(elem[0]).attr('id');
        var d_lhs = [];
        var names = {}, missing = [];

        var len = appmod.length(data_lhs);
        for (var i = 0; i < len; i ++) {
            d_lhs.push(data_lhs[i]);
            names[data_lhs[i].nodeIds.join('_')] = 1;
        }
        ffx(d_lhs, topId + '-reference-plot');

        var d_rhs = [];
        var rhs_len = appmod.length(data_rhs);
        for (var ii = 0; ii < rhs_len; ii ++) {
            var idx = d_rhs.length;
            d_rhs.push(data_rhs[ii]);
            var nds_lhs = d_lhs[idx].nodeIds.join('_');
            var nds_rhs = d_rhs[idx].nodeIds.join('_');
            if (nds_lhs !== nds_rhs) {
                d_rhs[idx].missing = true;
            }
            
            if (!names[nds_rhs]) {
                missing.push(nds_rhs);
            } else {
                delete names[nds_rhs];
            }
        }
        ffx(d_rhs, topId + '-test-plot');

    }

    function getVar(ptr,idx) {
        var s_idx = idx.split('.');
        var ret = ptr;
        angular.forEach(s_idx, function(i){
            ret = ret[i];
        });
        return ret;
    }

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.bsDfsVsKspWatch, function (n, o) {
                if (!!n && n != o) {
                    var sol_lhs = getVar(scope, attrs.bsDfsVsKspDataLhs);
                    var sol_rhs = getVar(scope, attrs.bsDfsVsKspDataRhs);
                    $(element).html("");
                    fx(element,sol_lhs,sol_rhs);
                }
            }, true);
        }
    };
}]);


appmod.directive('ngColorPicker', function() {
    var defaultColors =  [
        'rgb(71,47,85)',
        '#7bd148',
        '#5484ed',
        '#a4bdfc',
        '#46d6db',
        '#7ae7bf',
        '#51b749',
        '#fbd75b',
        '#ffb878',
        '#ff887c',
        '#dc2127',
        '#dbadff',
        '#e1e1e1'
    ];
    return {
        scope: {
            selected: '=',
            customizedColors: '=colors'
        },
        restrict: 'AE',
        template: '<ul><li ng-repeat="color in colors" ng-class="{selected: (color===selected)}" ng-click="pick(color)" style="background-color:{{color}};"></li></ul>',
        link: function (scope, element, attr) {
            scope.colors = scope.customizedColors || defaultColors;
            scope.selected = scope.selected || scope.colors[0];

            scope.pick = function (color) {
                scope.selected = color;
                scope.$parent[attr.colorCb](attr.colorDiv, color);
            };

        }
    };

});

//------ filters
appmod.filter('capitalize', function () {
    return function (input, scope) {
        var str = input.replace(/_/g, " ");
        return str.substring(0, 1).toUpperCase() + str.substring(1);
    };
});



appmod.filter('filterSortName', function () {
    return function (inps) {
        function compare(a,b) {
          if (a.name.toUpperCase() < b.name.toUpperCase())
             return -1;
          if (a.name.toUpperCase() > b.name.toUpperCase())
            return 1;
          return 0;
        }
        var out = [];
        angular.forEach(inps, function (v) {
            out.push(v);
        });
        return out.sort(compare);
    }
});
appmod.filter('rmAutoRel', function () {
    return function (inps, skip) {
        if (!!skip) {return inps;}
        var out = [];
        angular.forEach(inps, function (inp) {
            if (inp.relType === 0) {
                out.push(inp);
            }
        });
        return out;
    }
});
appmod.filter('filterRel', function () {
    return function (inps, synb) {
        var out = [];
        angular.forEach(inps, function (inp) {
            if (inp.getType() === 'Relation') {
                out.push(inp);
            }
        });
        return out;
    }
});
appmod.filter('filterHidden', function () {
    return function (inps, synb) {
        var out = [];
        angular.forEach(inps, function (inp) {
            if (!synb.show.hide[inp.id]) {
                out.push(inp);
            }
        });
        return out;
    }
});
appmod.filter('filterName', function () {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "")) {
            return inps;
        }
        var regex = new RegExp(comp.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, "\\$&"), 'gi');

        angular.forEach(inps, function (inp) {
            if (!!inp.name &&
                (inp.name.search(regex) != -1)) {
                out.push(inp);
            }
        });
        return out;
    }
});
appmod.filter('filterNameXPut', function () {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "")) {
            return inps;
        }
        var regex = new RegExp(comp.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, "\\$&"), "gi");

        angular.forEach(inps, function (inp) {
            if (!!inp.obj.get().name &&
                (inp.obj.get().name.search(regex) != -1)) {
                out.push(inp);
            }
        });
        return out;
    }
});
appmod.filter('filterQntyDomainX', ["TemplateDB",function (tmplDb) {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "") || (comp === null)) {
            return inps;
        }
        var regex = new RegExp(comp, "gi");
        angular.forEach(inps, function (inp) {
            if (inp.obj.get().domain.search(regex) != -1) {
                out.push(inp);
            }
        });
        return out;
    }
}]);
appmod.filter('filterNameXPutSyn', function () {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "")) {
            return inps;
        }
        var regex = new RegExp(comp.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, "\\$&"), "gi");

        angular.forEach(inps, function (inp) {
            if (!!inp.qObj.name &&
                (inp.qObj.name.search(regex) != -1)) {
                out.push(inp);
            }
        });
        return out;
    }
});
appmod.filter('filterQntyDomainSyn', ["TemplateDB",function (tmplDb) {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "") || (comp === null)) {
            return inps;
        }
        var regex = new RegExp(comp, "gi");
        angular.forEach(inps, function (inp) {
            if (inp.qObj.domain.search(regex) != -1) {
                out.push(inp);
            }
        });
        return out;
    }
}]);
appmod.filter('filterInput', ["TemplateDB",function (tmplDb) {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "")) {
            return inps;
        }
        var regex = new RegExp(comp.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, "\\$&"), "gi");
        angular.forEach(inps, function (rel) {
            var found = false;
            angular.forEach(rel.inputs, function (inp) {
                var item = tmplDb.tree.getItem(inp.quantity).get();
                if (item.name.search(regex) != -1) {
                    found = true;
                }
            });
            if (found) {
                out.push(rel);
            }
        });
        return out;
    }
}]);
appmod.filter('filterOutput', ["TemplateDB",function (tmplDb) {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "")) {
            return inps;
        }
        var regex = new RegExp(comp.replace(/[\\\.\+\*\?\^\$\[\]\(\)\{\}\/\'\#\:\!\=\|]/ig, "\\$&"), "gi");
        angular.forEach(inps, function (inp) {
            var found = false;
            angular.forEach(inp.outputs, function (o) {
                var item = tmplDb.tree.getItem(o.quantity).get();
                if (item.name.search(regex) != -1) {
                    found = true;
                }
            });
            if (found) {
                out.push(inp);
            }
        });
        return out;
    }
}]);
appmod.filter('withIndex', ["TemplateDB",function (tmplDb) {
    return function (inps) {
        var out = [];
        var count = 1;
        angular.forEach(inps, function (inp) {
            inp.idx = count ++;
            out.push(inp);
        });
        return out;
    }
}]);
appmod.filter('filterCondName', ["TemplateDB",function (tmplDb) {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "")) {
            return inps;
        }
        var regex = new RegExp(comp, "gi");
        angular.forEach(inps, function (inp) {
            if ((!!inp.condName) &&
                tmplDb.tree.condDb[inp.condName].name.search(regex) != -1) {
                out.push(inp);
            }
        });
        return out;
    }
}]);
appmod.filter('filterRelDomain', ["TemplateDB",function (tmplDb) {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "") || (comp === null)) {
            return inps;
        }
        var regex = new RegExp(comp, "gi");
        angular.forEach(inps, function (inp) {
            var found = false;
            angular.forEach(inp.outputs, function (o) {
                var item = tmplDb.tree.getItem(o.quantity).get();
                if (item.domain.search(regex) != -1) {
                    found = true;
                }
            });
            if (found) {
                out.push(inp);
            } else {
                angular.forEach(inp.inputs, function (o) {
                    var item = tmplDb.tree.getItem(o.quantity).get();
                    if (item.domain.search(regex) != -1) {
                        found = true;
                    }
                });
                if (found) {
                    out.push(inp);
                }
            }

        });
        return out;
    }
}]);
appmod.filter('filterQntyDomain', ["TemplateDB",function (tmplDb) {
    return function (inps, comp) {
        var out = [];
        if ((comp === undefined) || (comp === "") || (comp === null)) {
            return inps;
        }
        var regex = new RegExp(comp, "gi");
        angular.forEach(inps, function (inp) {
            if (inp.domain.search(regex) != -1) {
                out.push(inp);
            }
        });
        return out;
    }
}]);
// helper method to remove some hidden elements
appmod.filter('rmHidden', function () {
    return function (inps) {
        var out = [];
        angular.forEach(inps, function (inp) {
            if (!!inp.hide) {
                // disacrd the hidden one    
            } else {
                out.push(inp);
            }
        });
        return out;
    }
});
// helper method to remove some 
appmod.filter('fltThereIsCondType', function () {
    return function (inps) {
        var out = [];
        angular.forEach(inps, function (inp) {
            if (inp.condAttrType === 'ThereIs') {
                out.push(inp);
            }
        });
        return out;
    }
});

// helper method to remove some 
appmod.filter('fltNumParts', function () {
    return function (inps,num) {
        var out = [];
        angular.forEach(inps, function (inp) {
            if (!num){
                if (!!inp.has.numParts) {
                    // disacrd the hidden one    
                } else {
                    out.push(inp);
                }
            } else {
                if (!inp.has.numParts || (num <= inp.has.numParts)) {
                    out.push(inp);
                }
            }
            
        });
        return out;
    }
});

appmod.filter('guessInSym', ["TemplateDB", function (tmplDbroot) {
    return function (inps) {
        var count = 0;
        angular.forEach(inps, function (inp) {
        if (!inp.symbol) {
                // suggest name
                inp.symbol = 'I_{' + count + '}'; 
                count++;   
            } 
        });
        return inps;
    }
}]);
appmod.filter('guessOutSym', ["TemplateDB", function (tmplDbroot) {
    return function (inps) {
        var count = 0;
        angular.forEach(inps, function (inp) {
            if (!inp.symbol) {
                // suggest name
                inp.symbol = 'O_{' + count + '}'; 
                count++;   
            } 
        });
        return inps;
    }
}]);
appmod.filter('filterSortBy', function () {
    return function (inps, field) {
        var out = [];
        if ((field === undefined) || (field === "")) {
            return inps;
        }
        function compare(a,b) {
            var flds = field.split('.');
            var lhs = a;
            var rhs = b;
            angular.forEach(flds, function (f) {
                lhs = lhs[f];
                rhs = rhs[f];
            });        
            if (lhs.toUpperCase() < rhs.toUpperCase())
                return -1;
            if (lhs.toUpperCase() > rhs.toUpperCase())
                return 1;
            return 0;
        }
        angular.forEach(inps, function (v) {
            out.push(v);
        });
        return out.sort(compare);
    }
});
appmod.filter('sortSolnGrp', function () {
    return function (inps) {
        var out = [];
        
        function compare(lhs,rhs) {
            return (lhs.length - rhs.length);       
        }
        angular.forEach(inps, function (v) {
            out.push(v);
        });
        return out.sort(compare);
    }
});
appmod.filter('sortFName', function () {
    return function (inps, synb) {
        var out = [];
        angular.forEach(inps, function (inp) {
            out.push({'name': synb.solnSe.soln.gNodes[inp].obj.name, 'id': inp})
        });
        var sout = out.sort(function (lhs, rhs) {
            if (lhs.name.toUpperCase() < rhs.name.toUpperCase())
                return -1;
            if (lhs.name.toUpperCase() > rhs.name.toUpperCase())
                return 1;
            return 0;
        });
        out = [];
        angular.forEach(sout, function (s) {
            out.push(s.id);
        });
        return out;
    }
});
appmod.directive("mathjaxBind", function() {
    return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs",
                function($scope, $element, $attrs) {
            $scope.$watch($attrs.mathjaxBind, function(value) {
                var $script = angular.element("<script type='math/tex'>")
                    .html(value == undefined ? "" : value);
                $element.html("");
                $element.append($script);
                MathJax.Hub.Queue(["Reprocess", MathJax.Hub, $element[0]]);
            });
        }]
    };
});

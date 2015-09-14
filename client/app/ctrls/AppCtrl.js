var appmod = angular.module('isapPkg');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

//------ The Top level controller ---
// Contains all common controller methods 
appmod.controller('AppCtrl', ['$scope', '$rootScope' ,'TemplateDB', '$timeout','$meteor',
    function ($scope, $rootScope, tmplDbRoot, $timeout, $meteor) {
        // Ctor
        $scope.init_ctor = function () {
            $rootScope.uiApp = 'help'; 
            $rootScope.$watch('currentUser', function (n,o){
                if ((n !== o) && !n) {
                    $rootScope.uiApp = 'help';
                }
            });

            $scope.dbMode = false;
            $scope.TemplateDB = tmplDbRoot;
            $scope.persistentDb = $meteor.collection(Pdb, false); 
            Pdb.find().observeChanges({
                added: function() {
                    var res = Pdb.findOne();
                    if (!!res) {
                        if (!$scope.TemplateDB.tree) {
                            $scope.TemplateDB.addDb(res);
                        } else if (!$scope.TemplateDB.tree.version.minor) {
                            $scope.TemplateDB.addDb(res);
                        } else {
                            $scope.TemplateDB.tree.version.remote = res.db.version;
                        }
                    }
                },
                removed: function() {
                    var res = Pdb.findOne();
                    if (!!res) {
                        if (!$scope.TemplateDB.tree) {
                            $scope.TemplateDB.addDb(res);
                        } else if (!$scope.TemplateDB.tree.version.minor) {
                            $scope.TemplateDB.addDb(res);
                        } else {
                            $scope.TemplateDB.tree.version.remote = res.db.version;
                        }
                    }
                },
                changed: function() {
                    var res = Pdb.findOne();
                    if (!!res) {
                        if (!$scope.TemplateDB.tree) {
                            $scope.TemplateDB.addDb(res);
                        } else if (!$scope.TemplateDB.tree.version.minor) {
                            $scope.TemplateDB.addDb(res);
                        } else {
                            $scope.TemplateDB.tree.version.remote = res.db.version;
                        }
                    }
                }
            });
            
            // $scope.currYear = (new Date()).getFullYear();
        };

        $scope.domain = [
            'General',
            'Electrical',
            'Mechanical',
            'Mechanical--Solid',
            'Mechanical--Liquid',
            'Mechanical--Gas',
            'Optical',
            'Magnetic',
            'Thermal',
            'Nuclear',
            'Biological',
            'Acoustic',
            'Radiant',
            'Electronic',
            'Chemical'
        ];

        
        $scope.numBody = [
            {label: '0' , value: 0},
            {label: '1' , value: 1},
            {label: '2' , value: 2},
            {label: '3' , value: 3},
            {label: '4' , value: 4},
            {label: '5' , value: 5},
            {label: '6' , value: 6}
        ];

        // note string true and false is not the same thing
        // as boolean.
        $scope.bool = [];
        $scope.bool.push(false);
        $scope.bool.push(true);           
        
        
        $scope.condAttrType = {
            'HasSituation':'Describes a Situation',
            'HasNQProperty' : 'Describes Non-Quantifiable Property',
            'HasQProperty':'Describes Quantifiable Property',
            'Happens':'Describes some Event',
            'ThereIs':'Describes Presence of something',
            'IsA':'Describes some Functionality'
        };
        $scope.opt_real = function () {
            var ret = [];
            var i;
            for (i = -9; i < 10; i++) {
                var rr = {};
                rr.id = i;
                rr.name = i.toString();
                ret.push(rr);
            }
            return ret;
        };
        // for cartesian coordinate system
        $scope.dim3 = ['x', 'y', 'z'];
        $scope.range = function (start, end) {
            var foo = [];
            var i;
            for (i = start; i <= end; i++) {
                foo.push(i);
            }
            return foo;
        };
        
        $scope.toggleDbMode = function () {
            $scope.dbMode = !$scope.dbMode;
        };
        $scope.keys = function (obj) {
            var ret = [];
            angular.forEach(obj, function (v, k) {
                ret.push(k);
            });
            return ret;
        };
        
        $scope.length = appmod.length;
        $scope.capitalize = appmod.capitalize;
        $scope.entityName = function (o, bodySpecific) {
            var nm = {
                'body': 'LowerLayer',
                'inf' : 'MidLayer',
                'surr': 'UpperLayer'
            };
            if (!!bodySpecific) {
                nm = {
                    'body': 'MidLayer',
                    'inf' : 'UpperLayer',
                    'surr': 'UpperLayer'
                };
            } else {

            }
            
            return nm[o];
        };
        // used in TemplDb  /body/quantity/Q2
        $scope.extractEntityName = function (hdl, bodySpecific) {
            if (!!hdl) {
                var hdl_s = hdl.split('/');
                return $scope.entityName(hdl_s[1], bodySpecific);
            }
            return '';
        };
        
        $scope.gotoFn = function (str) {
            if (!!$scope.TemplateDB.tree) {
                $rootScope.uiApp = str;
            } else {
                $scope.showStatusMsg("Loading Database...");
            }
        };
        $scope.showStatusMsg = function (msg) {
            $timeout(function(){
                $scope.$apply();
                jQuery("#status_msg").html(msg);
                jQuery("#status_msg").show();
            }, 1000);

            $timeout(function(){
                $scope.$apply();
                jQuery('#status_msg').hide();
            }, 6000);
        };
        $scope.strCond = appmod.strCond;

        $scope.isFullScreenSupported = function(){
            if ($.support.fullscreen){return true;}
            return false;
        };
        // Ctor
        $scope.init_ctor();
    }
]);

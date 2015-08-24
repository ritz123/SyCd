var appmod = angular.module('isapPkg');

appmod.config(
    function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        //$stateProvider.state('top', {
        //    url: '/top',
        //    templateUrl: 'client/top.ng.html',
        //    controller: ''
        //});
        //$urlRouterProvider.otherwise('/top');

    }
);
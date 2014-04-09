'use strict';

// Declare app level module which depends on filters, and services.
angular
    .module('myApp', [
        'ngRoute',
        'myApp.section1'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            /*.when('/section1', {
                templateUrl: 'section/section1/section1.html',
                controller: 'Section1Controller'
            })*/
            .when('/section2', {
                templateUrl: 'section/section2/section2.html',
                controller: 'Section2Controller'
            })
            .otherwise({
                redirectTo: '/section1'
            });
    }]);

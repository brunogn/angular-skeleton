'use strict';

/**
 * Defines and configures the module of the "Home" section.
 *
 * @param {ngRoute} $routeProvider provides route for HTML templates
 */
angular
    .module('myApp.home', [
        'ngRoute',
        'myApp.home.controller'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'section/home/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);

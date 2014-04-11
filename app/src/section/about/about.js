'use strict';

/**
 * Defines and configures the module of the "About" section.
 *
 * @param {ngRoute} $routeProvider provides route for HTML templates
 */
angular
    .module('myApp.about', [
        'ngRoute',
        'myApp.about.controller'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'section/about/about.html',
                controller: 'AboutController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);

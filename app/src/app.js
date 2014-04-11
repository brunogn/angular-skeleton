'use strict';

/*
 * Copyright (c) 2014 Bruno Guerchon Nunes (brunogn.com)
 *     Rio de Janeiro, RJ - Brazil
 *     All rights reserved.
 *
 * Author(s):
 *     Bruno Guerchon Nunes (obrunogn@gmail.com)
 *
 * Date:
 *     09/04/2014
 */

/**
 * Defines and configures the app-level module and its dependencies.
 *
 * @param {ngRoute} $routeProvider provides route for HTML templates
 */
angular
    .module('myApp', [
        'myApp.home',
        'myApp.about',
        'AppVersion'
    ])
    .config([function() {
    }]);

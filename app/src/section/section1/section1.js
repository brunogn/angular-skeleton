'use strict';

/**
 * section1.js
 *
 *
 * This is the module definition of section "Section 1". The controller defini-
 * tion should be in another file, called "section1-controller.js".
 *
 * Each section of the site has its own module, and could also have submodules
 * to, that is, within "app/src/section/section1/" could exist several additio-
 * nal folders representing additional modules that would then be listed as de-
 * pendencies of this one.
 *
 * For example, a "Note" section of the app "myApp" ("myApp.note") could have
 * the submodules "myApp.note.create", "myApp.note.delete", "myApp.note.edit",
 * etc; and the directory structure below "app/src/section/" would be:
 *
 *     app/src/section/
 *         note/
 *             create/
 *                 note-create.js
 *                 note-create-controller.js
 *             delete/
 *                 note-delete.js
 *                 note-delete-controller.js
 *             edit/
 *                 note-edit.js
 *                 note-edit-controller.js
 *             note.js
 *             note-controller.js
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take care of the rest.
 *
 * NOTE: Based on the description of a JavaScript file of the ngBoilerplate
 * project, on GitHub (http://goo.gl/XKR71w), created by @joshdmiller.
 *
 *
 * Copyright (c) 2014 Bruno Guerchon Nunes (brunogn.com)
 *     Rio de Janeiro, RJ - Brazil
 *     All rights reserved.
 */
angular
    .module('myApp.section1', [
        'ngRoute',
        'myApp.section1.controller'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/section1', {
                templateUrl: 'section/section1/section1.html',
                controller: 'myApp.section1.controller'
            });
    }]);

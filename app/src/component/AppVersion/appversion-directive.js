'use strict';

angular
    .module('AppVersion.directive', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, element, attrs) {
            element.text(version);
        };
    }]);

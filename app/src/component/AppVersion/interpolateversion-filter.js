'use strict';

angular
    .module('InterpolateVersion.filter', [])
    .filter('InterpolateVersion', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);
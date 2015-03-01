'use strict';

angular.module("myApp", [
    'ngRoute',
    'app.test1'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/test'});
    }]);
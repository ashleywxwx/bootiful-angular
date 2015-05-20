'use strict';
angular
    .module('WebApp')
    .config(function($routeProvider){

        $routeProvider.when('/', {
            templateUrl : 'home/home.html',
            controller : 'HomeCtrl as homeCtrl'
        }).when('/login', {
            templateUrl : 'login/login.html',
            controller : 'LoginCtrl as loginCtrl'
        }).when('/key', {
            templateUrl : 'key/keyCreation.html',
            controller : 'KeyCtrl as keyCtrl'
        }).otherwise('/');

    });

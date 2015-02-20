'use strict';
angular
    .module('WebApp')
    .controller('HomeCtrl', ['$scope', '$http', 'AuthService', function($scope, $http, AuthService){

        var vm = this;
        vm.isAuth = isAuth;

        // load greeting from protected resource
        $http.get('/resource/').success(function(data) {
            $scope.greeting = data;
        });

        // Checks to see if the user is authenticated
        function isAuth(){
            return AuthService.isAuth();
        }

    }]);

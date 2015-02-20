'use strict';
angular
    .module('WebApp')
    .controller('LoginCtrl', ['LoginService', 'AuthService', function(LoginService, AuthService) {

        var vm = this;
        vm.credentials = {
            username: "",
            password: ""
        };
        vm.login = login;
        vm.logout = logout;
        vm.isAuth = isAuth;

        // Logs user in with credentials
        function login(){
            LoginService.login(vm.credentials);
        }

        // Logs the user out from the AuthService, and with the server
        function logout(){
            LoginService.logout();
        }

        // Returns T/F if user is authenticated
        function isAuth(){
            return AuthService.isAuth();
        }

    }]);

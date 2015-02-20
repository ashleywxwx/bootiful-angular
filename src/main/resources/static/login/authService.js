'use strict';
angular
    .module('WebApp')
    .service('AuthService', function() {

        var vm = this;
        vm.getAuth = getAuth;
        vm.setAuth = setAuth;
        vm.isAuth = isAuth;
        vm.auth = {
            'name': "",
            'authenticated': false,
            'loginError' : false
        };

        // returns the user's authentication object
        function getAuth(){
            return vm.auth;
        }

        // Sets the authentication of the user
        function setAuth(_auth_){
            vm.auth = _auth_;
        }

        // returns if the user is authenticated or not
        function isAuth(){
            console.log("Going to check auth on: " + JSON.stringify(vm.auth));
            if (vm.auth.authenticated == true){
                return true;
            } else {
                return false;
            }
        }

    });

'use strict';
angular
    .module('WebApp')
    .service('RestService',['$http', function($http) {

        var vm = this;
        vm.postLogin = postLogin;
        vm.postLogout = postLogout;
        vm.getUser = getUser;

        // url endpoints
        vm.URL = {
            LOGIN : "login",
            LOGOUT : "logout",
            USER : "user"
        };

        // submits a POST to /login, in the format Spring is expecting
        function postLogin(credentials) {

            // Formats the request into a url encoded login, which is what Spring expects
            var data = 'username=' + encodeURIComponent(credentials.username) +
                '&password=' + encodeURIComponent(credentials.password);

            // Sets content type headers (as opposed to JSON, which would not be expected)
            var config = {
                headers : {
                    "content-type" : "application/x-www-form-urlencoded"
            }};

            //Return the promise
            return $http.post(vm.URL.LOGIN,data,config);
        }

        // a POST to /logout tells Spring to deauthorize user
        function postLogout() {
            return $http.post(vm.URL.LOGOUT,{});
        }

        // returns the principle from Spring, a protected resource
        function getUser() {
            return $http.get(vm.URL.USER);
        }

    }]);

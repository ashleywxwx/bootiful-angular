angular
    .module('WebApp')
    .controller('KeyCtrl', ['$log', function($log) {

        $log.log('KeyCtrl created');

        var vm = this;
        vm.createKey = createKey;
        vm.requestKey = requestKey;
        vm.key = {};


        function requestKey(user){
            $log.log('User:' + JSON.stringify(user));
            vm.key = "KEY:" + user.name + user.email
        }

        function createKey(){
            $log.log('Creating key...');
            return "a key";
        }

    }]);

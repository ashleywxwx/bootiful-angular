angular
    .module('WebApp')
    .controller('KeyCtrl', ['$log', function($log) {

        $log.log('KeyCtrl created');

        var vm = this;
        vm.createKey = createKey;
        vm.key = createKey();

        function createKey(){
            $log.log('Creating key...');
            return "a key";
        }

    }]);

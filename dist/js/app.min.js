'use strict';

    // call all custom functions
    function init() {

        // define module
        (function () {
        angular
            .module('app', ['dbaq.emoji', 'ngSanitize']);
        })();

        // define controller
        (function () {

        angular
            .module('app')
            .controller('emojiCtrl', emojiCtrl);

            function emojiCtrl($scope) {
                $scope.message = "Animals: :dolphin: :dolphin: :dolphin:";
            }
        })();

    }

    init();

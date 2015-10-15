'use strict';

    function emojiCtrl($scope) {

        $scope.message = "Animals: :dolphin: :dolphin: :dolphin:";
    }

    // call all custom functions
    function init() {

        angular
            .module(app', ['dbaq.emoji', 'ngSanitize'])
            .controller('emojiCtrl', emojiCtrl);
    }

    init();

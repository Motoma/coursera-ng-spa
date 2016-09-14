(function() {
  'use strict';
  angular.module('assignment1', [])
  .controller('LunchCheckController', LunchController);
  LunchController.$inject = ['$scope'];

  function LunchController ($scope) {
    $scope.lunchList = '';

    $scope.checkLunch = function() {
      $scope.lunchStatus = checkIfLunchIsTooMuch($scope.lunchList);
    }

    function checkIfLunchIsTooMuch(lunchList) {
      var individualLunchValues;

      if(lunchList.length == 0) {
        return 'Please enter data first';
      }

      individualLunchValues = lunchList.split(',');
      if(individualLunchValues.length <= 3) {
        return 'Enjoy!';
      }

      return 'Too much!';
    }
  }
})();

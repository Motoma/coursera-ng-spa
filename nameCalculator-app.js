(function() {
  'use strict';

  angular.module('nameCalculator', [])

  .controller('NameCalculatorController', function($scope) {
    $scope.name = '';
    $scope.totalValue = 0;
    $scope.calculateTotal = function() {
      $scope.totalValue = calculateValueOfName($scope.name);
    }

    function calculateValueOfName(name) {
      var value = 0;
      for(var i = 0; i < name.length; i++) {
        value += name.charCodeAt(i);
      }

      return value;
    }
  })

;})();

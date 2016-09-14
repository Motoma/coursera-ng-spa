(function() {
  'use strict';

  angular.module('welcomeApp', [])

  .controller('WelcomeController', function($scope) {
    $scope.name = 'Gilbert';
    $scope.sayHello = function() {
      return "Thank you for reviewing my code!";
    }
  })

;})();

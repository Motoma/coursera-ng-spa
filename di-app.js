(function() {
  'use strict';
  angular.module('diApp', [])
  .controller('DIController', DIController);

  function DIController ($scope, $filter) {
    $scope.name = "Chris";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
  }

  function AnnotateMe(name, job, blah) {
    return "Blah!";
  }

  console.log(AnnotateMe);
})();

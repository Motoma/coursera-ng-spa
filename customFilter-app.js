(function() {

app = angular.module('customFilter', []);
app.controller('CustomFilterController', CustomFilterController);
app.filter('custom', CustomFilter);

CustomFilterController.$inject = ['$scope'];
function CustomFilterController($scope) {
    $scope.name = '';
}

function CustomFilter() {
  return function(string, start='>', end='<') {
    return start + string + end;
  }
}

})();

(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('BaseUrl', 'https://davids-restaurant.herokuapp.com/');

  MenuDataService.$inject = ['$http', 'BaseUrl'];
  function MenuDataService ($http, BaseUrl) {
    this.getAllCategories = function () {
      return $http({
        url: BaseUrl + 'categories.json'
      }).then(function(result) {
        return result.data;
      });
    }

    this.getItemsForCategory = function (categoryShortName) {
      return $http({
        url: BaseUrl + 'menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function(result) {
        return result.data;
      });
    }
  }
})();

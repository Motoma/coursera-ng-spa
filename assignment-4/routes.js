(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.view.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'src/templates/categories.view.html',
        controller: 'CategoriesController as $ctrl',
        resolve: {
          categoryData: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
        .state('categories.items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'src/templates/items.view.html',
          controller: 'ItemsController as $ctrl',
          resolve: {
            categoryData: ['MenuDataService', '$stateParams',
              function(MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory(
                  $stateParams.categoryShortName
                );
            }]
          }
        })

    ;
  }
})();

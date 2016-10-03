(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categoryData'];
  function CategoriesController(categoryData) {
    var $ctrl = this;
    $ctrl.categories = categoryData;
  }
})();

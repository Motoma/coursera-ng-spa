(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;
  $ctrl.firstName = UserService.firstName;
  $ctrl.lastName = UserService.lastName;
  $ctrl.email = UserService.email;
  $ctrl.phoneNumber = UserService.phoneNumber;
  $ctrl.favoriteDish = UserService.favoriteDish;
  $ctrl.badFavoriteDish = false;
  $ctrl.successfullySaved = false;

  $ctrl.saveUserInfo = function () {
    UserService.firstName = $ctrl.firstName;
    UserService.lastName = $ctrl.lastName;
    UserService.email = $ctrl.email;
    UserService.phoneNumber = $ctrl.phoneNumber;

    var promise = MenuService.getItem($ctrl.favoriteDish);

    promise.then(function success() {
      UserService.favoriteDish = $ctrl.favoriteDish;
      UserService.isRegistered = true;
      $ctrl.badFavoriteDish = false;
      $ctrl.successfullySaved = true;
    }, function error() {
      $ctrl.badFavoriteDish = true;
      $ctrl.successfullySaved = false;
    });
  }
}

})();

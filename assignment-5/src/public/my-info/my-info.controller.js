(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService', 'UserService'];
function MyInfoController(MenuService, UserService) {
  var $ctrl = this;
  $ctrl.isRegistered = UserService.isRegistered;
  $ctrl.firstName = UserService.firstName;
  $ctrl.lastName = UserService.lastName;
  $ctrl.email = UserService.email;
  $ctrl.phoneNumber = UserService.phoneNumber;
  $ctrl.favoriteDish = UserService.favoriteDish;

  if($ctrl.isRegistered) {
    MenuService.getItem($ctrl.favoriteDish).then(function (response) {
      $ctrl.menuItem = response.data;
    });
  }

}

})();

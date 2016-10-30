(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = [];
function UserService() {
  var service = this;
  service.firstName = '';
  service.lastName = '';
  service.email = '';
  service.phoneNumber = '';
  service.favorieDish = '';
  service.isRegistered = false;
}

})();

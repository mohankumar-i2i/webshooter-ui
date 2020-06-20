angular.module('webshooter').controller('WebShooterCtrl', [
  '$window',
  '$scope',
  function ($window, $scope) {
    'use strict';

    var init = function () {
      $scope.message = 'Hello World';
    };
    init();
  },
]);

var app = angular.module('webshooter', ['ngRoute']).config(function ($routeProvider) {
  'use strict';
  $routeProvider.when('/', {
    controller: 'WebShooterCtrl',
    templateUrl: 'views/timer.html',
  });
});

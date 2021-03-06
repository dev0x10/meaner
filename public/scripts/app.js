'use strict';

var app = angular.module('meanerApp', []);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
          redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
  }]);

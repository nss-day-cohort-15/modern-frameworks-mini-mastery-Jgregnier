"use strict";

var app = angular.module("FlowersApp", ["ngRoute"])

app.config( function ($routeProvider) {
  $routeProvider.
    when('/arrangements') {
      templateUrl: arrangements.html,
      controller: 'ArrangementsCtrl'
    }
    .otherwise('/')
});

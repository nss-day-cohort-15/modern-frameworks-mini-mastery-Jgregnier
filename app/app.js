"use strict";

var app = angular.module("FlowersApp", ["ngRoute"])

app.config( function ($routeProvider) {
  $routeProvider.
    when('/arrangements', {
      templateUrl: "partials/arrangements.html",
      controller: 'ArrangementCtrl'
    })
    .otherwise('/arrangements')
});

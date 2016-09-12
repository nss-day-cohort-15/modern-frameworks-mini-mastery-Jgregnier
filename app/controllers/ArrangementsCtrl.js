"use strict";

app.controller("ArrangementCtrl", function ($scope, FlowerFactory) {

  $scope.flowers = FlowerFactory.getArrangements();
});

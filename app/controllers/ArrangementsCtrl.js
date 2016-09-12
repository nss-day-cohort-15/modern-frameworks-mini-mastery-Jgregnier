"use strict";

app.controller("ArrangementCtrl", function ($scope, FlowerFactory) {

  let flowersArray = [];

  FlowerFactory.getArrangements()
  .then((data) => {
    for(let flower in data){
      flowersArray.push(data[flower]);
    }
    $scope.arrangements = flowersArray;
    console.log(flowersArray);
  });
});

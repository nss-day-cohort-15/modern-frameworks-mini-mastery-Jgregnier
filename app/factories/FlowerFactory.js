"use strict";

app.factory('FlowerFactory', function($q, $http, Creds){

  let getArrangements = function () {
    return $q((resolve,reject) => {
      $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
      .success((data) => {
        resolve(data);
      });
    });
  };

  return {getArrangements};
});

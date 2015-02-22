var app = angular.module('LaLuzDeAjedrez');

app.controller('WindowController', ['$scope', 
  function($scope) {

    $scope.detailedView = function(option) {
      $scope.detailed = option;
    };

  }
]);
var app = angular.module('LaLuzDeAjedrez');
// debugger;
app.controller('WindowController', ['$scope', 
  function($scope) {

    $scope.detailedView = function(option) {
      $scope.detailed = option;
    } 
  }
]);
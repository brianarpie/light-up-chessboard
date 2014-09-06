var app = angular.module('LaLuzDeAjedrez');
app.controller('GameController', ['$rootScope', '$scope', 
  function($rootScope, $scope) {

    $scope.newGame = function() {

      // black pieces starting position
      $scope.addPiece('rook', 'black', 0, 0);
      $scope.addPiece('knight', 'black', 1, 0);
      $scope.addPiece('bishop', 'black', 2, 0);
      $scope.addPiece('queen', 'black', 3, 0);
      $scope.addPiece('king', 'black', 4, 0);
      $scope.addPiece('bishop', 'black', 5, 0);
      $scope.addPiece('knight', 'black', 6, 0);
      $scope.addPiece('rook', 'black', 7, 0);
      $scope.addPiece('blackPawn', 'black', 0, 1);
      $scope.addPiece('blackPawn', 'black', 1, 1);
      $scope.addPiece('blackPawn', 'black', 2, 1);
      $scope.addPiece('blackPawn', 'black', 3, 1);
      $scope.addPiece('blackPawn', 'black', 4, 1);
      $scope.addPiece('blackPawn', 'black', 5, 1);
      $scope.addPiece('blackPawn', 'black', 6, 1);
      $scope.addPiece('blackPawn', 'black', 7, 1);

      // white pieces starting position
      $scope.addPiece('rook', 'white', 0, 7);
      $scope.addPiece('knight', 'white', 1, 7);
      $scope.addPiece('bishop', 'white', 2, 7);
      $scope.addPiece('queen', 'white', 3, 7);
      $scope.addPiece('king', 'white', 4, 7);
      $scope.addPiece('bishop', 'white', 5, 7);
      $scope.addPiece('knight', 'white', 6, 7);
      $scope.addPiece('rook', 'white', 7, 7);
      $scope.addPiece('whitePawn', 'white', 0, 6);
      $scope.addPiece('whitePawn', 'white', 1, 6);
      $scope.addPiece('whitePawn', 'white', 2, 6);
      $scope.addPiece('whitePawn', 'white', 3, 6);
      $scope.addPiece('whitePawn', 'white', 4, 6);
      $scope.addPiece('whitePawn', 'white', 5, 6);
      $scope.addPiece('whitePawn', 'white', 6, 6);
      $scope.addPiece('whitePawn', 'white', 7, 6);

    };

}]);
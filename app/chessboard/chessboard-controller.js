(function() {

  "use strict";

  var app = angular.module("chessboard");

  app.controller("ChessboardCtrl", [
    "ChessboardService",
    function(ChessboardService) {
    ChessboardService.addPiece("rook", "white", "a1");
    ChessboardService.addPiece("rook", "white", "h1");
    ChessboardService.addPiece("rook", "black", "a8");
    ChessboardService.addPiece("rook", "black", "h8");
  }]);

})();

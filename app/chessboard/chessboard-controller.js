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
    ChessboardService.addPiece("knight", "white", "b1");
    ChessboardService.addPiece("knight", "white", "g1");
    ChessboardService.addPiece("knight", "black", "b8");
    ChessboardService.addPiece("knight", "black", "g8");
    ChessboardService.addPiece("bishop", "white", "c1");
    ChessboardService.addPiece("bishop", "white", "f1");
    ChessboardService.addPiece("bishop", "black", "c8");
    ChessboardService.addPiece("bishop", "black", "f8");
    ChessboardService.addPiece("queen", "white", "d1");
    ChessboardService.addPiece("queen", "black", "d8");
    ChessboardService.addPiece("king", "white", "e1");
    ChessboardService.addPiece("king", "black", "e8");


    ChessboardService.addPiece("pawn", "white", "a2");
    ChessboardService.addPiece("pawn", "white", "b2");
    ChessboardService.addPiece("pawn", "white", "c2");
    ChessboardService.addPiece("pawn", "white", "d2");
    ChessboardService.addPiece("pawn", "white", "e2");
    ChessboardService.addPiece("pawn", "white", "f2");
    ChessboardService.addPiece("pawn", "white", "g2");
    ChessboardService.addPiece("pawn", "white", "h2");

    ChessboardService.addPiece("pawn", "black", "a7");
    ChessboardService.addPiece("pawn", "black", "b7");
    ChessboardService.addPiece("pawn", "black", "c7");
    ChessboardService.addPiece("pawn", "black", "d7");
    ChessboardService.addPiece("pawn", "black", "e7");
    ChessboardService.addPiece("pawn", "black", "f7");
    ChessboardService.addPiece("pawn", "black", "g7");
    ChessboardService.addPiece("pawn", "black", "h7");

  }]);

})();

(function() {

  "use strict";

  var app = angular.module("LaLuzDeAjedrez");

  // TODO: extrapolate this to a CONSTANT
  var ASCII_INDEX = 97;

  app.service("ChessboardService", ["PawnService", function(PawnService) {
    var chessboard = this;

    chessboard.lookupSquare = function(letter, number) {
      return chessboard.board[letter.charCodeAt(0)-ASCII_INDEX][number-1];
    };

    chessboard.setupPieces = function() {

    };

    chessboard.init = function() {
      chessboard.board = new Array(8);
      for(var i = 0, len = 8; i < len; i++) {
        chessboard.board[i] = new Array(8);
      }
      var x, y, len = 8;
      for (x = 0 ; x < len; x++) {
        for (y = 0 ; y < len; y++) {
          chessboard.board[x][y] = {};
          chessboard.board[x][y].white_counters = 0;
          chessboard.board[x][y].black_counters = 0;
        }
      }

    }

  }]);

})();

(function() {

  "use strict";

  var app = angular.module("chessboard");

  app.factory("ChessboardService", [function() {

    var chessboard;

    function init() {
      chessboard = new Array(8);
      _(8).times(function(i) {
        chessboard[i] = new Array(8);
        _(8).times(function(j) {
          chessboard[i][j] = {};
        });
      });
    }

    function addPiece(piece, color, location) {
      var locationIndex = convertAlgebraicNotation(location);
      var targetSquare = chessboard[locationIndex[0]][locationIndex[1]];
      targetSquare.piece = piece;
      targetSquare.color = color;
    }

    function convertAlgebraicNotation(notation) {
      var correctionFactor = "a".charCodeAt(0);
      var firstIndex = Math.abs(notation.charAt(1) - 8); // correction factor for row indexing
      var secondIndex = notation.charAt(0).toLowerCase().charCodeAt(0) - correctionFactor;

      return [firstIndex, secondIndex];
    }

    init();

    return {
      getBoard: function() {
        return chessboard;
      },
      addPiece: addPiece,
      convertAlgebraicNotation: convertAlgebraicNotation
    };
  }]);

})();

(function() {

  "use strict";

  var app = angular.module("chessboard");

  app.factory("ChessboardService", ["$rootScope", function($rootScope) {

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

    function getTargetSquare(square) {
      var squareIndex = convertAlgebraicNotation(square);
      return chessboard[squareIndex[0]][squareIndex[1]];
    }

    function addPiece(piece, color, square) {
      var targetSquare = getTargetSquare(square);
      targetSquare.piece = piece.toLowerCase();
      targetSquare.color = color.toLowerCase();
      // TODO: make an angular VALUE or CONSTANT
      targetSquare.imageUrl = "app/components/pieces/" + piece + "/" +
                              piece + "-image-" + color + ".png";

      publishChanges('ChessboardUpdated', chessboard);
    }

    function removePiece(square) {
      var targetSquare = getTargetSquare(square);
      targetSquare.piece = null;
      targetSquare.color = null;
      targetSquare.imageUrl = null;

      publishChanges('ChessboardUpdated', chessboard);
    }

    // TODO: find way to not make this so brittle
    function convertAlgebraicNotation(square) {
      var correctionFactor = "a".charCodeAt(0);
      var row = Math.abs(square.charAt(1) - 8); // correction factor for row indexing
      var column = square.charAt(0).toLowerCase().charCodeAt(0) - correctionFactor;

      return [row, column];
    }

    function convertIndexNotation(row, column) {
      var correctionFactor = "a".charCodeAt(0);
      var letter = String.fromCharCode(column + correctionFactor);
      var number =  Math.abs(row - 8);

      return letter + number;
    }

    function publishChanges(event, data) {
      $rootScope.publish(event, data);
    }

    init();

    return {
      getBoard: function() {
        return chessboard;
      },
      addPiece: addPiece,
      removePiece: removePiece,
      convertAlgebraicNotation: convertAlgebraicNotation,
      convertIndexNotation: convertIndexNotation
    };
  }]);

})();

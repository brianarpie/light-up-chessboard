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

    init();

    return {
      getBoard: function() {
        return chessboard;
      }
    };
  }]);

})();

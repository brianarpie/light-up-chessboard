(function() {

  "use strict";

  var app = angular.module("chessboard");

  app.directive("chessboard", ["ChessboardService", function(ChessboardService) {

    function linker(scope, element, attrs) {

    }

    return {
      restrict: "E",
      link: linker,
      controller: function() {
        this.chessboard = ChessboardService.getBoard();
      },
      controllerAs: "chessboardCtrl",
      replace: false,
      templateUrl: "app/chessboard/chessboard.tpl.html"
    };
  }]);

})();

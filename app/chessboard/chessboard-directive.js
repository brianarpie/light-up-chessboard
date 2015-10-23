(function() {

  "use strict";

  var app = angular.module("chessboard");

  app.directive("chessboard", ["ChessboardService", function(ChessboardService) {

    function linker(scope, element, attrs) {
      // ChessboardService.addPiece("king", "black", "e4");
    }

    return {
      restrict: "E",
      link: linker,
      controller: function($scope, $rootScope) {
        var chessboardCtrl = this;
        chessboardCtrl.chessboard = ChessboardService.getBoard();
        chessboardCtrl.getAlgebraicNotiation = function(row, column) {
          return ChessboardService.convertIndexNotation(row, column);
        };
        $rootScope.$on("ChessboardUpdated", function() {
          $scope.$digest();
        });
      },
      controllerAs: "chessboardCtrl",
      replace: false,
      templateUrl: "app/chessboard/chessboard.tpl.html"
    };
  }]);

})();

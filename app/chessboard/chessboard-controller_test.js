(function() {

  "use strict";

  describe("chessboard-controller unit tests", function() {
    var controller, scope, ChessboardService;

    beforeEach(module("chessboard"));
    beforeEach(inject(function($rootScope, $controller, _ChessboardService_) {
      scope = $rootScope.$new();
      controller = $controller("ChessboardCtrl", {
        $scope: scope
      });
      ChessboardService = _ChessboardService_;
    }));

    it("should setup rooks on a8, h8 (black) and a1, h1 (white)", function() {
      var blackRookSquares = [];
      blackRookSquares.push(ChessboardService.getSquare("a8"));
      blackRookSquares.push(ChessboardService.getSquare("h8"));

      _.each(blackRookSquares, function(square) {
        expect(square.piece).toBe("rook");
        expect(square.color).toBe("black");
      });

      var whiteRookSquares = [];
      whiteRookSquares.push(ChessboardService.getSquare("a1"));
      whiteRookSquares.push(ChessboardService.getSquare("h1"));

      _.each(whiteRookSquares, function(square) {
        expect(square.piece).toBe("rook");
        expect(square.color).toBe("white");
      });
    });

    it("should setup the king on e1", function() {
      // ChessboardService.getSquare("e1")
    });

  });

})();

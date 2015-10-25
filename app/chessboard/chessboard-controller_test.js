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

    it("should setup rooks on a1, h1 (white) and a8, h8 (black)", function() {
      var whiteRookSquares = [];
      whiteRookSquares.push(ChessboardService.getSquare("a1"));
      whiteRookSquares.push(ChessboardService.getSquare("h1"));

      _.each(whiteRookSquares, function(square) {
        expect(square.piece).toBe("rook");
        expect(square.color).toBe("white");
      });

      var blackRookSquares = [];
      blackRookSquares.push(ChessboardService.getSquare("a8"));
      blackRookSquares.push(ChessboardService.getSquare("h8"));

      _.each(blackRookSquares, function(square) {
        expect(square.piece).toBe("rook");
        expect(square.color).toBe("black");
      });
    });

    it("should setup knights on b1, g1 (white) and b8, g8 (black)", function() {
      var whiteKnightSquares = [];
      whiteKnightSquares.push(ChessboardService.getSquare("b1"));
      whiteKnightSquares.push(ChessboardService.getSquare("g1"));

      _.each(whiteKnightSquares, function(square) {
        expect(square.piece).toBe("knight");
        expect(square.color).toBe("white");
      });

      var blackKnightSquares = [];
      blackKnightSquares.push(ChessboardService.getSquare("b8"));
      blackKnightSquares.push(ChessboardService.getSquare("g8"));

      _.each(blackKnightSquares, function(square) {
        expect(square.piece).toBe("knight");
        expect(square.color).toBe("black");
      });
    });

    it("should setup bishops on c1, f1 (white) and c8, f8 (black)", function() {
      var whiteBishopSquares = [];
      whiteBishopSquares.push(ChessboardService.getSquare("c1"));
      whiteBishopSquares.push(ChessboardService.getSquare("f1"));

      _.each(whiteBishopSquares, function(square) {
        expect(square.piece).toBe("bishop");
        expect(square.color).toBe("white");
      });

      var blackBishopSquares = [];
      blackBishopSquares.push(ChessboardService.getSquare("c8"));
      blackBishopSquares.push(ChessboardService.getSquare("f8"));

      _.each(blackBishopSquares, function(square) {
        expect(square.piece).toBe("bishop");
        expect(square.color).toBe("black");
      });
    });

    it("should setup the king on e1 (white) and e8 (black)", function() {
      var whiteKingSquare = ChessboardService.getSquare("e1");
      var blackKingSquare = ChessboardService.getSquare("e8");

      expect(whiteKingSquare.piece).toBe("king");
      expect(whiteKingSquare.color).toBe("white");

      expect(blackKingSquare.piece).toBe("king");
      expect(blackKingSquare.color).toBe("black");
    });

    it("should setup the queen on d1 (white) and d8 (black)", function() {
      var whiteQueenSquare = ChessboardService.getSquare("d1");
      var blackQueenSquare = ChessboardService.getSquare("d8");

      expect(whiteQueenSquare.piece).toBe("queen");
      expect(whiteQueenSquare.color).toBe("white");

      expect(blackQueenSquare.piece).toBe("queen");
      expect(blackQueenSquare.color).toBe("black");
    });

    it("should setup white pawns from a2 to g2 (the entire 2nd rank)", function() {
      var whitePawnSquares = [];

      whitePawnSquares.push(ChessboardService.getSquare("a2"));
      whitePawnSquares.push(ChessboardService.getSquare("b2"));
      whitePawnSquares.push(ChessboardService.getSquare("c2"));
      whitePawnSquares.push(ChessboardService.getSquare("d2"));
      whitePawnSquares.push(ChessboardService.getSquare("e2"));
      whitePawnSquares.push(ChessboardService.getSquare("f2"));
      whitePawnSquares.push(ChessboardService.getSquare("g2"));
      whitePawnSquares.push(ChessboardService.getSquare("h2"));

      _.each(whitePawnSquares, function(square) {
        expect(square.piece).toBe("pawn");
        expect(square.color).toBe("white");
      });
    });

    it("should setup black pawns from a7 to g7 (the entire 7th rank)", function() {
      var blackPawnSquares = [];

      blackPawnSquares.push(ChessboardService.getSquare("a7"));
      blackPawnSquares.push(ChessboardService.getSquare("b7"));
      blackPawnSquares.push(ChessboardService.getSquare("c7"));
      blackPawnSquares.push(ChessboardService.getSquare("d7"));
      blackPawnSquares.push(ChessboardService.getSquare("e7"));
      blackPawnSquares.push(ChessboardService.getSquare("f7"));
      blackPawnSquares.push(ChessboardService.getSquare("g7"));
      blackPawnSquares.push(ChessboardService.getSquare("h7"));

      _.each(blackPawnSquares, function(square) {
        expect(square.piece).toBe("pawn");
        expect(square.color).toBe("black");
      });
    });

  });

})();

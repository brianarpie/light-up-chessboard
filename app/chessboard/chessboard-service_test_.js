(function() {

  "use strict";

  describe("chessboard-service unit tests", function() {
    var ChessboardService, rootScope;

    beforeEach(module("chessboard"));
    beforeEach(inject(function(_ChessboardService_, $rootScope) {
      ChessboardService = _ChessboardService_;
      rootScope = $rootScope;

      spyOn(rootScope, '$emit').and.callThrough();
    }));

    it("should create the chessboard on init", function() {
      var chessboard = ChessboardService.getBoard();
      expect(chessboard).not.toBe(undefined);
    });

    it("should create the chessboard as an 8 x 8 array", function() {
      var chessboard = ChessboardService.getBoard();

      expect(chessboard.length).toBe(8);
      expect(chessboard).toEqual(jasmine.any(Array));

      _.each(chessboard, function(row) {
        expect(row).toEqual(jasmine.any(Array));
        expect(row.length).toEqual(8);
      });
    });

    it("should provide a function to add a piece to a square", function() {
      ChessboardService.addPiece("pawn", "white", "a1");

      var chessboard = ChessboardService.getBoard();
      var squareIndex = ChessboardService.convertAlgebraicNotation("a1");
      var targetSquare = chessboard[squareIndex[0]][squareIndex[1]];

      expect(targetSquare.piece).toBe("pawn");
      expect(targetSquare.color).toBe("white");
    });

    it("should provide a function remove a piece from a square", function() {
      ChessboardService.addPiece("pawn", "white", "a1");

      var chessboard = ChessboardService.getBoard();
      var squareIndex = ChessboardService.convertAlgebraicNotation("a1");
      var targetSquare = chessboard[squareIndex[0]][squareIndex[1]];

      expect(targetSquare.piece).toBe("pawn");
      expect(targetSquare.color).toBe("white");

      ChessboardService.removePiece("a1");

      expect(targetSquare.piece).toBe(null);
      expect(targetSquare.color).toBe(null);
    });

    it("should add imageUrl upon adding piece to square", function() {
      var chessboard = ChessboardService.getBoard();
      var squareIndex = ChessboardService.convertAlgebraicNotation("e4");
      var targetSquare = chessboard[squareIndex[0]][squareIndex[1]];

      ChessboardService.addPiece("knight", "white", "e4");
      expect(targetSquare.imageUrl).toMatch("knight-image-white");
    });

    it("should call $rootScope.$emit once when adding a piece", function() {
      ChessboardService.addPiece("rook", "white", "d2");
      expect(rootScope.$emit.calls.count()).toEqual(1);
    });

    it("should call $rootScope.$emit twice when adding and removing a piece", function() {
      ChessboardService.addPiece("rook", "white", "d2");
      ChessboardService.removePiece("d2");
      expect(rootScope.$emit.calls.count()).toEqual(2);
    });

    it("should provide a function to convert algebraic notation to an index on the chessboard", function() {
      // test top-left and bottom-right corner squares
      var a8 = ChessboardService.convertAlgebraicNotation("a8");
      expect(a8).toEqual([0,0]);
      var h1 = ChessboardService.convertAlgebraicNotation("h1");
      expect(h1).toEqual([7,7]);
    });

    it("should provide a function to convert an index on the chessboard to algebraic notation", function() {
      // test top-left and bottom-right corner squares
      var a8 = ChessboardService.convertIndexNotation(0, 0);
      expect(a8).toBe("a8");
      var h1 = ChessboardService.convertIndexNotation(7, 7);
      expect(h1).toBe("h1");
    });

    it("should provide a function to get information of a square", function() {
      ChessboardService.addPiece("queen", "black", "e8");
      var square = ChessboardService.getSquare("e8");
      expect(square.piece).toBe("queen");
      expect(square.color).toBe("black");
    });

  });
})();

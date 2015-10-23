(function() {

  "use strict";

  describe("chessboard-service unit tests", function() {
    var ChessboardService;

    beforeEach(module("chessboard"));
    beforeEach(inject(function(_ChessboardService_) {
      ChessboardService = _ChessboardService_;
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
      var chessboard,
          locationIndex,
          targetSquare,
          piece = "pawn",
          color = "white",
          square = "a1";

      ChessboardService.addPiece(piece, color, square);
      chessboard = ChessboardService.getBoard();
      locationIndex = ChessboardService.convertAlgebraicNotation(square);
      targetSquare = chessboard[locationIndex[0]][locationIndex[1]];
      expect(targetSquare.piece).toBe("pawn");
      expect(targetSquare.color).toBe("white");
    });

    it("should map algebraic notation to an index on the chessboard", function() {
      // test top-left and bottom-right corner squares
      var a8 = ChessboardService.convertAlgebraicNotation("a8");
      expect(a8).toEqual([0,0]);
      var h1 = ChessboardService.convertAlgebraicNotation("h1");
      expect(h1).toEqual([7,7]);
    });

  });
})();

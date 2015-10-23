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
      var countOfItems = _.reduce(chessboard, function(memo, array) {
        return memo + array.length;
      }, 0);
      expect(chessboard.length).toBe(8);
      expect(countOfItems).toBe(64);
    });

  });
})();

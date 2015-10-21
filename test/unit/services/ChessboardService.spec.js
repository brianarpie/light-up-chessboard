(function() {

  "use strict";

  describe("Chessboard Service Unit Tests", function() {
    var ChessboardService, PawnService;

    beforeEach(module("LaLuzDeAjedrez"));
    beforeEach(inject(function(_ChessboardService_, _PawnService_) {
      ChessboardService = _ChessboardService_;
      PawnService = _PawnService_;
    }));

    it('should return a letter/number board reference', function() {
      ChessboardService.init();
      var piece = ChessboardService.lookupSquare("a", 2);
      console.log(piece);
      expect(piece).toBe("knight");
    });

  });

})();

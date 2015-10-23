(function() {

  "use strict";

  describe("chessboard-directive unit test", function() {

    var compile, scope, rootScope, element, controller, ChessboardService;

    beforeEach(module("templates"));
    beforeEach(module("chessboard"));
    beforeEach(inject(function($compile, $rootScope, $controller, _ChessboardService_) {
      scope = $rootScope.$new();
      rootScope = $rootScope;
      compile = $compile;
      controller = $controller;
      ChessboardService = _ChessboardService_;
      spyOn(ChessboardService, "getBoard").and.callThrough();
      spyOn(ChessboardService, "convertIndexNotation").and.callThrough();
      spyOn(rootScope, '$on').and.callThrough();

      element = angular.element("<chessboard></chessboard>");
      compile(element)(scope);
      scope.$digest();
    }));

    it('should get the chessboard from the ChessboardService', function() {
      expect(ChessboardService.getBoard).toHaveBeenCalled();
    });

    it("should have 8 rows", function() {
      expect(element.find('.board-row').length).toBe(8);
    });

    it('should have 64 squares', function() {
      expect(element.find('.board-square').length).toBe(64);
    });

    it("should provide class of each square with algebraic notation", function() {
      // test top-left and bottom-right corners of the board
      expect(element.find("td").first().hasClass("a8")).toBe(true);
      expect(element.find("td").last().hasClass("h1")).toBe(true);
    });

    it("should subscribe to ChessboardUpdated via the rootScope", function() {
      expect(rootScope.$on.calls.mostRecent().args[0]).toBe("ChessboardUpdated");
    });

    it("should use ChessboardService to convert index to algebraic notation", function() {
      expect(ChessboardService.convertIndexNotation).toHaveBeenCalled();
    });

    it("should decorate each square with piece on chessboard", function() {
      ChessboardService.addPiece("knight", "black", "e4");
      expect(element.find(".e4 img").attr('src')).toMatch("knight-image-black");
    });

  });

})();

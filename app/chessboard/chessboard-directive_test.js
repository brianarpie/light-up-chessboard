(function() {

  "use strict";

  describe("chessboard-directive unit test", function() {

    var compile, scope, element, controller, ChessboardService;

    beforeEach(module("templates"));
    beforeEach(module("chessboard"));
    beforeEach(inject(function($compile, $rootScope, $controller, _ChessboardService_) {
      scope = $rootScope.$new();
      compile = $compile;
      controller = $controller;
      ChessboardService = _ChessboardService_;
      spyOn(ChessboardService, "getBoard").and.callThrough();

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

  });

})();

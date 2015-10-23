(function() {

  "use strict";

  describe("chessboard-directive unit test", function() {

    var compile, scope, element, controller;

    beforeEach(module("templates"));
    beforeEach(module("chessboard"));
    beforeEach(inject(function($compile, $rootScope, $controller) {
      scope = $rootScope.$new();
      compile = $compile;
      controller = $controller;

      element = angular.element("<chessboard></chessboard>");
      compile(element)(scope);
      scope.$digest();
    }));

    it("should have 8 rows", function() {
      expect(element.find('.board-row').length).toBe(8);
    });

    it('should have 64 squares', function() {
      expect(element.find('.board-square').length).toBe(64);
    });

  });

})();

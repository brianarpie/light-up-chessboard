(function() {

  "use strict";

  describe("Chessboard Controller Spec", function() {
    var $scope, $rootScope, $controller;

    beforeEach(module('LaLuzDeAjedrez'));
    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $controller = $injector.get('$controller');

      $controller("ChessboardController", {
        "$scope": $scope
      });
    }));

    it('should set the board square "selected" attr to true when clicked', function() {
      var x = 4, y = 5;
      expect($scope.board[x][y].selected).toBe(undefined);
      $scope.clickPiece(x, y);
      expect($scope.board[x][y].selected).toBe(true);
    });

    it("should assert true to be true", function() {
      expect(true).toBe(true);
    });

  });

})();

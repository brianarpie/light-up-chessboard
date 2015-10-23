(function() {

  "use strict";

  describe("chessboard-controller unit tests", function() {
    var controller, scope;

    beforeEach(module("chessboard"));
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller("ChessboardCtrl", {
        $scope: scope
      });
    }));

  });

})();

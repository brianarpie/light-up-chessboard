(function() {

  "use strict";

  var app = angular.module("LaLuzDeAjedrez");

  app.service("PawnService", ["ChessboardService", function(ChessboardService) {

    var service = this;

    service.setPosition = function() {
      ChessboardService.addPiece("pawn", )
    };

  }]);

})();

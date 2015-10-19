(function() {

  "use strict";

  var app = angular.module("LaLuzDeAjedrez");

  app.service("ChessboardService", [function() {
    var service = this;

    service.secret_key ="a2";

  }]);

})();

(function() {

  "use strict";

  var app = angular.module("LaLuzDeAjedrez");

  app.directive('pgnLoader', ["templateHelper", function(templateHelper) {
    return {
      restrict: "EAC",
      scope: {

      },
      link: link
    }
  }]);
  
})();

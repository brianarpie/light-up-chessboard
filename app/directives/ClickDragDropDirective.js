(function() {

  "use strict";

  var app = angular.module("LaLuzDeAjedrez");

  app.directive("clickDragDrop", function() {
    function linker($scope, $element, $attrs) {

    }
    return {
      restrict: "A",
      link: linker
    }
  });

})();

(function() {

  "use strict";

  var app = angular.module("LaLuzDeAjedrez");

  app.directive("ClickDragDrop", function() {
    function linker($scope, $element, $attrs) {

    }
    return {
      restrict: "A",
      link: linker
    }
  });

})();

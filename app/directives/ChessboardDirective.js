(function() {

  "use strict";

  var app = angular.module("LaLuzDeAjedrez");

  app.directive("chessboard", [function() {

    // responsibilities of <chessboard>
    
    function linker($scope, $element, $attrs) {

    }

    return {
      link: linker
    };

  }]);

})();

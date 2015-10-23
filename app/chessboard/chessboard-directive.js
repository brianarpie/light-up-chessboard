(function() {

  "use strict";

  var app = angular.module("chessboard");

  app.directive("chessboard", function() {

    function linker(scope, element, attrs) {

    }

    return {
      restrict: "E",
      link: linker,
      controller: function() {
        this.squares = [new Array(8)][new Array(8)];
        this.squares = _.each(new Array(8), function(item) {
          item = new Array(8);
        });
        this.squares = new Array(8);
        for(var i = 0, len = 8; i < len; i++) {
          this.squares[i] = new Array(8);
        }
        var x, y;
        for (x = 0 ; x < len; x++) {
          for (y = 0 ; y < len; y++) {
            this.squares[x][y] = {};
            this.squares[x][y].white_counters = 0;
            this.squares[x][y].black_counters = 0;
          }
        }
      },
      controllerAs: "board",
      replace: false,
      templateUrl: "app/chessboard/chessboard.tpl.html"
    };
  });

})();

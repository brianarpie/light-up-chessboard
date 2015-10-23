(function() {

  "use strict";

  angular.module('chessApp', ['ngRoute', 'chessboard']);

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['chessApp']);
  });

})();

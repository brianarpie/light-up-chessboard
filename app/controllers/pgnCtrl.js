var app = angular.module('LaLuzDeAjedrez');

app.controller('pgnController', ['$scope', 
  function($scope) {

    function init() {

    }

    $scope.loadPGN = function() {
      // 1. scrape info at top of pgn
      // 2. loop through moves (use .)
      // 2. a. condition 1: a { or ; = comments
      // 2. b. condition 2: if no more . look for a result 1/2-1/2 | 1-0 | 0-1
      // 2. c. condition 3: a move
      // 3. depending on condition, handle it.
    }

    init();

}]);
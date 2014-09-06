var app = angular.module('LaLuzDeAjedrez');

app.controller('ChessboardController', ['$rootScope','$scope', 
  function($rootScope, $scope) {

    function init() {
      $scope.squares = new Array(8);
      for(var i = 0, len = 8; i < len; i++) {
        $scope.squares[i] = new Array(8);
      }
      var x = 0, y = 0, len = 8;
      for (x = 0 ; x < len; x++) {
        for (y = 0 ; y < len; y++) {
          $scope.squares[x][y] = {};
          $scope.squares[x][y].white_counters = 0;
          $scope.squares[x][y].black_counters = 0;
        }
      }
    }

    $scope.getBackgroundColor = function(x, y) {
      var color, totalCounters;
      totalCounters = $scope.squares[x][y].white_counters - $scope.squares[x][y].black_counters
      color = $scope.color_chart(totalCounters);
      return 'rgb('+color.r+','+color.g+','+color.b+')';
    }

    $scope.addPiece = function(name, color, x, y) {
      $scope.squares[x][y].piece = getPieceObject(name);
      $scope.squares[x][y].piece.color = color;
      if (color == 'white') {
        $scope.addWhitePiece($scope.squares[x][y].piece, x, y);
      } else {
        $scope.addBlackPiece($scope.squares[x][y].piece, x, y);
      }
    }

    $scope.color_chart = function(heat_level) {
      switch(heat_level) {
        case -5:
          return {r: 165, g: 0, b: 0};
        case -4:
          return {r: 155, g: 0, b: 0};
        case -3:
          return {r: 145, g: 0, b: 0};
        case -2:
          return {r: 135, g: 0, b: 0};
        case -1:
          return {r: 125, g: 0, b: 0};
        case 0:
          return {r: 255, g: 255, b: 255};
        case 1:
          return {r: 0, g: 0, b: 125};
        case 2:
          return {r: 0, g: 0, b: 135};
        case 3:
          return {r: 0, g: 0, b: 145};
        case 4:
          return {r: 0, g: 0, b: 155};
        case 5:
          return {r: 0, g: 0, b: 165};
        default:
          return {r: 255, g: 255, b: 255};
      }
    }

    $scope.addWhiteCounter = function(x, y) {
      $scope.squares[x][y].white_counters++;
    };

    $scope.deleteWhiteCounter = function(x, y) {
      $scope.squares[x][y].white_counters--;
    };

    $scope.addBlackCounter = function(x, y) {
      // debugger;
      $scope.squares[x][y].black_counters++;
    };

    $scope.deleteBlackCounter = function(x, y) {
      $scope.squares[x][y].black_counters--;
    };

    $scope.printBlackCounters = function() {
      var x, y, max, buf = [];
      for (y = 0, max = 8; y < max; y++) {
        for (x = 0; x < max; x++) {
          buf.push($scope.squares[x][y].black_counters);
        }
        console.log(buf);
        buf = [];
      }
    }
    $scope.printWhiteCounters = function() {
      var x, y, max, buf = [];
      for (y = 0, max = 8; y < max; y++) {
        for (x = 0; x < max; x++) {
          buf.push($scope.squares[x][y].white_counters);
        }
        console.log(buf);
        buf = [];
      }
    }

    $scope.print = function() {
      var x, y, max, diff, buf = [], color = {};
      for (y = 0, max = 8; y < max; y++) {
        for (x = 0; x < max; x++) {
          diff = ($scope.squares[x][y].white_counters - $scope.squares[x][y].black_counters);
          // useful but not yet implm.
          // color = $scope.color_chart(diff);
          // set_background(x, y, color);
          if (diff >= 0) {
            diff = "+" + diff;
          }
            buf.push('['+diff+']');
        }
        console.log('\n');
        console.log(buf);
        buf = [];
      }
    }

    $scope.clear = function() {
      var x, y, max;
      for (x = 0, max = 8; x < max; x++) {
        for (y = 0; y < max; y++) {
          $scope.squares[x][y] = {};
        }
      }
    }

    $scope.addBlackPiece = function(piece, x, y) {
      var arr = piece.legalMoves(x, y);
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.addBlackCounter(arr[i][0], arr[i][1]);
      }
    }

    $scope.addWhitePiece = function(piece, x, y) {
      var arr = piece.legalMoves(x, y);
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.addWhiteCounter(arr[i][0], arr[i][1]);
      }
    }

    // protected 
    
    function getPieceObject(name) {
    // ordered by most frequent piece
      switch(name) {
        case 'whitePawn': 
          return $rootScope.whitePawn;
        case 'blackPawn':
          return $rootScope.blackPawn;
        case 'knight':
          return $rootScope.knight;
        case 'bishop':
          return $rootScope.bishop;
        case 'rook':
          return $rootScope.rook;
        case 'queen':
          return $rootScope.queen;
        case 'king':
          return $rootScope.king;

      }
    }

    init();

  }]);

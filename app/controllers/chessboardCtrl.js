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

    function searchArray(arr, val) {
      var hash = {};
      for (var i = 0, len = arr.length; i < len; i++) {
        hash[arr[i]] = i;
      }
      if (hash.hasOwnProperty(val)) {
        return true;
      } else {
        return false;
      }

    }

    $scope.onDropComplete = function(event, data, x, y) {
      var piece = event;
      var curr_x = $scope.current_x;
      var curr_y = $scope.current_y;
      if ($scope.squares[curr_x][curr_y].piece.color) {
        if (piece.color === 'white') {
          $scope.removeWhitePiece(piece, curr_x, curr_y);
        } else {
          $scope.removeBlackPiece(piece, curr_x, curr_y);
        }
        $scope.squares[curr_x][curr_y].piece = {};
      }

      $scope.squares[x][y].piece = piece;
      $scope.squares[x][y].piece.x = x;
      $scope.squares[x][y].piece.y = y;
      if (piece.color == 'white') {
        $scope.addWhitePiece(piece, x, y);
      } else {
        $scope.addBlackPiece(piece, x, y);
      }
    }

    // future use
    $scope.precompute = function(event, data) {
      $scope.current_x = event.x;
      $scope.current_y = event.y;
    }

    $scope.getBackgroundColor = function(x, y) {
      var color, totalCounters;
      var black = $scope.squares[x][y].black_counters;
      var white = $scope.squares[x][y].white_counters;
      totalCounters = white - black;
      if (white + black === 0 ) {
        return 'white';
      }
      color = $scope.opacity_chart(totalCounters);
      if (!color) debugger;
      return 'rgba('+color.r+','+color.g+','+color.b+','+color.a+')';
    }

    $scope.getImage = function(x, y) {
      if ($scope.squares[x][y].piece && $scope.squares[x][y].piece.color) {
        return $scope.squares[x][y].piece.imgUrl($scope.squares[x][y].piece.color);
      } else {
        return ' ';
      }
    }

    $scope.$watch('squareColor', function(id) {
      console.log(id);
    });

    $scope.addPiece = function(name, color, x, y) {
      $scope.squares[x][y].piece = getPieceObject(name);
      $scope.squares[x][y].piece.setPosition(x, y);
      
      $scope.squares[x][y].piece.color = color;
      if (color == 'white') {
        $scope.addWhitePiece($scope.squares[x][y].piece, x, y);
      } else {
        $scope.addBlackPiece($scope.squares[x][y].piece, x, y);
      }

    }

    $scope.opacity_chart = function(heatLevel) {
      switch(heatLevel) {
        case -6:
          return {r: 255, g: 0, b: 0, a: 1};
        case -5:
          return {r: 255, g: 0, b: 0, a: 0.5};
        case -4:
          return {r: 255, g: 0, b: 0, a: 0.4};
        case -3:
          return {r: 255, g: 0, b: 0, a: 0.3};
        case -2:
          return {r: 255, g: 0, b: 0, a: 0.2};
        case -1:
          return {r: 255, g: 0, b: 0, a: 0.1};
        case 0:
          return {r: 255, g: 0, b: 255, a: 0.15};
        case 1:
          return {r: 0, g: 0, b: 255, a: 0.1};
        case 2:
          return {r: 0, g: 0, b: 255, a: 0.2};
        case 3:
          return {r: 0, g: 0, b: 255, a: 0.3};
        case 4:
          return {r: 0, g: 0, b: 255, a: 0.4};
        case 5:
          return {r: 0, g: 0, b: 255, a: 0.5};
        case 6:
          return {r: 0, g: 0, b: 255, a: 0.6};
        default:
          return {r: 255, g: 255, b: 255, a:0};
      }
    }

    $scope.addWhiteCounter = function(x, y) {
      $scope.squares[x][y].white_counters++;
    };

    $scope.deleteWhiteCounter = function(x, y) {
      $scope.squares[x][y].white_counters--;
    };

    $scope.addBlackCounter = function(x, y) {
      $scope.squares[x][y].black_counters++;
    };

    $scope.deleteBlackCounter = function(x, y) {
      $scope.squares[x][y].black_counters--;
    };

    $scope.clear = function() {
      var x, y, max;
      for (x = 0, max = 8; x < max; x++) {
        for (y = 0; y < max; y++) {
          $scope.squares[x][y] = {};
        }
      }
    }

    $scope.removeBlackPiece = function(piece, x, y) {
      var arr = piece.legalMoves();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.deleteBlackCounter(arr[i][0], arr[i][1]);
      }
    }
    $scope.addBlackPiece = function(piece, x, y) {
      var arr = piece.legalMoves();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.addBlackCounter(arr[i][0], arr[i][1]);
      }
    }

    // poorly named. for now we will overload it
    $scope.addWhitePiece = function(piece, x, y) {

      var arr = piece.legalMoves();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.addWhiteCounter(arr[i][0], arr[i][1]);
      }
    }

    $scope.removeWhitePiece = function(piece, x, y) {
      var arr = piece.legalMoves();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.deleteWhiteCounter(arr[i][0], arr[i][1]);
      }
    }

    // protected 
    
    function getPieceObject(name) {
    // ordered by most frequent piece
      switch(name) {
        case 'whitePawn': 
          return angular.copy($rootScope.whitePawn);
        case 'blackPawn':
          return angular.copy($rootScope.blackPawn);
        case 'knight':
          return angular.copy($rootScope.knight);
        case 'bishop':
          return angular.copy($rootScope.bishop);
        case 'rook':
          return angular.copy($rootScope.rook);
        case 'queen':
          return angular.copy($rootScope.queen);
        case 'king':
          return angular.copy($rootScope.king);
      }
    }

    init();

  }]);

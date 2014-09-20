var app = angular.module('LaLuzDeAjedrez');

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

app.controller('ChessboardController', ['$rootScope','$scope', 
  function($rootScope, $scope) {

    // TODO: check scopes of the functions. some may not need to be scoped;

    $scope.reverse = false;

    $scope.flipBoard = function() {
      console.log('flippi boes');
      $scope.reverse = !$scope.reverse;
      console.log($scope.reverse);
    }


    $scope.init = function() {
      $scope.board = new Array(8);
      for(var i = 0, len = 8; i < len; i++) {
        $scope.board[i] = new Array(8);
      }
      var x, y, len = 8;
      for (x = 0 ; x < len; x++) {
        for (y = 0 ; y < len; y++) {
          $scope.board[x][y] = {};
          $scope.board[x][y].white_counters = 0;
          $scope.board[x][y].black_counters = 0;
        }
      }

    }

    function removeAllCounters() {
      for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
          if (!$.isEmptyObject($scope.board[x][y].piece) && !$scope.board[x][y].piece.isPawn) {
            if ($scope.board[x][y].piece.color === 'white') {
              $scope.removeWhitePiece($scope.board[x][y].piece);
            } else {
              $scope.removeBlackPiece($scope.board[x][y].piece);
            }
          }
        }
      }
    }
    function recomputeAllCounters() {
      for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
          if (!$.isEmptyObject($scope.board[x][y].piece) && !$scope.board[x][y].piece.isPawn) {
            if ($scope.board[x][y].piece.color === 'white') {
              $scope.addWhitePiece($scope.board[x][y].piece);
            } else {
              $scope.addBlackPiece($scope.board[x][y].piece);
            }
          }
        }
      }
    }

    $scope.onDropComplete = function(event, data, x, y) {
      var piece = event;
      
      $scope.board[x][y].piece = piece;

      $scope.board[x][y].piece.setPosition(x, y);

      if (piece.color == 'white') {
        $scope.addWhitePiece(piece);
      } else {
        $scope.addBlackPiece(piece);
      }

      if (piece.isPawn) {
        recomputeAllCounters();
      }

    }

    // future use
    $scope.onDrag = function(event, data) {
      var square = $scope.board[event.x][event.y]

      if (square.piece.isPawn) {
        removeAllCounters();
      }

      if (square.piece) {
        if (square.piece.color === 'white') {
          $scope.removeWhitePiece(square.piece);
        } else {
          $scope.removeBlackPiece(square.piece);
        }
        square.piece = {};
      }

    }

    $scope.getBackgroundColor = function(x, y) {
      var color, totalCounters;
      var black = $scope.board[x][y].black_counters;
      var white = $scope.board[x][y].white_counters;
      
      totalCounters = white - black;
      
      if (white + black === 0 ) {
        return 'white';
      }
      
      color = $scope.opacity_chart(totalCounters);
      
      return 'rgba('+color.r+','+color.g+','+color.b+','+color.a+')';
    }

    $scope.getImage = function(x, y) {
      if ($scope.board[x][y].piece && $scope.board[x][y].piece.color) {
        return $scope.board[x][y].piece.imgUrl($scope.board[x][y].piece.color);
      } else {
        return ' ';
      }
    }

    $scope.addPiece = function(name, color, x, y) {
      $scope.board[x][y].piece = getPieceObject(name);
      $scope.board[x][y].piece.setPosition(x, y);
      $scope.board[x][y].piece.name = name;
      
      $scope.board[x][y].piece.color = color;

      if (color == 'white') {
        $scope.addWhitePiece($scope.board[x][y].piece);
      } else {
        $scope.addBlackPiece($scope.board[x][y].piece);
      }

    }

    $scope.opacity_chart = function(heatLevel) {
      switch(heatLevel) {
        case -6:
          return {r: 255, g: 0, b: 0, a: 0.7};
        case -5:
          return {r: 255, g: 0, b: 0, a: 0.6};
        case -4:
          return {r: 255, g: 0, b: 0, a: 0.5};
        case -3:
          return {r: 255, g: 0, b: 0, a: 0.4};
        case -2:
          return {r: 255, g: 0, b: 0, a: 0.3};
        case -1:
          return {r: 255, g: 0, b: 0, a: 0.2};
        case 0:
          return {r: 255, g: 0, b: 255, a: 0.25};
        case 1:
          return {r: 0, g: 0, b: 255, a: 0.2};
        case 2:
          return {r: 0, g: 0, b: 255, a: 0.3};
        case 3:
          return {r: 0, g: 0, b: 255, a: 0.4};
        case 4:
          return {r: 0, g: 0, b: 255, a: 0.5};
        case 5:
          return {r: 0, g: 0, b: 255, a: 0.6};
        case 6:
          return {r: 0, g: 0, b: 255, a: 0.7};
        default:
          return {r: 255, g: 255, b: 255, a:0};
      }
    }

    $scope.addWhiteCounter = function(x, y) {
      $scope.board[x][y].white_counters++;
    };

    $scope.deleteWhiteCounter = function(x, y) {
      if ($scope.board[x][y].white_counters > 0) {
        $scope.board[x][y].white_counters--;
      }
    };

    $scope.addBlackCounter = function(x, y) {
      $scope.board[x][y].black_counters++;
    };

    $scope.deleteBlackCounter = function(x, y) {
      if ($scope.board[x][y].black_counters > 0) {
        $scope.board[x][y].black_counters--;
      }
    };

    $scope.clear = function() {
      var x, y, max;
      for (x = 0, max = 8; x < max; x++) {
        for (y = 0; y < max; y++) {
          $scope.board[x][y] = {};
        }
      }
    }

    $scope.removeBlackPiece = function(piece) {
      var arr = piece.activeSquares();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.deleteBlackCounter(arr[i].x, arr[i].y);
      }
    }
    $scope.addBlackPiece = function(piece) {
      var arr = piece.activeSquares();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.addBlackCounter(arr[i].x, arr[i].y);
      }
    }

    // poorly named. for now we will overload it
    $scope.addWhitePiece = function(piece) {
      var arr = piece.activeSquares();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.addWhiteCounter(arr[i].x, arr[i].y);
      }
    }

    $scope.removeWhitePiece = function(piece) {
      var arr = piece.activeSquares();
      for (var i = 0, len = arr.length; i < len; i++) {
        $scope.deleteWhiteCounter(arr[i].x, arr[i].y);
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

    $scope.init();

  }]);

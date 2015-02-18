var app = angular.module('LaLuzDeAjedrez');

app.controller('ChessboardController', ['$rootScope', '$scope', 
  function($rootScope, $scope) {

    $scope.init = function() {
      $scope.board = new Array(8);
      for ( var i = 0, len = 8; i < len; i++ ) {
        $scope.board[i] = new Array(8);
      }
      var x, y, len = 8;
      for ( x = 0 ; x < len; x++ ) {
        for ( y = 0 ; y < len; y++ ) {
          $scope.board[x][y] = {};
          $scope.board[x][y].white_counters = 0;
          $scope.board[x][y].black_counters = 0;
        }
      }
    }

    function removeAllCounters() {
      for ( var x = 0; x < 8; x++ ) {
        for ( var y = 0; y < 8; y++ ) {
          if ( !$.isEmptyObject( $scope.board[x][y].piece ) && !$scope.board[x][y].piece.isPawn ) {
            if ( $scope.board[x][y].piece.color === 'white' ) {
              $scope.removeWhitePiece( $scope.board[x][y].piece );
            } else {
              $scope.removeBlackPiece( $scope.board[x][y].piece );
            }
          }
        }
      }
    }

    function recomputeAllCounters() {
      for ( var x = 0; x < 8; x++ ) {
        for ( var y = 0; y < 8; y++ ) {
          if ( !$.isEmptyObject($scope.board[x][y].piece) && !$scope.board[x][y].piece.isPawn ) {
            if ( $scope.board[x][y].piece.color === 'white' ) {
              $scope.addWhitePiece( $scope.board[x][y].piece );
            } else {
              $scope.addBlackPiece( $scope.board[x][y].piece );
            }
          }
        }
      }
    }

    $scope.onDrag = function( data, event ) {
      var square = $scope.board[data.x][data.y]

      if ( square.piece.isPawn ) {
        removeAllCounters();
      }

      if ( square.piece ) {
        if ( square.piece.color === 'white' ) {
          $scope.removeWhitePiece( square.piece );
        } else {
          $scope.removeBlackPiece( square.piece );
        }
        square.piece = {};
      }    
    }

    $scope.onDropComplete = function( data, event, x, y ) {
      var piece = data;

      if ( !$.isEmptyObject($scope.board[x][y].piece) ) {
        if ( $scope.board[x][y].piece.color == 'white' ) {
          $scope.removeWhitePiece( $scope.board[x][y].piece );
        } else {
          $scope.removeBlackPiece( $scope.board[x][y].piece );
        }
      }
      
      $scope.board[x][y].piece = piece;
      $scope.board[x][y].piece.setPosition( x, y );

      if ( piece.color == 'white' ) {
        $scope.addWhitePiece( piece );
      } else {
        $scope.addBlackPiece( piece );
      }

      if ( piece.isPawn ) {
        recomputeAllCounters();
      }    
    }

    $scope.getBackgroundColor = function( x, y ) {
      var black = $scope.board[x][y].black_counters;
      var white = $scope.board[x][y].white_counters;
      var totalCounters = white - black;
      var color; 
      
      if ( white + black === 0 ) {
        return 'white';
      }
      
      color = $scope.opacity_chart( totalCounters );

      return 'rgba('+color.r+','+color.g+','+color.b+','+color.a+')';
    }

    $scope.getImage = function( x, y ) {
      if ($scope.board[x][y].piece && $scope.board[x][y].piece.color) {
        return $scope.board[x][y].piece.imgUrl($scope.board[x][y].piece.color);
      } else {
        return '//:0';
      }
    }

    $scope.addPiece = function( name, color, x, y ) {
      $scope.board[x][y].piece = getPieceObject( name );
      $scope.board[x][y].piece.setPosition( x, y );
      $scope.board[x][y].piece.name = name;
      $scope.board[x][y].piece.color = color;

      if ( color == 'white' ) {
        $scope.addWhitePiece( $scope.board[x][y].piece );
      } else {
        $scope.addBlackPiece( $scope.board[x][y].piece );
      }

    }

    $scope.opacity_chart = function( count ) {
      if ($scope.detailed) {
        if (!count) return { r: 255, g: 0, b: 255, a: 0.45};

        return {
          r: count > 0 ? 0 : 255,
          g: 0,
          b: count < 0 ? 0 : 255,
          a: Math.abs(count) * 0.16 + 0.05
        }
      } else {
        if (count < 0) {
          return {
            r: 255, 
            g: 0, 
            b: 0, 
            a: 0.35
          };
        } else if (count == 0) {
          return {
            r: 255, 
            g: 0, 
            b: 255, 
            a: 0.35
          };
        } else {
          return {
            r: 0, 
            g: 0, 
            b: 255, 
            a: 0.35
          };
        }
      }
    }


    $scope.clickPiece = function( x, y ) {
      // debugger

      $scope.board[x][y].selected = true;
    }

    $scope.addWhiteCounter = function( x, y ) {
      $scope.board[x][y].white_counters++;
    };

    $scope.deleteWhiteCounter = function( x, y ) {
      if ( $scope.board[x][y].white_counters > 0 ) {
        $scope.board[x][y].white_counters--;
      }
    };

    $scope.addBlackCounter = function( x, y ) {
      $scope.board[x][y].black_counters++;
    };

    $scope.deleteBlackCounter = function( x, y ) {
      if ( $scope.board[x][y].black_counters > 0 ) {
        $scope.board[x][y].black_counters--;
      }
    };

    $scope.clear = function() {
      var x, y, max;
      for ( x = 0, max = 8; x < max; x++ ) {
        for ( y = 0; y < max; y++ ) {
          $scope.board[x][y] = {};
        }
      }
    }

    $scope.removeBlackPiece = function( piece ) {
      var arr = piece.activeSquares();
      for ( var i = 0, len = arr.length; i < len; i++ ) {
        $scope.deleteBlackCounter( arr[i].x, arr[i].y );
      }
    }
    $scope.addBlackPiece = function( piece ) {
      var arr = piece.activeSquares();
      for ( var i = 0, len = arr.length; i < len; i++ ) {
        $scope.addBlackCounter( arr[i].x, arr[i].y );
      }
    }

    // poorly named. for now we will overload it
    $scope.addWhitePiece = function( piece ) {
      var arr = piece.activeSquares();
      for ( var i = 0, len = arr.length; i < len; i++ ) {
        $scope.addWhiteCounter( arr[i].x, arr[i].y );
      }
    }

    $scope.removeWhitePiece = function( piece ) {
      var arr = piece.activeSquares();
      for ( var i = 0, len = arr.length; i < len; i++ ) {
        $scope.deleteWhiteCounter( arr[i].x, arr[i].y );
      }
    }

    // protected 
    
    function getPieceObject( name ) {
    // ordered by most frequent piece
      switch( name ) {
        case 'whitePawn': 
          return angular.copy( $rootScope.whitePawn );
        case 'blackPawn':
          return angular.copy( $rootScope.blackPawn );
        case 'knight':
          return angular.copy( $rootScope.knight );
        case 'bishop':
          return angular.copy( $rootScope.bishop );
        case 'rook':
          return angular.copy( $rootScope.rook );
        case 'queen':
          return angular.copy( $rootScope.queen );
        case 'king':
          return angular.copy( $rootScope.king );
      }
    }

    $scope.init();

  }]);

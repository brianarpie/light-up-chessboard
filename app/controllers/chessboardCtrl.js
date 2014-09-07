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

    // for now i can put these methods here and then later on re-organize them
    // we dont want everything going in the chessboard controller
    // on the things that directly influence/touch the chessbaord itself.

    // function drag(ev) {
    //   // debugger;
    //   ev.dataTransfer.setData("text/html", ev.target.id);
    // }    

    // function precompute(ev) {
    //    ev.preventDefault();
    // }

    // function drop(ev) {
    //   ev.preventDefault();
    //   var data = ev.dataTransfer.getData("imgUrl");
    //   ev.target.appendChild(document.getElementById(data));

    //   console.log('dropping event finished firing!');
    // }

    // $scope.dragData;

    // data is the clone of the piece object for a given square
    $scope.onDropComplete = function(event, data, x, y) {

      if (event.isPawn || searchArray(event.legalMoves(), [x,y])) {
        // $scope.squares[x][y].addPiece(event);

      if ($scope.squares[$scope.current_x][$scope.current_y].piece.color) {
        if (event.color === 'white') {
          $scope.removeWhitePiece(event, $scope.current_x, $scope.current_y);

        } else {
          $scope.removeBlackPiece(event, $scope.current_x, $scope.current_y);
        }
        $scope.squares[$scope.current_x][$scope.current_y].piece = {};
        document.getElementById($scope.current_x.toString().concat($scope.current_y)).src = ''
      }
        $scope.squares[x][y].piece = event;
        $scope.squares[x][y].piece.x = x;
        $scope.squares[x][y].piece.y = y;
        if (event.color == 'white') {

          $scope.addWhitePiece(event, x, y);
        } else {
          $scope.addBlackPiece(event, x, y);
        }

      }
// debugger;
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

    $scope.precompute = function(event, data) {
      // get all legal moves!
                    $scope.current_x = event.x;
      $scope.current_y = event.y;
      // $scope.dragData = data;
      // console.log(event.x);
      // console.log(event.y);
      // these x and y need to be cleared!
      // console.log(data);
      // $scope.squares[event.x][event.y].piece.

      // $scope.squares[event.x][event.y].piece.imgUrl('');
      // debugger;
      // $scope.current_x = event.x;
      // $scope.current_y = event.y;
      // if ($scope.squares[$scope.current_x][$scope.current_y].piece.color) {
      //   if (event.color === 'white') {
      //     $scope.removeWhitePiece(event, $scope.current_x, $scope.current_y);

      //   } else {
      //     $scope.removeBlackPiece(event, $scope.current_x, $scope.current_y);
      //   }
      //   $scope.squares[$scope.current_x][$scope.current_y].piece = {};
      //   document.getElementById($scope.current_x.toString().concat($scope.current_y)).src = ''
      // }
      // console.log(event);
      // console.log(document.getElementById($scope.current_x.toString().concat($scope.current_y)));
        
        
      // console.log('finished removing piece from square');
      // console.log($scope.current_x , $scope.current_y)
      // debugger;


      // console.log('precomputing...')

    }





    $scope.getBackgroundColor = function(x, y) {
      var color, totalCounters;
      // if ($scope.squares[x][y].)
      totalCounters = $scope.squares[x][y].white_counters - $scope.squares[x][y].black_counters
      color = $scope.opacity_chart(totalCounters);
      return 'rgba('+color.r+','+color.g+','+color.b+','+color.a+')';
    }

    $scope.getImage = function(x, y) {
      // if ($scope.squares[x][y].piece) debugger;
      // debugger;
      // if (x ==7 && y=== 7) {
      //   // debugger;
      //   return '';
      //   console.log('getting Image for h1!');
      // }
      if ($scope.squares[x][y].piece && $scope.squares[x][y].piece.color) {
        // debugger;
        return $scope.squares[x][y].piece.imgUrl($scope.squares[x][y].piece.color);
      } else {
        return '';
      }

      // return ($scope.squares[x][y].piece && $scope.squares[x][y].piece.color) ? $scope.squares[x][y].piece.imgUrl($scope.squares[x][y].piece.color) : '';
    }

    // $scope.getLegalMoves = function(x, y) {
    //   return $scope.squares[x][y].piece.legalMoves();
    // }

    $scope.addPiece = function(name, color, x, y) {
      $scope.squares[x][y].piece = getPieceObject(name);
      $scope.squares[x][y].piece.setPosition(x, y);
      
      $scope.squares[x][y].piece.color = color;
      // if (x ==7 && y==7) {
      //   debugger;
      // }
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
          return {r: 0, g: 0, b: 0, a: 0};
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
          return {r: 255, g: 255, b: 255};
      }
    }

    $scope.color_chart = function(heat_level) {
      switch(heat_level) {
        case -6:
          return {r: 155, g: 0, b: 0};
        case -5:
          return {r: 145, g: 0, b: 0};
        case -4:
          return {r: 135, g: 0, b: 0};
        case -3:
          return {r: 125, g: 0, b: 0};
        case -2:
          return {r: 115, g: 0, b: 0};
        case -1:
          return {r: 105, g: 0, b: 0};
        case 0:
          return {r: 0, g: 255, b: 0};
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
        case 6:
          return {r: 0, g: 0, b: 175};
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

    // $scope.printBlackCounters = function() {
    //   var x, y, max, buf = [];
    //   for (y = 0, max = 8; y < max; y++) {
    //     for (x = 0; x < max; x++) {
    //       buf.push($scope.squares[x][y].black_counters);
    //     }
    //     console.log(buf);
    //     buf = [];
    //   }
    // }
    // $scope.printWhiteCounters = function() {
    //   var x, y, max, buf = [];
    //   for (y = 0, max = 8; y < max; y++) {
    //     for (x = 0; x < max; x++) {
    //       buf.push($scope.squares[x][y].white_counters);
    //     }
    //     console.log(buf);
    //     buf = [];
    //   }
    // }

    // $scope.print = function() {
    //   var x, y, max, diff, buf = [], color = {};
    //   for (y = 0, max = 8; y < max; y++) {
    //     for (x = 0; x < max; x++) {
    //       diff = ($scope.squares[x][y].white_counters - $scope.squares[x][y].black_counters);
    //       // useful but not yet implm.
    //       // color = $scope.color_chart(diff);
    //       // set_background(x, y, color);
    //       if (diff >= 0) {
    //         diff = "+" + diff;
    //       }
    //         buf.push('['+diff+']');
    //     }
    //     console.log('\n');
    //     console.log(buf);
    //     buf = [];
    //   }
    // }

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

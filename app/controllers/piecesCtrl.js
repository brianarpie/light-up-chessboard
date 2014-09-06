var app = angular.module('LaLuzDeAjedrez');

app.controller('PiecesController', ['$rootScope', '$scope',
  function($rootScope, $scope) {

    $rootScope.king = {
      legalMoves: function(_x, _y) {
        var x, y, x_min, y_min, x_max, y_max, squares = [];

        // get x and y min to prevent accessing non-existent squares
        x_min = _x > 0 ? _x - 1 : 0;
        x_max = _x < 7 ? _x + 1 : 7;
        y_min = _y > 0 ? _y - 1 : 0;
        y_max = _y < 7 ? _y + 1 : 7;
        
        for (x = x_min; x < x_max + 1; x++) {
          for (y = y_min; y < y_max + 1; y++) {
            if (_x !== x || _y !== y) {
              squares.push([x, y]);
            }
          }
        }
        return squares;
      }
    };

    $rootScope.queen = {
      legalMoves: function(_x, _y) {
        var x, y, max, squares = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if ((_x === x && _y !== y) || (_x !== x && _y === y)) {
              squares.push([x, y]);
            } else if (Math.abs(_x - x) === Math.abs(_y - y) && (_x !== x || _y !== y)) {
              squares.push([x, y]);
            }
          }
        }
        return squares;
      }
    };


    $rootScope.rook = {
      legalMoves: function(_x, _y) {
        var x, y, max, squares = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if ((_x === x && _y !== y) || (_x !==x && _y === y)) {
              squares.push([x, y]);
            }
          }
        }
        return squares;
      }
    }

    $rootScope.bishop = {
      legalMoves: function(_x, _y) {
        var x, y, max, squares = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if (_x !== x || _y !== y) {
              if (Math.abs(_x - x) == Math.abs(_y - y)) {
                squares.push([x, y]);
              }
            }
          }
        }
        return squares;
      }
    };

    $rootScope.knight = {
      legalMoves: function(_x, _y) {
        var x, y, max, moves = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if (Math.abs(_x - x) * Math.abs(_y - y) === 2) {
              moves.push([x, y]);
            }      
          }
        }
        return moves;
      }
    }

    $rootScope.whitePawn = {
      legalMoves: function(_x, _y) {
        var squares = [];

        if (_x > 0 && _x < 7) {
          squares.push([_x - 1, _y - 1]);
          squares.push([_x + 1, _y - 1]);
        } else if (_x === 0) {
          squares.push([_x + 1, _y - 1]);
        } else {
          squares.push([_x - 1, _y - 1]);
        }

        return squares;
      }
    };

    $rootScope.blackPawn = {
      legalMoves: function(_x, _y) {
        var squares = [];

        if (_x > 0 && _x < 7) {
          squares.push([_x - 1, _y + 1]);
          squares.push([_x + 1, _y + 1]);
        } else if (_x === 0) {
          squares.push([_x + 1, _y + 1]);
        } else {
          squares.push([_x - 1, _y + 1]);
        }

        return squares;
      }
    }

}]);
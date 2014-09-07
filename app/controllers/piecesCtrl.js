var app = angular.module('LaLuzDeAjedrez');

app.controller('PiecesController', ['$rootScope', '$scope',
  function($rootScope, $scope) {

    $rootScope.king = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      legalMoves: function() {
        var x, y, x_min, y_min, x_max, y_max, squares = [];

        // get x and y min to prevent accessing non-existent squares
        x_min = this.x > 0 ? this.x - 1 : 0;
        x_max = this.x < 7 ? this.x + 1 : 7;
        y_min = this.y > 0 ? this.y - 1 : 0;
        y_max = this.y < 7 ? this.y + 1 : 7;
        
        for (x = x_min; x < x_max + 1; x++) {
          for (y = y_min; y < y_max + 1; y++) {
            if (this.x !== x || this.y !== y) {
              squares.push([x, y]);
            }
          }
        }
        return squares;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-king.png'
                                 : 'app/assets/images/pieces_60px/black-king.png';
      },
      isPawn: true

    };

    $rootScope.queen = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      legalMoves: function() {
        var x, y, max, squares = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if ((this.x === x && this.y !== y) || (this.x !== x && this.y === y)) {
              squares.push([x, y]);
            } else if (Math.abs(this.x - x) === Math.abs(this.y - y) && (this.x !== x || this.y !== y)) {
              squares.push([x, y]);
            }
          }
        }
        return squares;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-queen.png'
                                 : 'app/assets/images/pieces_60px/black-queen.png';
      }
    };


    $rootScope.rook = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      legalMoves: function() {
        var x, y, max, squares = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if ((this.x === x && this.y !== y) || (this.x !==x && this.y === y)) {
              squares.push([x, y]);
            }
          }
        }
        return squares;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-rook.png'
                                 : 'app/assets/images/pieces_60px/black-rook.png';
      }
    }

    $rootScope.bishop = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      legalMoves: function() {
        var x, y, max, squares = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if (this.x !== x || this.y !== y) {
              if (Math.abs(this.x - x) == Math.abs(this.y - y)) {
                squares.push([x, y]);
              }
            }
          }
        }
        return squares;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-bishop.png'
                                 : 'app/assets/images/pieces_60px/black-bishop.png';
      }
    };

    $rootScope.knight = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      legalMoves: function() {
        var x, y, max, moves = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if (Math.abs(this.x - x) * Math.abs(this.y - y) === 2) {
              moves.push([x, y]);
            }      
          }
        }
        return moves;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-knight.png'
                                 : 'app/assets/images/pieces_60px/black-knight.png';
      }
    }

    $rootScope.whitePawn = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      legalMoves: function() {
        var squares = [];

        if (this.x > 0 && this.x < 7) {
          squares.push([this.x - 1, this.y - 1]);
          squares.push([this.x + 1, this.y - 1]);
        } else if (this.x === 0) {
          squares.push([this.x + 1, this.y - 1]);
        } else {
          squares.push([this.x - 1, this.y - 1]);
        }

        return squares;
      },
      imgUrl: function(color) {
        return 'app/assets/images/pieces_60px/white-pawn.png';
      },
      isPawn: true
    };

    $rootScope.blackPawn = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      legalMoves: function() {
        var squares = [];

        if (this.x > 0 && this.x < 7) {
          squares.push([this.x - 1, this.y + 1]);
          squares.push([this.x + 1, this.y + 1]);
        } else if (this.x === 0) {
          squares.push([this.x + 1, this.y + 1]);
        } else {
          squares.push([this.x - 1, this.y + 1]);
        }

        return squares;
      },
      imgUrl: function(color) {
        return 'app/assets/images/pieces_60px/black-pawn.png';
      },
      isPawn: true
    }

}]);
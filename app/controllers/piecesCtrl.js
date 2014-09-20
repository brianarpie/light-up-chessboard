var app = angular.module('LaLuzDeAjedrez');

app.controller('PiecesController', ['$rootScope', '$scope',
  function($rootScope, $scope) {

    // TODO: note in the readme this difference in data structure so that a future version can optimize accessing the data (which structure is faster to access)

    // TODO: pieces need squares attacking (which is currently legal moves) and legal moves which will have to check for pawns and pieces of the same color. since color is or should be set immediately these controllers can query for the attribute, although it is never defined or instantiated in the controller itself.

    // function isSomethingAt(x, y) {
    //   var square = $scope.board[x][y];
    //   try {
    //     return square !== null &&
    //       !JQuery.isEmptyObject(square.piece)
    //   } catch(err) {
    //     return false;
    //   }
    // }

    function isPawnAt(x, y) {
      var square = $scope.board[x][y];
      try {
        return square !== null && 
          square.piece !== null && 
          square.piece.isPawn === true;
      } catch(err) {
        return false;
      }
    }

    $rootScope.king = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      activeSquares: function() {
        var x, y, x_min, y_min, x_max, y_max, moves = [];

        // get x and y min to prevent accessing non-existent moves
        x_min = this.x > 0 ? this.x - 1 : 0;
        x_max = this.x < 7 ? this.x + 1 : 7;
        y_min = this.y > 0 ? this.y - 1 : 0;
        y_max = this.y < 7 ? this.y + 1 : 7;
        
        for (x = x_min; x < x_max + 1; x++) {
          for (y = y_min; y < y_max + 1; y++) {
            if (this.x !== x || this.y !== y) {
              moves.push({
                x: x, 
                y: y
              });
            }
          }
        }
        return moves;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-king.png'
                                 : 'app/assets/images/pieces_60px/black-king.png';
      }
    };

    $rootScope.knight = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      activeSquares: function() {
        var x, y, max, moves = [];
        for (x = 0, max = 8; x < max; x++) {
          for (y = 0; y < max; y++) {
            if (Math.abs(this.x - x) * Math.abs(this.y - y) === 2) {
              moves.push({
                x: x, 
                y: y
              });
            }      
          }
        }
        return moves;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-knight.png'
                                 : 'app/assets/images/pieces_60px/black-knight.png';
      }
    };

    $rootScope.rook = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      activeSquares: function() {

        // less readable but higher performance
        var _x = this.x;
        var _y = this.y;

        var moves = [];

        // vector N
        for (var y = _y; y < 7; y++) {
          moves.push({ 
            x: _x, 
            y: y + 1  
          });

          if (isPawnAt(_x, y + 1)) {
            break;
          }
        }

        // vector E
        for (var x = _x; x < 7; x++) {
          moves.push({
            x: x + 1,
            y: _y
          });

          if (isPawnAt(x + 1, _y)) {
            break;
          }
        }

        // vector S
        for (var y = _y; y > 0; y--) {
          moves.push({
            x: _x,
            y: y - 1
          });

          if (isPawnAt(_x, y - 1)) {
            break;
          }
        }

        // vector W
        for (var x = _x; x > 0; x--) {
          moves.push({
            x: x - 1,
            y: _y
          });

          if (isPawnAt(x - 1, _y)) {
            break;
          }
        }

        return moves;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-rook.png'
                                 : 'app/assets/images/pieces_60px/black-rook.png';
      }
    };

    $rootScope.bishop = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      activeSquares: function() {

        // less readable but higher performance
        var _x = this.x;
        var _y = this.y;

        var moves = [];

        // vector NE
        for (var x = _x, y = _y; x < 7 && y < 7; x++, y++) {
          moves.push({
            x: x + 1,
            y: y + 1
          });

          if (isPawnAt(x + 1, y + 1)) {
            break;
          }
        }

        // vector SE
        for (var x = _x, y = _y; x < 7 && y > 0; x++, y--) {
          moves.push({
            x: x + 1,
            y: y - 1
          });

          if (isPawnAt(x + 1, y - 1)) {
            break;
          }
        }

        // vector SW
        for (var x = _x, y = _y; x > 0 && y > 0; x--, y--) {
          moves.push({
            x: x - 1,
            y: y - 1
          });

          if (isPawnAt(x - 1, y - 1)) {
            break;
          }
        }

        // vector NW
        for (var x = _x, y = _y; x > 0 && y < 7; x--, y++) {
          moves.push({
            x: x - 1,
            y: y + 1
          });

          if (isPawnAt(x - 1, y + 1)) {
            break;
          }
        }

        return moves;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-bishop.png'
                                 : 'app/assets/images/pieces_60px/black-bishop.png';
      }
    };

    $rootScope.whitePawn = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      activeSquares: function() {
        var _x = this.x;
        var _y = this.y;

        var moves = [];

        if (_y > 0) { 
          if (_x > 0 && _x < 7) {
            moves.push({
              x: _x - 1, 
              y: _y - 1
            });
            moves.push({ 
              x: _x + 1, 
              y: _y - 1
            });
          } else if (_x === 0) {
            moves.push({ 
              x: _x + 1, 
              y: _y - 1
            });
          } else {
            moves.push({ 
              x: _x - 1, 
              y: _y - 1
            });
          }
        }

        return moves;

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
      activeSquares: function() {
        var _x = this.x;
        var _y = this.y;

        var moves = [];

        if (_y < 7) { 
          if (_x > 0 && _x < 7) {
            moves.push({
              x: _x - 1, 
              y: _y + 1
            });
            moves.push({ 
              x: _x + 1, 
              y: _y + 1
            });
          } else if (_x === 0) {
            moves.push({ 
              x: _x + 1, 
              y: _y + 1
            });
          } else {
            moves.push({ 
              x: _x - 1, 
              y: _y + 1
            });
          }
        }

        return moves;

      },
      imgUrl: function(color) {
        return 'app/assets/images/pieces_60px/black-pawn.png';
      },
      isPawn: true
    };

    $rootScope.queen = {
      setPosition: function(x, y) {
        this.x = x;
        this.y = y;
      },
      activeSquares: function() {

        // less readable but higher performance
        var _x = this.x;
        var _y = this.y;

        var moves = [];

        // vector N
        for (var y = _y; y < 7; y++) {
          moves.push({ 
            x: _x, 
            y: y + 1  
          });

          if (isPawnAt(_x, y + 1)) {
            break;
          }
        }

        // vector NE
        for (var x = _x, y = _y; x < 7 && y < 7; x++, y++) {
          moves.push({
            x: x + 1,
            y: y + 1
          });

          if (isPawnAt(x + 1, y + 1)) {
            break;
          }
        }

        // vector E
        for (var x = _x; x < 7; x++) {
          moves.push({
            x: x + 1,
            y: _y
          });

          if (isPawnAt(x + 1, _y)) {
            break;
          }
        }

        // vector SE
        for (var x = _x, y = _y; x < 7 && y > 0; x++, y--) {
          moves.push({
            x: x + 1,
            y: y - 1
          });

          if (isPawnAt(x + 1, y - 1)) {
            break;
          }
        }

        // vector S
        for (var y = _y; y > 0; y--) {
          moves.push({
            x: _x,
            y: y - 1
          });

          if (isPawnAt(_x, y - 1)) {
            break;
          }
        }

        // vector SW
        for (var x = _x, y = _y; x > 0 && y > 0; x--, y--) {
          moves.push({
            x: x - 1,
            y: y - 1
          });

          if (isPawnAt(x - 1, y - 1)) {
            break;
          }
        }

        // vector W
        for (var x = _x; x > 0; x--) {
          moves.push({
            x: x - 1,
            y: _y
          });

          if (isPawnAt(x - 1, _y)) {
            break;
          }
        }

        // vector NW
        for (var x = _x, y = _y; x > 0 && y < 7; x--, y++) {
          moves.push({
            x: x - 1,
            y: y + 1
          });

          if (isPawnAt(x - 1, y + 1)) {
            break;
          }
        }

        return moves;
      },
      imgUrl: function(color) {
        return color === 'white' ? 'app/assets/images/pieces_60px/white-queen.png'
                                 : 'app/assets/images/pieces_60px/black-queen.png';
      }
    };

  }])
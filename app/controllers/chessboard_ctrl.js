(function() {

  var Chessboard = function (options) { 
    this.squares = new Array(8);
    for(var i = 0, len = 8; i < len; i++) {
      this.squares[i] = new Array(8);
    }
    var x = 0, y = 0, len = 8;
    for (x = 0 ; x < len; x++) {
      for (y = 0 ; y < len; y++) {
        this.squares[x][y] = {};
        this.squares[x][y].white_counters = 0;
        this.squares[x][y].black_counters = 0;
      }
    }
  }

  Chessboard.prototype.add_white_counter = function(x, y) {
    this.squares[x][y].white_counters++;
  };

  Chessboard.prototype.delete_white_counter = function(x, y) {
    this.squares[x][y].white_counters--;
  };

  Chessboard.prototype.add_black_counter = function(x, y) {
    this.squares[x][y].black_counters++;
  };

  Chessboard.prototype.delete_black_counter = function(x, y) {
    this.squares[x][y].black_counters--;
  };

  Chessboard.prototype.print_black_counters = function() {
    var x, y, max, buf = [];
    for (y = 0, max = 8; y < max; y++) {
      for (x = 0; x < max; x++) {
        buf.push(this.squares[x][y].white_counters);
      }
      console.log(buf);
      buf = [];
    }
  }

  Chessboard.prototype.print_black_counters = function() {
    var x, y, max, buf = [];
    for (y = 0, max = 8; y < max; y++) {
      for (x = 0; x < max; x++) {
        buf.push(this.squares[x][y].black_counters);
      }
      console.log(buf);
      buf = [];
    }
  }

  Chessboard.prototype.print = function() {
    var x, y, max, diff, buf = [];
    for (y = 0, max = 8; y < max; y++) {
      for (x = 0; x < max; x++) {
        diff = (this.squares[x][y].white_counters - this.squares[x][y].black_counters);
        if (diff >= 0) {
          // console
          diff = "+" + diff;
          // console.log('['+diff+']');
        }
          buf.push('['+diff+']');
        // buf.push(diff);
      }
      console.log('\n');
      console.log(buf);
      buf = [];
    }
  }

  Chessboard.prototype.clear = function() {
    var x, y, max;
    for (x = 0, max = 8; x < max; x++) {
      for (y = 0; y < max; y++) {
        this.squares[x][y] = {};
      }
    }
  }

  Chessboard.prototype.add_black_piece = function(piece) {
    var arr = piece.legal_moves();
    for (var i = 0, len = arr.length; i < len; i++) {
      this.add_black_counter(arr[i][0], arr[i][1]);
    }
  }

  Chessboard.prototype.add_white_piece = function(piece) {
    var arr = piece.legal_moves();
    for (var i = 0, len = arr.length; i < len; i++) {
      this.add_white_counter(arr[i][0], arr[i][1]);
    }
  }

  exports.init = Chessboard;

})();
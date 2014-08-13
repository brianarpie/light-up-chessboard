(function() {

  var King = function(x, y) {
    this.x = x;
    this.y = y;
  }

  King.prototype.legal_moves = function() {
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
  }

  exports.init = King;

})();
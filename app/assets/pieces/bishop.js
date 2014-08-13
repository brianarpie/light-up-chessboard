(function() {

  var Bishop = function(x, y) {
    this.x = x;
    this.y = y;
  };

  Bishop.prototype.legal_moves = function() {
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
  };

  exports.init = Bishop;

})();
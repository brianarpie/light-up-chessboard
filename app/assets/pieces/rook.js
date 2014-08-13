(function() {

  var Rook = function(x, y) {
    this.x = x;
    this.y = y;
  }

  Rook.prototype.legal_moves = function() {
    var x, y, max, squares = [];
    for (x = 0, max = 8; x < max; x++) {
      for (y = 0; y < max; y++) {
        if ((this.x === x && this.y !== y) || (this.x !==x && this.y === y)) {
          squares.push([x, y]);
        }
      }
    }
    return squares;
  }

  exports.init = Rook;

})();
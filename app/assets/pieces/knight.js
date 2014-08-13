(function () {

  var Knight = function(x, y) {
    this.x = x;
    this.y = y;
  };

  Knight.prototype.legal_moves = function() {
    var x, y, max, moves = [];
    for (x = 0, max = 8; x < max; x++) {
      for (y = 0; y < max; y++) {
        if (Math.abs(this.x - x) * Math.abs(this.y - y) === 2) {
          moves.push([x, y]);
        }      
      }
    }
    return moves;
  };

  exports.init = Knight;

})();
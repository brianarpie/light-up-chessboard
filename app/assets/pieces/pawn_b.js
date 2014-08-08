(function () {

  var BlackPawn = function(x, y) {
    this.x = x;
    this.y = y;
  }

  BlackPawn.prototype.legal_moves = function() {
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
  }

  exports.init = BlackPawn;

})();
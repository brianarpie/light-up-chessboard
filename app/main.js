var Chessboard = require('./controllers/chessboard_ctrl.js');
var Knight = require('./assets/pieces/knight.js');
var Queen = require('./assets/pieces/queen.js');
var Rook = require('./assets/pieces/rook.js');
var Bishop = require('./assets/pieces/bishop.js');
var King = require('./assets/pieces/king.js');
var WhitePawn = require('./assets/pieces/pawn_w.js');
var BlackPawn = require('./assets/pieces/pawn_b.js');

var board = new Chessboard.init();

function add_black_piece(piece) {
  var arr = piece.legal_moves();
  for (var i = 0, len = arr.length; i < len; i++) {
    board.add_black_counter(arr[i][0], arr[i][1]);
  }
}
function add_white_piece(piece) {
  var arr = piece.legal_moves();
  for (var i = 0, len = arr.length; i < len; i++) {
    board.add_white_counter(arr[i][0], arr[i][1]);
  }
}

// var K = new Knight.init(1, 0);
// var R = new Rook.init(0, 0);
// var R2 = new Rook.init(7, 0);
// var B = new Bishop.init(2, 0);
// var Q = new Queen.init(3, 0);
// var KING = new King.init(4, 0);
// var pawn = new BlackPawn.init(5, 5);
// // add_black_piece(R);
// // add_black_piece(K);
// // add_black_piece(B);
// // add_black_piece(R2);
// // add_black_piece(Q);
// // add_black_piece(KING);
// add_black_piece(pawn);

board.print();

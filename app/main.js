var Chessboard = require('./controllers/chessboard_ctrl.js');
var starting_position = require('./assets/positions/starting_position.js');

var board = new Chessboard.init();

var white_pieces = starting_position.white_pieces;
var black_pieces = starting_position.black_pieces;


console.log(white_pieces[0].legal_moves());
var i, len;
for (i = 0, len = white_pieces.length; i < len; i++) {
  board.add_white_piece(white_pieces[i]);
}

var i, len;
for (i = 0, len = black_pieces.length; i < len; i++) {
  board.add_black_piece(black_pieces[i]);
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

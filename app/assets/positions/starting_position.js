(function(){

  var Knight = require('../pieces/knight.js'),
      Queen = require('../pieces/queen.js'),
      Rook = require('../pieces/rook.js'),
      Bishop = require('../pieces/bishop.js'),
      King = require('../pieces/king.js'),
      WhitePawn = require('../pieces/pawn_w.js'),
      BlackPawn = require('../pieces/pawn_b.js');

  var white_pieces = [
    rook_a1 = new Rook.init(0, 7),
    knight_b1 = new Knight.init(1, 7),
    bishop_c1 = new Bishop.init(2, 7),
    queen_d1 = new Queen.init(3, 7),
    king_e1 = new King.init(4, 7),
    bishop_f1 = new Bishop.init(5, 7),
    knight_g1 = new Knight.init(6, 7),
    rook_h1 = new Rook.init(7, 7),
    pawn_a2 = new WhitePawn.init(0, 6),
    pawn_b2 = new WhitePawn.init(1, 6),
    pawn_c2 = new WhitePawn.init(2, 6),
    pawn_d2 = new WhitePawn.init(3, 6),
    pawn_e2 = new WhitePawn.init(4, 6),
    pawn_f2 = new WhitePawn.init(5, 6),
    pawn_g2 = new WhitePawn.init(6, 6),
    pawn_h2 = new WhitePawn.init(7, 6)
  ];

  var black_pieces = [
    rook_a8 = new Rook.init(0, 0),
    knight_b8 = new Knight.init(1, 0),
    bishop_c8 = new Bishop.init(2, 0),
    queen_d8 = new Queen.init(3, 0),
    king_e8 = new King.init(4, 0),
    bishop_f8 = new Bishop.init(5, 0),
    knight_g8 = new Knight.init(6, 0),
    rook_h8 = new Rook.init(7, 0),
    pawn_a7 = new BlackPawn.init(0, 1),
    pawn_b7 = new BlackPawn.init(1, 1),
    pawn_c7 = new BlackPawn.init(2, 1),
    pawn_d7 = new BlackPawn.init(3, 1),
    pawn_e7 = new BlackPawn.init(4, 1),
    pawn_f7 = new BlackPawn.init(5, 1),
    pawn_g7 = new BlackPawn.init(6, 1),
    pawn_h7 = new BlackPawn.init(7, 1)
  ];

  exports.white_pieces = white_pieces;
  exports.black_pieces = black_pieces;
  
})();
(function() {

  "use strict";

  var pattern = {
    check: /\+/,
    checkMate: /\#/,
    pieceCapture: /\x/,
    gameInfo: /\]/,
    removeMoveNumbers: /.\d\./,
    separateMoves: /\s/
  };

  var app = angular.module('LaLuzDeAjedrez');

  app.controller('PgnController', ['$scope', 'PgnMoveService', 
    function($scope, PgnMoveService) {

      function init() {
        $('.upload .file').change(verifyFileExt);
        $('.upload .button').click(uploadFile);
      }

      function uploadFile() { 
        var fileReader = new FileReader();
        var selectedFile = document.querySelector('.upload .file').files[0];
        fileReader.onload = _.bind(processPgn, selectedFile);
        fileReader.readAsText(selectedFile);
      }

      function verifyFileExt() {
        var path = this.files[0].name;
        if (!path.match(/\.pgn/)) {
          window.alert('file type must be pgn');
        } else {
          $('.upload .button').removeClass('hidden');
        }
      }

      // not sure if ill use this
      var movementDestinationPattern = /(.\d\.|\s)/;

      // TODO: make sure level one captures the "1.", everything else is fine though.

      // the start of the pipeline, no mistakes from here on out.

      function processPgn(fileEvent) {
        var pgnBatch = fileEvent.target.result;
        var lines = pgnBatch.split(pattern.gameInfo);
        var moveList;
        _.each(lines, function(line) {
          if (line.indexOf('[') > -1) {
            handleGameStats(line);
          } else {
            moveList = line;
          }
        });

        var somethingMoveList = moveList.split(pattern.removeMoveNumbers);
        console.log('level 1',somethingMoveList);


        var somethingElse = _.flatten(_.map(somethingMoveList, function(d) {
          return d.trim().split(pattern.separateMoves);
        }));

        somethingElse[0] = somethingElse[0].slice(2);
        console.log('level 2 ',somethingElse);
        PgnMoveService.makeMove(somethingElse[0]);

        // CURRENT PROGRESS -- each move is in the array, time to map to the array indices
        // all possible information we can extract from a move.

        /*
          1. exd5 = pawn (lower case e) - captures (x) - pawn (lower case d) - on 5th rank (5)
          2. Nxf7 = Knight (capital N) - captures (x) - pawn (lowercase f) - on 7th rank (7)
          3. O-O/O-O-O = castle move because contains capital O & dash
          4. e4 = pawn (file e) - to 4th rank (4)
          5. Nbd7 = Knight (N) - two succesive letters from b file to d file - to 7th rank (7)
          6. Nfxe5 = Knight (N) - two succesive letters (all letters until #) from f file capture on e file - 5th rank 


          Need to identify en passant -- special case for structure (lowercase letter)(x)(lower case letter)(6)
          -- capture pawn may be on the 5th rank, not the 6th.

        */

        var chessNotationToArrayIndexMap = {

        }

        // TODO: create a service that communicates the chess moves to the board.
        _.each(somethingElse, function(moves) {
            // compute each move in order, checking if move is a game has ended move
        });

      }

      function handleGameStats(stat) {
        var statKeyValuePair = stat.split(' "');
        var attribute = statKeyValuePair[0].trim().slice(1);
        var secondDelimiter = statKeyValuePair[1].indexOf('"');
        var statValue = statKeyValuePair[1].slice(0, secondDelimiter);

        if (attribute == 'White' || attribute == 'Black') {
          appendToTitle(attribute, statValue);
        }

        $('table.stats').append($('<tr>')
          .append($('<td>').text(attribute))
          .append($('<td>').text(statValue)));
      }

      function appendToTitle(color, player) {
        $scope.gameTitle = (color.match(/white/i)) ? player : [$scope.gameTitle, ' vs ', player].join('');
        $scope.$digest();
      }

      // hopefully this can be implemented in the backend to simply support these characters instead of full names as namespaces
      // var chessPieceMapping = {
      //   K: 'king',
      //   Q: 'queen',
      //   N: 'knight',
      //   R: 'rook',
      //   B: 'bishop'
      // };

      // var chessboardCoordinateMapping = {
      //   a: 0,
      //   b: 1,
      //   c: 2,
      //   d: 3,
      //   e: 4,
      //   f: 5,
      //   g: 6,
      //   h: 7
      // };

      // matches (1-0, 0-1, & 1/2-1/2) taking into consideration possible spaces.
      var gameoverPattern = /[ 012]-[ 012]/;

      // matches the number for every move e.g. (1. N)f3 or 1(4.e)5
      var newMovePattern = /\d\.\D/;

      $scope.loadPGN = function() {

        // 1. scrape info at top of pgn
        // 2. loop through moves (use .)
        // 2. a. condition 1: a { or ; = comments
        // 2. b. condition 2: if no more . look for a result 1/2-1/2 | 1-0 | 0-1
        // 2. c. condition 3: a move
        // 3. depending on condition, handle it.
      }

      init();

  }]);

})();

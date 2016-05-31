// all the tiles
var tiles = [];
var images = [];

// tile constructor
var Tile = function(column, row) {
  this.edge = 100;
  this.column = column;
  this.row = row;
};

// render
var startGame = function() {

  var board = document.getElementById("board");

  for (var colIndex = 1; colIndex <= 5; colIndex++) {
    for (var rowIndex = 1; rowIndex <= 4; rowIndex++) {

      // define the current tile and its row, column
      var currentTile = new Tile(colIndex, rowIndex);
      var tileClass = "tile " + rowIndex + " " + colIndex;

      // add tiles as individual dom elements
      var tileDOM = document.createElement("div");
      tileDOM.className = tileClass;
      var tileHTML = '<h>' + rowIndex + ' , ' + colIndex + '</h1>';
      tileDOM.innerHTML = tileHTML;

      // adde it to the board
      board.appendChild(tileDOM);
    }
  }
}



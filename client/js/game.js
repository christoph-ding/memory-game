// all the tiles
var tiles = {};
var images = [];

// tile constructor
var Tile = function(column, row, id) {
  // identification
  this.id = id;
  this.column = column;
  this.row = row;

  // DOM and styling
  this.HTML = '<h>' + this.row + ' , ' + this.column + '</h1>';
  this.backColor = "#0072BC";
  this.faceup = "#F50E23"; 

  // flipping
  this.revealed = false;

  // functionality
  this.flip = function() {
    var tileDOM = document.getElementById(this.id);
    var tileData = tiles[this.id];

    // flip all over the place
    if (tileData.revealed) {
      tileDOM.style.background = tileData.backColor;
    } else {
      tileDOM.style.background = tileData.faceup;
    }

    tileData.revealed = !tileData.revealed;
    
  };
};

// render
var startGame = function() {

  var idCounter = 1;
  var board = document.getElementsByClassName("board")[0];
  console.log(board);

  for (var rowIndex = 1; rowIndex <= 4; rowIndex++) {
    for (var colIndex = 1; colIndex <= 5; colIndex++) {

      // define the current tile and its row, column
      var currentTile = new Tile(colIndex, rowIndex, idCounter);
      var tileClass = "tile " + rowIndex + " " + colIndex;
      var tileID = idCounter;
      tiles[tileID] = currentTile;

      // add tiles as individual dom elements
      var tileDOM = document.createElement("div");

      tileDOM.className = tileClass;
      tileDOM.id = tileID;
      tileDOM.innerHTML = currentTile.HTML;      
      tileDOM.style.background = currentTile.backColor;
      tileDOM.onclick = currentTile.flip;

      // add it to the board
      board.appendChild(tileDOM);
      idCounter++;
    }
  }
}



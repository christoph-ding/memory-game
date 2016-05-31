// all the tiles
var tiles = [];
var images = [];

// tile constructor
var Tile = function(column, row, id) {
  // identification
  this.id = id;
  this.column = column;
  this.row = row;
  this.showing = false;
  this.HTML = '<h>' + this.row + ' , ' + this.column + '</h1>';

  // art
  this.backColor = "#F50E23";
  this.frontColor = "#0072BC";

  // functionality
  this.onclick = function() {
    var self = document.getElementById(this.id);
    console.log(self.id);
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
      tiles.push(tileClass);

      // add tiles as individual dom elements
      var tileDOM = document.createElement("div");

      tileDOM.className = tileClass;
      tileDOM.id = tileID;
      tileDOM.innerHTML = currentTile.HTML;      
      tileDOM.style.background = currentTile.frontColor;
      tileDOM.onclick = currentTile.onclick;

      // add it to the board
      board.appendChild(tileDOM);
      idCounter++;
    }
  }
}



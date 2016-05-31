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

  var tilesHTML = '';
  var tilesDOM = document.createElement("div");
  var wrapper = document.getElementById("game-wrapper");

  for (var colIndex = 1; colIndex <= 5; colIndex++) {
    for (var rowIndex = 1; rowIndex <= 4; rowIndex++) {
      var currentTile = new Tile(colIndex, rowIndex);
      console.log(currentTile);

      var 

      // tilesHTML += 
      //   '<div class ="' + i + '">\
      //   <h>' + i + '</h1>\
      //   </div>';      
    }
  }

  // wrapper.innerHTML = tilesHTML;
  // console.log(wrapper);
}



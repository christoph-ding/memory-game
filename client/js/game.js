// all the tiles
var tiles = [];
var images = [];

// tile constructor
var Tile = function(x, y) {
  this.edge = 100;
  this.horizon = x;
  this.vertical = y;
  // give the tile an image from images
};

// render
var setUpGame = function() {
  var columns = 5;
  var rows = 4;

  var tilesHTML = '';
  var tilesDOM = document.createElement("div");
  var wrapper = document.getElementById("game-wrapper");

  for (var i = 1; i <= columns * rows; i++) {
    tilesHTML += 
      '<div class ="' + i + '">\
      <h>' + i + '</h1>\
      </div>';
  }

  wrapper.innerHTML = tilesHTML;
  console.log(wrapper);
}



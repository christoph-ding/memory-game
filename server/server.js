// dependencies
var express = require('express');
var path = require('path');

// server
var server = express();
var port = process.env.PORT || 8000;
server.listen(port, function() {
  console.log("Memory game time!");
})

// serve static files
var clientAssets = __dirname + '/../client';

server.use(express.static(path.resolve(clientAssets)));

server.get('/', function(req, res) {
  console.log('sending static files...');
  res.sendFile('index.html', {root: path.join(clientAssets + '/js')});
});

// export
module.exports = server;

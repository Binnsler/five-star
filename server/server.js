var express = require('express');
var app = express();
var http = require('http');
var path = require('path');

// Serve from root directory
app.use(express.static(__dirname + '/../'));

// On any route, send index.html
app.get('*', function(req, res){
  res.sendFile(path.resolve('./index.html'));
});

// Listen on port 3000 or process.env.PORT
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, function(){
  console.log('Listening on port: ', port);
});

var uri = process.env.URI || 'https://mplayerjs.herokuapp.com'
var port = process.env.PORT || 5000;

var os = require("os");
var express = require("express");
var app = express();
var io = require('socket.io').listen(app.listen(port));

io.enable('browser client minification');
io.enable('browser client etag');
io.enable('browser client gzip');
io.set('log level', 1);

app.use(express.static(__dirname + '/public'));
/*
io.configure(function () { 
  io.set("transports", ["xhr-polling"]); 
  io.set("polling duration", 10); 
});
*/
io.sockets.on('connection', function (socket) {
  console.log('connection ' + socket.id);

  socket.on('play', function(data) {
    console.log('play ' + data);
    io.sockets.emit('play', data);
  });

  socket.on('stop', function(data) {
    console.log('stop ' + data);
    io.sockets.emit('stop', data);
  });

  socket.on('disconnect', function (data) {
    console.log('disconnect ' + socket.id);
  });
});

console.log("Listening on " + os.hostname() + ":" + port);

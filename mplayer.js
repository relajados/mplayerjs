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

app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));

function play(url) {
  io.sockets.emit('play', url);
}

function stop() {
  io.sockets.emit('stop');
}

io.sockets.on('connection', function (socket) {
  console.log('connection ' + socket.id);

  socket.on('play', function(url) {
    console.log('play ' + url);
    play(data);
  });

  socket.on('stop', function() {
    console.log('stop');
    stop();
  });

  socket.on('disconnect', function (data) {
    console.log('disconnect ' + socket.id);
  });
});

// Enable CORS
app.all('/*', function(req, res, next) {
           res.header("Access-Control-Allow-Origin", "*");
           res.header("Access-Control-Allow-Headers", "X-Requested-With");
           next();
           });

app.post('/play', function(req, res){
  console.log('/play ' + req.body.url);
  play(req.body.url);
  res.send('ok');
});

app.post('/stop', function(req, res){
  console.log('/stop');
  stop();
  res.send('ok');
});

console.log("Listening on " + os.hostname() + ":" + port);

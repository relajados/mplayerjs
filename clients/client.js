var uri = process.env.URI || 'https://mplayerjs.herokuapp.com'

var sys = require('sys')
var exec = require('child_process').exec;

var io = require('socket.io-client');
var socket = io.connect(uri);

function puts(error, stdout, stderr) {
  if(error) console.log(error);
}

socket.on('connect', function(){
  console.log("connect");
});

socket.on('play', function(url){
  console.log("play", url);
  var cmd = "./play " + "\"" + url + "\"";
  exec(cmd, puts);
});

socket.on('stop', function(data){
  console.log("stop");
  var cmd = "pkill mplayer";
  exec(cmd, puts);
});

console.log("Connecting to "+ uri);

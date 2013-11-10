var uri = process.env.URI || 'https://mplayerjs.herokuapp.com'

var sys = require('sys')
var exec = require('child_process').exec;

var io = require('socket.io-client');
var socket = io.connect(uri);

function puts(error, stdout, stderr) {
  //sys.puts(stdout) 
}

socket.on('connect', function(){
  console.log("connect");
});

socket.on('message', function(data){
  console.log("message " + data);
});

socket.on('stop', function(data){
  console.log("stop");
  var cmd = "pkill mplayer";
  exec(cmd, puts);
});

socket.on('eval', function(data){
  console.log("eval ", data);
  var url = data.split('"')[1];
  var cmd = "./play " + "\"" + url + "\"";
  exec(cmd, puts);
});

console.log("Connecting to "+ uri);

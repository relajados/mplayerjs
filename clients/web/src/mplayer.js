function Mplayer(server) {

  this.server = server;

  this.play = function(url) {
    $.post(this.server + '/play', { 'url': "'" + url + "'"}, function(response){
      console.log("/play " + url + " => " + response);
    });
  }

  this.stop = function() {
    $.post(this.server + '/stop', {}, function(response){
      console.log("/stop => " + response);
    });
  }

}

console.log("mplayer.js loaded");

function display(message) {
    console.log(message);
}

var JavaScript = {
    load: function (src, callback) {
        var script = document.createElement('script'),
            loaded;
        script.setAttribute('src', src);
        if (callback) {
            script.onreadystatechange = script.onload = function () {
                if (!loaded) {
                    callback();
                }
                loaded = true;
            };
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    }
};

var mplayerjs = function (server) {

    var socket = io.connect(server);

    socket.on('connect', function (data) {
        display('connect: ' + data);
    });

    socket.on('connecting', function (data) {
        display('connecting: ' + data);
    });

    socket.on('disconnect', function (data) {
        display('disconnect: ' + data);
    });

    socket.on('connect_failed', function (e) {
        display('connect_failed: ' + e);
    });

    socket.on('error', function (e) {
        display('error: ' + e);
    });

    socket.on('reconnect_failed', function (e) {
        display('reconnect_failed: ' + e);
        io.connect(server);
    });

    socket.on('reconnect', function (data) {
        display('reconnect: ' + data);
    });

    socket.on('reconnecting', function (data) {
        display('reconnecting: ' + data);
    });

    mplayerjs.socket = socket; 
}

var server = 'http://mplayerjs.herokuapp.com';
//JavaScript.load("/socket.io/socket.io.js", mplayerjs(server));
mplayerjs(server);


var WebSocketServer = require('ws').Server;
var websocket = require('websocket-stream');
var http = require('http');
var server = http.createServer().listen(8000);
var wss = new WebSocketServer({server: server});

wss.on('connection', function(ws) {
    var stream = websocket(ws);
    stream.pipe('hello\n');
});

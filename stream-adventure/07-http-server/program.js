
var http = require('http');
var through = require('through');
var PORT = process.argv[2];

var server = http.createServer(function (req, res) {
    var tr = through(function (buf) {
        this.queue(buf.toString().toUpperCase());
    });

    if (req.method.toUpperCase() === 'POST') {
        req.pipe(tr).pipe(res);
    }
    else res.end('done');
});

server.listen(PORT);

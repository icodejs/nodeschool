var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var params = url.parse(req.url, true);
    var date = new Date(params.query.iso);

    res.writeHead(200, { 'Content-Type': 'application/json' })

    if (params.pathname === '/api/parsetime') {
        res.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }));
    }
    else if (params.pathname = '/api/unixtime') {
        res.end(JSON.stringify({ unixtime: date.getTime() }));
    }
});

server.listen(Number(process.argv[2]));

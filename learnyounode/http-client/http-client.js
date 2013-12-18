(function () {
    var http = require('http');
    var args = process.argv;
    var url = args[2];

    http.get(url, function (response) {
        response.setEncoding('utf8');
        response.on('data', console.log);
        response.on('error', console.error);
    });
}());


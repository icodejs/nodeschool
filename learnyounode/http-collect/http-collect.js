(function () {
    var http = require('http');
    var args = process.argv;
    var url = args[2];

    http.get(url, function (res) {
        // see https://github.com/gyaresu/nodeschool/tree/master/node_modules/bl
        var result = '';

        res.setEncoding('utf8');
        res.on('data', function (data) {
            result += data;
        });

        res.on('end', function () {
            console.log(result.length);
            console.log(result);
        });
    });
}());

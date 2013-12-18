(function () {
    var http = require('http');
    var bl = require('bl');
    var args = process.argv;
    var url = args[2];

    http.get(url, function (res) {
        res.pipe(bl(function (err, data) {
            if (err) return console.error(err);
            data = data.toString();
            console.log(data.length);
            console.log(data);
        }));

    });
}());

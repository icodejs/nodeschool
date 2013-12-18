(function () {
    var http = require('http');
    var bl = require('bl');
    var args = process.argv;
    var urls = args.splice(2, 4);
    var EventEmitter = require('events').EventEmitter;
    var dataRecieved = new EventEmitter();
    var requests = [];

    urls.forEach(function (url, index) {
        http.get(url, function (res) {
            res.pipe(bl(function (err, data) {
                if (err) return console.error(err);
                requests.push({ index: index, text: data.toString() });
                if (requests.length === 3) dataRecieved.emit('complete', requests);
            }));
        });
    });

    dataRecieved.on('complete', function (items) {
        items.sort(function (a, b) {
            return a.index - b.index;
        });

        items.forEach(function (item) {
             console.log(item.text);
        });
    });
}());

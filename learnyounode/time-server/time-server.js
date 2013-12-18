
var net = require('net');
var args = process.argv;
var port = Number(args[2]); // port need to be wrapped in Number

var server = net.createServer(function (socket) {
    var date = getDate();
    socket.end(date);
});

var getDate = function () {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();

    return year + '-' +
        pad(month) + '-' +
        pad(day) + ' ' +
        pad(hours) + ':' +
        pad(minutes);
};

var pad = function (value) {
    return (value < 10 ? '0' : '') + value;
};

server.listen(port);

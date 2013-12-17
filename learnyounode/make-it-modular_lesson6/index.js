var filteredLS = require('./filteredLS');
var dir = process.argv[2];
var filter = process.argv[3];

filteredLS(dir, filter, function (err, list) {
    if (err) return console.log('sorry there has been an error');
    list.forEach(function (o) {
        console.log(o);
    });
});


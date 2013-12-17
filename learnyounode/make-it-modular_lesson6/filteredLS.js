module.exports = function (dir, filter, callback) {
    var fs = require('fs');

    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);

        var filteredList = list.filter(function (o) {
            var type = o.split('.')[1];
            return (type === filter);
        });

        callback(null, filteredList);
    });
};

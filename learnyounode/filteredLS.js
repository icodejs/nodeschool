(function () {
    var fs = require('fs');
    var dir = process.argv[2];
    var filter = process.argv[3];
  
    fs.readdir(dir, function (err, list) {
        if (err) return console.log(err);

        list.forEach(function (o) {
            var type = o.split('.')[1];
            if (type === filter) console.log(o);
        });
    });
}());

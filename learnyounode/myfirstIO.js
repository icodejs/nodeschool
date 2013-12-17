(function () {
    var args = process.argv;
    var filePath = args[2];
    var fs = require('fs');
    var buf = fs.readFileSync(filePath);
    var lines = buf.toString().split('\n');

    console.log(lines.length -1);

      // note you can avoid the .toString() by passing 'utf8' as the
      // second argument to readFileSync, then you'll get a String!
      //
      // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
}());

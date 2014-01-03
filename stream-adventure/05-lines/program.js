var split = require('split');
var through = require('through');
var lineNum = 2;

process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        var isEven = lineNum % 2 !== 0;

        isEven ? console.log(line.toUpperCase()) : console.log(line.toLowerCase());

        lineNum += 1;
    }));

/*
    Here's what the official solution is if you want to compare notes:

    var through = require('through');
    var split = require('split');

    var lineCount = 0;
    var tr = through(function (buf) {
        var line = buf.toString();
        this.queue(lineCount % 2 === 0
            ? line.toLowerCase() + '\n'
            : line.toUpperCase() + '\n'
        );
        lineCount ++;
    });
    process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
 */

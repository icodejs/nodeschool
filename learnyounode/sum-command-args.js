function () {
    var args = process.argv;
    var i = 2;
    var result = 0;

    for (; i < args.length; i++) {
	result += +args[i];
    }
    
	
    console.log(result);
    
}());

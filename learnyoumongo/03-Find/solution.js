    const mongo = require('mongodb').MongoClient
    const url = 'mongodb://localhost:27017/learnyoumongo';
    const age = parseInt(process.argv[2], 10);

    mongo.connect(url, function(err, db) {
        if (err) return db.close();

        db.collection('parrots').find({
          age: { $gt: age }
        }).toArray(function(err, documents) {
            console.log(documents);

            db.close();
        });
    });
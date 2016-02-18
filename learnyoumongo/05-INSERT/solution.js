    const mongo = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017/learnyoumongo';
    const firstName = process.argv[2];
    const lastName = process.argv[3];

    const users = { firstName: firstName, lastName: lastName };

    mongo.connect(url, (err, db) => {
        if (err) throw err;

        db.collection('docs').insert(users, (err, data) => {
            if (err) throw err;

            console.log(JSON.stringify(users));

            db.close();
        });
    });

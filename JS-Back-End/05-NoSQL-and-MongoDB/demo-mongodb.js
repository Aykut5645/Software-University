const { MongoClient } = require('mongodb');

const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr, { useUnifiedTopology: true });

client.connect(function (err) {
    if (err) {
        console.error('Connection error');
        throw err;
    }
    console.log('Database connected!');

    const db = client.db('testdb'); // = use testdb
    const collection = db.collection('cats');

    // reading data
    collection.find({}).toArray((err, data) => {
        if (err) {
            throw new Error('An error occurred upon reading a new record');
        }
        console.log(data);
    });

    // modifying data
    collection.insertOne({ name: 'Begemoth', color: 'black' }, (err, result) => {
        if (err) {
            throw new Error('An error occurred upon inserting a new record');
        }
        console.log(result);
    });
});
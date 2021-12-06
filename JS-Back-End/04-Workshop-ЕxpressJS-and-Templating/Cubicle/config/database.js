const mongoose = require('mongoose');

module.exports = async (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/cubicle');
        const db = mongoose.connection;

        db.on('error', error => {
            console.error('Database error ', error.message);
            reject(error.message);
        });
        db.on('open', () => {
            console.log('Database connected!');
            resolve();
        });
    });
};
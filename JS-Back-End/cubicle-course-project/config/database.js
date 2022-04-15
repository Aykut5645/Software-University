const { connect } = require('mongoose');

module.exports = async (app) => {
    try {
        await connect('mongodb://localhost:27017/cubicle');
        console.log('Database connected...');
    } catch (err) {
        console.error(`Database connection error => ${err.message}`);
    }
};
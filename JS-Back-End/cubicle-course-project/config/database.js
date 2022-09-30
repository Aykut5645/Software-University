const { connect } = require('mongoose');

(async () => {
    try {
        await connect('mongodb://localhost:27017/cubes');
        console.log('Database is running...');
    } catch (err) {
        console.log('Database error: ', err);
    }
})();
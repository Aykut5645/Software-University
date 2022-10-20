const { connect } = require('mongoose');

(async () => {
    try {
        // TODO: change the name of database
        await connect('mongodb://localhost:27017/{{name}}');
        console.log('Database is running...');
    } catch (err) {
        console.error('Database error: ', err.message);
    }
})();
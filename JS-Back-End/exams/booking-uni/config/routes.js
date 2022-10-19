const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/', dashboardController);
};
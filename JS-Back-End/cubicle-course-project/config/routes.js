const dashboardController = require('../controllers/dashboard');
const cubesController = require('../controllers/cubes');

module.exports = (app) => {
    app.use('/cubes', cubesController);
    app.use('/', dashboardController);
};
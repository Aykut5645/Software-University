const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const publicationController = require('../controllers/publicationController');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/publication', publicationController);
    app.use('/', homeController);
};
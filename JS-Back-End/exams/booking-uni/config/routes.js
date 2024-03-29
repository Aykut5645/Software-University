const authController = require('../controllers/authController');
const homeController = require('../controllers/homeController');
const hotelController = require('../controllers/hotelController');
const { hasUser } = require('../middlewares/guards');

module.exports = (app) => {
    app.use('/auth', authController);
    app.use('/hotel', hasUser, hotelController);
    app.use('/', homeController);
};
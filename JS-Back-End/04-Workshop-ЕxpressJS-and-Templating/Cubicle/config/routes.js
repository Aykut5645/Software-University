const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const accessoryController = require('../controllers/accessoryController');
const postComments = require('../controllers/comments');

module.exports = app => {
    app.use('/auth', authController);
    app.use('/products', productController);
    app.use('/accessory', accessoryController);
    app.post('/comments/:cubeId/create', postComments);
    app.use('/', homeController);
};
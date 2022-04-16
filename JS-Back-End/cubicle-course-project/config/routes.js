const comments = require('../controllers/comments');

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const accessoryController = require('../controllers/accessoryController');

module.exports = app => {
    app.use('/products', productController);
    app.use('/accessory', accessoryController);
    app.use('/auth', authController);
    app.use('/', homeController);

    app.post('/comments/:cubeId/create', comments.post);
};
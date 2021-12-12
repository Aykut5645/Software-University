const homeController = require('../controllers/homeController');
const productController = require('../controllers/productController');
const accessoryController = require('../controllers/accessoryController');
const postComments = require('../controllers/comments');

module.exports = app => {
    app.use('/products', productController);
    app.use('/accessory', accessoryController);
    app.post('/comments/:cubeId/create', postComments);
    app.use('/', homeController);
};
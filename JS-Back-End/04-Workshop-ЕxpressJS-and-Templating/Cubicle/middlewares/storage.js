const productService = require('../services/product');
const accessoryService = require('../services/accessory');

module.exports = () => {
    return (req, res, next) => {
        req.storage = {
            getAll: productService.getAll,
            getById: productService.getById,
            create: productService.create,
            edit: productService.edit,
            createComment: productService.createComment,
            attachStricker: productService.attachStricker,
            getAllAccessories: accessoryService.getAllAccessories,
            createAccessory: accessoryService.createAccessory
        };
        next();
    };

    // another approach 
    /*   
        const storage = Object.assign({}, productService, accessoryService);
        return (req, res, next) => {
            return res.storage = storage;
            next();
    }
    */
};
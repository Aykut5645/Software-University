const productService = require('../services/product');
const accessoryService = require('../services/accessory');

module.exports = async () => {
    return (req, res, next) => {
        req.api = {
            getAll: productService.getAll,
            getById: productService.getById,
            create: productService.create,
            edit: productService.edit,
            createComment: productService.createComment,
            attachAccessory: productService.attachAccessory,
            createAccessory: accessoryService.createAccessory,
            getAllAccessories: accessoryService.getAllAccessories
        };
        next();
    };
};

// another approach, I prefer the above option, because I can see all the api functions
/*
    const init = async () => {
        return (req, res, next) => {
            req.api = Object.assign({}, productService, accessoryService);
            next();
        };
};
*/
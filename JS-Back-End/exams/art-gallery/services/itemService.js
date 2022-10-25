const Publication = require("../models/Publication");

const getAllItems = () => {
    return Publication.find().lean();
};

const getItemById = (id) => {
    return Publication.findById(id).lean();
};

const createItem = (item) => {
    return Publication.create(item);
};

const updateItem = (item, itemId) => { };

const deleteItem = (id) => {
    return Publication.findByIdAndRemove(id);
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};
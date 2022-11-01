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

const updateItem = async (itemId, item) => {
    const publication = await Publication.findById(itemId);
    Object.assign(publication, item);
    await publication.save();
};

const deleteItem = (id) => {
    return Publication.findByIdAndRemove(id);
};

const shareItem = async (itemId, userId) => {
    const publication = await Publication.findById(itemId);
    publication.usersShared.push(userId);
    await publication.save();
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    shareItem,
};
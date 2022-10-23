const Hotel = require("../models/Hotel");

const getAll = async () => {
    return Hotel.find().lean();
};

const getById = (id) => {
    return Hotel.findById(id).lean();
};

const create = async (hotel) => {
    await Hotel.create(hotel);
};

const update = async (itemId, item) => {
    let hotel = await Hotel.findById(itemId);
    Object.assign(hotel, item);
    await hotel.save();
};

const bookItem = async () => {
    
};

const remove = (id) => { };

module.exports = {
    getAll,
    getById,
    update,
    remove,
    create
};
const Accessory = require('../models/Accessory');

const getAllAccessories = async (existing) => {
    return await Accessory.find({ _id: { $nin: existing } }).lean();
};

const createAccessory = async (accessory) => {
    return new Accessory(accessory).save();
};

module.exports = {
    getAllAccessories,
    createAccessory
};
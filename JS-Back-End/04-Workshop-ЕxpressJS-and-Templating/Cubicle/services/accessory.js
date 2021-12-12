const Accessory = require('../models/Accessory');

const getAllAccessories = async (existing) => {
    return await Accessory.find({ _id: { $nin: existing } }).lean();
};

const createAccessory = async (accessory) => {
    const record = new Accessory(accessory);
    return record.save();
};

module.exports = {
    getAllAccessories,
    createAccessory
};
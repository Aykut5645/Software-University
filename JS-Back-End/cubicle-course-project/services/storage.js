const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

const storage = () => (req, res, next) => {
    req.storage = {
        create,
        getAllCubes
    };
    next();
};

const create = async (cube) => {
    const newCube = new Cube(cube);
    await newCube.save();
};

const getAllCubes = async () => {
    const cubes = await Cube.find({}).lean();
    return cubes;
};

module.exports = {
    storage,
    create,
    getAllCubes
};
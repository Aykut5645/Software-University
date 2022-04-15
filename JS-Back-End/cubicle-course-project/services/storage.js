const { Types } = require('mongoose');

const Cube = require('../models/Cube');

const init = async () => {
    return (req, res, next) => {
        req.api = {
            getAll,
            getById,
            create,
            edit
        };
        next();
    };
};

const getAll = async (query) => {
    let options = {};

    // filter cubes by query param
    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        options.difficultyLevel = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficultyLevel = options.difficultyLevel || {};
        options.difficultyLevel.$lte = Number(query.to);
    };
    
    return await Cube.find(options).lean();
};

const getById = async (id) => {
    if (Types.ObjectId.isValid(id)) { // Error solved => const castError = new CastError();
        return await Cube.findById(id).lean();
    }
};

const create = async (cube) => {
    return new Cube(cube).save();
};

const edit = async (id, cube) => {
    let existingCube = await Cube.findById(id);
    if (!existingCube) {
        throw new ReferenceError('There is no such ID in database');
    }
    Object.assign(existingCube, cube);
    return await existingCube.save();
};

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit
};
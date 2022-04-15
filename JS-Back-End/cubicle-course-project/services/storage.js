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
    const cubes = await Cube.find({}).lean();

    // filter cubes by query param
    // if (query.search) {
    //     cubes = cubes.filter(cube => cube.name.toLowerCase().includes(query.search.toLowerCase()));
    // }
    // if (query.from) {
    //     cubes = cubes.filter(cube => cube.difficultyLevel >= Number(query.from));
    // }
    // if (query.to) {
    //     cubes = cubes.filter(cube => cube.difficultyLevel <= Number(query.from));
    // }

    return cubes;
};

const getById = async (id) => {
    if (Types.ObjectId.isValid(id)) { // Error solved => const castError = new CastError();
        let cube = await Cube.findById(id).lean();
        return cube;
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
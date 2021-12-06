const Cube = require('../models/Cube');

const init = async () => {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit
        };
        next();
    };
};

const getAll = async (query) => {
    const cubes = Cube.find({});

    // filter cubes by query params
    // if (query.search) {
    //     return cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
    // }
    // if (query.from) {
    //     return cubes.filter(c => c.difficultyLevel >= Number(query.from));
    // }
    // if (query.to) {
    //     return cubes.filter(c => c.difficultyLevel <= Number(query.to));
    // }

    return cubes;
};

const getById = async (id) => {
    const cube = await Cube.findById(id).lean();
    if (cube) {
        return cube;
    } else {
        return undefined;
    }
};

const edit = async (id, cube) => {
    const existingCube = await Cube.findById(id);
    if (!existingCube) {
        throw new ReferenceError('No such ID in Database!');
    }

    Object.assign(existingCube, cube);
    return existingCube.save();
};

const create = async (cube) => {
    const record = new Cube(cube);
    return record.save();
};

module.exports = {
    init,
    getAll,
    getById,
    create
};
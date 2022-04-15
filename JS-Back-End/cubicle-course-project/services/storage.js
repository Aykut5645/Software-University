const { Types } = require('mongoose');

const fs = require('fs').promises;
const Cube = require('../models/Cube');

let data = {};

const init = async () => {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (err) {
        console.error('Error reading database');
    }

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

const persist = async () => {
    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 4));
    } catch (err) {
        console.error('Error writing out database');
    }
};

const create = async (cube) => {
    return new Cube(cube).save();
};

const edit = async (id, cube) => {
    if (!data[id]) {
        throw new ReferenceError('There is no such ID in database');
    }

    data[id] = cube;
    await persist();
};

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit
};
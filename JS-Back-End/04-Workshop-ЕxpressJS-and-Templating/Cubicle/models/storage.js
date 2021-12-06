const uniqid = require('uniqid');
const fs = require('fs').promises;

let data = {};

const init = async () => {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (error) {
        console.error('Error reading database!');
    }

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
    let cubes = Object
        .entries(data)
        .map(([id, c]) => Object.assign({}, { id }, c));

    if (query.search) {
        return cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.from) {
        return cubes.filter(c => c.difficultyLevel >= Number(query.from));
    }
    if (query.to) {
        return cubes.filter(c => c.difficultyLevel <= Number(query.to));
    }

    return cubes;
};

const getById = async (id) => {
    const cube = data[id];
    if (cube) {
        return Object.assign({}, { id }, cube);
    } else {
        return undefined;
    }
};

const edit = async (id, cube) => {
    if (!data[id]) {
        throw new ReferenceError('No such ID in Database!');
    }

    data[id] = cube;
    await persistData();
};

const create = async (cube) => {
    data[uniqid()] = cube;
    await persistData();
};

const persistData = async () => {
    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 4));
    } catch (error) {
        console.error('Error writing out database');
    }
};

module.exports = {
    init,
    getAll,
    getById,
    create
};
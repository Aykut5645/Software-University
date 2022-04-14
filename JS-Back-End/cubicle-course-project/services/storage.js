const uniqid = require('uniqid');
const fs = require('fs').promises;

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

const getAll = (query) => {
    let cubes = Object
        .entries(data)
        .map(([id, data]) => Object.assign({}, { id }, data));

    // filter cubes by query param
    if (query.search) {
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(query.search.toLowerCase()));
    }
    if (query.from) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= Number(query.from));
    }
    if (query.to) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= Number(query.from));
    }

    return cubes;
};

const getById = (id) => {
    const cube = data[id];
    if (cube) {
        return Object.assign({}, { id }, cube);
    }
    return undefined;
};

const persist = async () => {
    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 4));
    } catch (err) {
        console.error('Error writing out database');
    }
};

const create = async (cube) => {
    data[uniqid()] = cube;
    await persist();
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
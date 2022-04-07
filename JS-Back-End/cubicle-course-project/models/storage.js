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
            create
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
    return data[id];
};

const create = async (cube) => {
    data[uniqid()] = cube;

    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 4));
    } catch (err) {
        console.error('Error writing out database');
    }
}

module.exports = {
    init,
    getAll,
    getById,
    create
};
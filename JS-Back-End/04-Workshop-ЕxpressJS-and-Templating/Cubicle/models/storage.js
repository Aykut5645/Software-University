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
            create
        };
        next();
    };
};

const getAll = async () => {
    return Object
        .entries(data)
        .map(([id, c]) => Object.assign({}, { id }, c));
};

const getById = async (id) => {
    return data[id];
};

const create = async (cube) => {
    data[uniqid()] = cube;

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
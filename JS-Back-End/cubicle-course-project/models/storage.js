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

const getAll = () => {
    return Object
        .entries(data)
        .map(([id, data]) => Object.assign({}, { id }, data));
};

const getById = (id) => {
    console.log(data[id]);
    return data[id];
};

const create = (cube) => {
    data[uniqid()] = cube;

    try {
        fs.writeFile('./models/data.json', JSON.stringify(data));
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
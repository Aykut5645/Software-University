const Cube = require('../models/Cube');
const Comment = require('../models/Comment');

const init = async () => {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit,
            createComment
        };
        next();
    };
};

const getAll = async (query) => {
    const options = {};

    // filter cubes by query params
    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        options.difficultyLevel = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficultyLevel = options.difficultyLevel || {};
        options.difficultyLevel.$lte = Number(query.to);
    }

    return Cube.find(options).lean();
};

const getById = async (id) => {
    const cube = await Cube.findById(id).populate('comments').lean();
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

const createComment = async (id, comment) => {
    const cube = await Cube.findById(id);

    if (!cube) {
        throw new ReferenceError('No such ID in Database!');
    }

    const newComment = new Comment(comment);
    await newComment.save();

    cube.comments.push(newComment);
    await cube.save();
};

module.exports = {
    init,
    getAll,
    getById,
    create,
    edit,
    createComment
};

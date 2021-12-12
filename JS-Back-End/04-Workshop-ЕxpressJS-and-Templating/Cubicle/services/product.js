const Cube = require('../models/Cube');
const Comment = require('../models/Comment');
const Accessory = require('../models/Accessory');

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
    const cube = await Cube.findById(id)
        .populate('comments')
        .populate('accessories')
        .lean();
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

const attachStricker = async (cubeId, stickerId) => {
    const cube = await Cube.findById(cubeId);
    const sticker = await Accessory.findById(stickerId);

    if (!cube || !sticker) {
        throw new ReferenceError('No such ID in Database!');
    }

    cube.accessories.push(sticker);
    return cube.save();
};

module.exports = {
    getAll,
    getById,
    create,
    edit,
    createComment,
    attachStricker
};
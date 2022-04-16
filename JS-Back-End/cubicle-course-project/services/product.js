const { Types } = require('mongoose');

const Cube = require('../models/Cube');
const Comment = require('../models/Comment');
const Accessory = require('../models/Accessory');

const getAll = async (query) => {
    let options = {};

    // filter cubes by query param
    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        options.difficultyLevel = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficultyLevel = options.difficultyLevel || {};
        options.difficultyLevel.$lte = Number(query.to);
    };

    return await Cube.find(options).lean();
};

const getById = async (id) => {
    if (Types.ObjectId.isValid(id)) { // Error solved => const castError = new CastError();
        return await Cube.findById(id)
            .populate('comments')
            .populate('accessories')
            .lean();
    }
};

const create = async (cube) => {
    return new Cube(cube).save();
};

const edit = async (id, cube) => {
    const existingCube = await Cube.findById(id);
    if (!existingCube) {
        throw new ReferenceError('There is no such ID in database');
    }
    Object.assign(existingCube, cube);
    return await existingCube.save();
};

const attachAccessory = async (cubeId, accessoryId) => {
    const [existingCube, existingAccessory] = await Promise.all([
        await Cube.findById(cubeId),
        await Accessory.findById(accessoryId)
    ]);
    if (!existingCube || !existingAccessory) {
        throw new ReferenceError('There is no such ID in database');
    }
    existingCube.accessories.push(existingAccessory);
    return existingCube.save();
};

const createComment = async (cubeId, comment) => {
    const existingCube = await Cube.findById(cubeId);
    if (!existingCube) {
        throw new ReferenceError('There is no such ID in database');
    }
    const newComment = await new Comment(comment).save();
    existingCube.comments.push(newComment);
    await new Cube(existingCube).save();
};

module.exports = {
    getAll,
    getById,
    create,
    edit,
    createComment,
    attachAccessory
};
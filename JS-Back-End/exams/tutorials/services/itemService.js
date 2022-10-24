const Course = require('../models/Course');
const User = require('../models/User');

const getAllItems = (filter) => {
    if (filter === 'isGuest') {
        return Course.find().sort({ 'usersEnrolled': -1 }).limit(3).lean();
    }
    if (filter === 'isUser') {
        return Course.find().sort({ 'createdAt': 1 }).lean();
    }
};

const getItemById = (id) => Course.findById(id).lean();

const createItem = (item) => Course.create(item);

const updateItem = async (itemId, item) => {
    let course = await Course.findById(itemId);
    course = Object.assign(course, item);
    await course.save();
};

const deleteItem = (id) => {
    return Course.findByIdAndRemove(id);
};

const enroll = async (userId, courseId) => {
    const [course, user] = await Promise.all([
        Course.findById(courseId),
        User.findById(userId),
    ]);
    course.usersEnrolled.push(user);
    await course.save();
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    enroll
};
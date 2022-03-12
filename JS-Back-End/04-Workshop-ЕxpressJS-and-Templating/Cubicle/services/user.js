const User = require('../models/User');

const createUser = async (username, hashedPassword) => {
    const user = new User({
        username,
        hashedPassword
    });
    await user.save();
    return user;
};

const getUserByUsername = async (username) => {
    return await User.findOne({ username: { $regex: username, $options: 'i' } });
};

module.exports = {
    createUser,
    getUserByUsername
};
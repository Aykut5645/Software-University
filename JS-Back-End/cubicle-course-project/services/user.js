const bcrypt = require('bcrypt');

const User = require('../models/User');

const createUser = async ({ username, password, repeatPassword }) => {
    if (username === '' || password === '' || repeatPassword === '') {
        throw new Error('All fields are required');
    } else if (password !== repeatPassword) {
        throw new Error('Passwords do not match');
    }

    const user = new User({
        username,
        password: await bcrypt.hash(password, 5)
    });
    user.save();
};

const getUserByUsername = async (username) => {
    return await User.findOne({ username: { $regex: username, $options: 'i' } });
};

module.exports = {
    createUser,
    getUserByUsername
};
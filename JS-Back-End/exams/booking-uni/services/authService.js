const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '5asdfgh5asdfg5asdfg5';

// TODO: look user data (username or email)
const register = async (username, password) => {
    const existingUser = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUser) {
        throw new Error('Username already exists!');
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
        username,
        hashedPassword
    });

    // TODO: see assignment if registration creates token
    return createToken(user);
};

// TODO: look user data (username or email)
const login = async (username, password) => {
    const existingUser = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (
        !existingUser || !await bcrypt.compare(existingUser.hashedPassword, password)
    ) {
        throw new Error('Incorrect username or password!');
    }
    return createToken(existingUser);
};

const createToken = ({ _id, username }) => {
    return jwt.sign({
        _id,
        username,
    }, JWT_SECRET);
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

module.exports = {
    register,
    login,
    verifyToken
};
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '5asdfgh5asdfg5asdfg5';

// TODO: look user data (username or email)
const register = async (username, password, address) => {
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingUsername) {
        throw new Error('Username already exists!');
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
        username,
        hashedPassword,
        address,
    });

    // TODO: see assignment if registration creates token
    return createToken(user);
};

// TODO: look user data (username or email)
const login = async (username, password) => {
    const existingUser = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (
        !existingUser || !await bcrypt.compare(password, existingUser.hashedPassword)
    ) {
        throw new Error('Incorrect username or password!');
    }
    return createToken(existingUser);
};

// add additional info according to assignment
const createToken = ({ _id, username, address }) => {
    return jwt.sign({
        _id,
        username,
        address
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
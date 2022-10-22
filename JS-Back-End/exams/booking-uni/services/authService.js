const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '5asdfgh5asdfg5asdfg5';

// TODO: look user data (username or email)
const register = async (email, username, password) => {
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existingEmail) {
        throw new Error('Email already exists!');
    }
    if (existingUsername) {
        throw new Error('Username already exists!');
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
        email,
        username,
        hashedPassword
    });

    // TODO: see assignment if registration creates token
    return createToken(user);
};

// TODO: look user data (username or email)
const login = async (email, password) => {
    const existingUser = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });

    if (
        !existingUser || !await bcrypt.compare(password, existingUser.hashedPassword)
    ) {
        throw new Error('Incorrect username or password!');
    }
    return createToken(existingUser);
};

const createToken = ({ _id, email, username }) => {
    return jwt.sign({
        _id,
        email,
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
const { hash, compare } = require('bcrypt');
const uniqid = require('uniqid');

const USERS = {};
const saltRounds = 5;

module.exports = (req, res, next) => {
    req.register = async (username, password) => {
        const id = uniqid();
        const hashedPassword = await hash(password, saltRounds);

        USERS[id] = {
            username,
            password: hashedPassword
        };
    };
    req.login = async (username, password) => {
        const user = Object.entries(USERS).find(([id, user]) => user.username === username);
        
        if (user && user[1].password && await compare(password, user[1].password)) {
            req.session.user = {
                _id: user[0],
                username,
            };
            return true;
        } else {
            return false;
        }
    };
    next();
};
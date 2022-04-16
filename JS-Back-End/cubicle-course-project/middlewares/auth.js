const userService = require('../services/user');

module.exports = () => {
    return (req, res, next) => {
        req.auth = {
            register: userService.createUser
        };
        next();
    }
};
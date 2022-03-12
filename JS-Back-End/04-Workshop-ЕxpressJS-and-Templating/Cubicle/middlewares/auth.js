const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userService = require('../services/user');
const { TOKEN_SECRET, COOKIE_NAME } = require('../config');

module.exports = () => (req, res, next) => {
    const readToken = (req, res) => {
        const token = req.cookies[COOKIE_NAME];
        if (token) {
            try {
                const userData = jwt.verify(token, TOKEN_SECRET);
                req.user = userData;
                console.log('KNOWN USER');
            } catch (error) {
                res.clearCookie(COOKIE_NAME);
                res.redirect('/auth/login');
                return false;
            }
        }
        return true;
    };

    const register = async ({
        username,
        password,
        repeatPassword
    }) => {
        if (username === '' || password === '' || repeatPassword === '') {
            throw new Error('All fields are required!');
        } else if (password !== repeatPassword) {
            throw new Error('Passwords don\'t match!');
        }

        const user = await userService.createUser(
            username,
            await bcrypt.hash(password, 10)
        );
        req.user = createToken(user);
    };

    const login = async ({ username, password }) => {
        const user = await userService.getUserByUsername(username);

        if (!user) {
            throw new Error('Wrong username or password!');
        } else {
            const isMatch = await bcrypt.compare(password, user.hashedPassword);

            if (!isMatch) {
                throw new Error('Wrong username or password!');
            } else {
                res.user = createToken(user);
            }
        }
    };

    const createToken = (user) => {
        const userViewModel = {
            _id: user._id,
            username: user.username
        };
        const token = jwt.sign(userViewModel, TOKEN_SECRET);
        res.cookie(COOKIE_NAME, token, { httpOnly: true });

        return userViewModel;
    };

    if (readToken(req, res)) {
        req.auth = {
            register,
            login
        };
    }
    next();
};


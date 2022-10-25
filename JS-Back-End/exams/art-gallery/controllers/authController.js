const { body, validationResult } = require('express-validator');
const { hasUser, isGuest } = require('../middlewares/guards');
const { register, login } = require('../services/authService');
const { parseError } = require('../util/parseError');

const router = require('express').Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register Page'
    });
});

router.post('/register',
    body('username')
        .isLength({ min: 4 }).withMessage('Username must be at least 4 characters long'),
    body('password')
        .isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
    body('address')
        .isLength({ max: 20 }).withMessage('Address must be max 20 characters long'),
    isGuest(),
    async (req, res) => {
        const { username, password, repass, address } = req.body;
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }
            if (password !== repass) {
                throw new Error('Passwords don\'t match');
            }
            const token = await register(username, password, address);
            res.cookie('token', token);
            res.redirect('/');
        } catch (error) {
            const errors = parseError(error);
            res.render('register', {
                errors,
                username,
                address
            });
        }
    });

router.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        title: 'Login Page'
    });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body.username, req.body.password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('login', {
            errors,
            username: req.body.username
        });
    }
});

router.get('/logout', hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;
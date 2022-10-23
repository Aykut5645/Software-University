const { register, login } = require('../services/authService');
const { parseError } = require('../util/parseError');
const { isGuest, hasUser } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/register', isGuest, (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

router.post('/register', isGuest, async (req, res) => {
    const { email, username, password, repass } = req.body;

    try {
        if (email === '' || username === '' || password === '' || repass === '') {
            throw new Error('All fields are required!');
        }
        if (password !== repass) {
            throw new Error('Passwords don\'t match');
        }
        const token = await register(email, username, password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('register', {
            title: 'Register',
            errors,
            body: {
                email,
                username
            }
        });
    }
});

router.get('/login', isGuest, (req, res) => {
    res.render('login', {
        title: 'Login'
    });
});
router.post('/login', isGuest, async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('login', {
            title: 'Login',
            errors,
            body: {
                username: req.body.username,
                email: req.body.email
            }
        });
    }
});

router.get('/logout', hasUser, (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

router.get('/profile', hasUser, (req, res) => {
    res.render('profile', {
        title: 'Profile'
    });
});

module.exports = router;
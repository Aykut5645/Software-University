const { isGuest, hasUser } = require('../middlewares/guards');
const { register, login } = require('../services/authService');
const { parseError } = require('../util/parseError');

const router = require('express').Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register', {
        title: 'Register'
    });
});

router.post('/register', isGuest(), async (req, res) => {
    const { username, password, repass } = req.body;
    try {
        if (username === '' || password === '' || repass === '') {
            throw new Error('All fields are required!');
        }
        if (password !== repass) {
            throw new Error('Passwords don\'t match');
        }
        const token = await register(username, password);
        res.cookie('token', token);
        res.redirect('/');
    } catch (error) {
        const errors = parseError(error);
        res.render('register', {
            title: 'Register',
            errors,
            body: {
                username
            }
        });
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login', {
        title: 'Login'
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
            title: 'Login',
            errors,
            body: {
                username: req.body.username.trim()
            }
        });
    }
});

router.get('/logout', hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = router;
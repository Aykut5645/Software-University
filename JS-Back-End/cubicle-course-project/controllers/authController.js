const router = require('express').Router();

// register
router.get('/register', (req, res) => {
    res.render('register', { title: 'Register' });
});
router.post('/register', async (req, res) => {
    try {
        await req.auth.register(req.body);
        res.redirect('/');
    } catch (err) {
        res.render('register', { title: 'Register', error: err.message });
    }
});

// login
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = router;
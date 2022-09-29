const router = require('express').Router();

router.get('/details/:cubeId', (req, res) => {
    res.render('details', { title: 'Details' });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', (req, res) => {
    res.redirect('/');
});

module.exports = router;
const router = require('express').Router();

router.get('/details/:cubeId', (req, res) => {
    res.render('details', { title: 'Details' });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});

router.post('/create', async (req, res) => {
    let cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)
    };

    try {
        await req.storage.create(cube);
        res.redirect('/');
    } catch (err) {
        res.render('create', { error: 'All fields are required!' });
        console.error(err);
    }
});

module.exports = router;
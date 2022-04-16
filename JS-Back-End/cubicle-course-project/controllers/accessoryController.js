const router = require('express').Router();

// create accessory
router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory' });
});
router.post('/create', async (req, res) => {
    let accessory = {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    };
    try {
        await req.api.createAccessory(accessory);
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
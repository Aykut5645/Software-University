const router = require('express').Router();
const { getAll } = require('../services/itemService');

router.get('/', async (req, res) => {
    const hotels = await getAll();
    res.render('home', {
        title: 'Home',
        hotels
    });
});

module.exports = router;
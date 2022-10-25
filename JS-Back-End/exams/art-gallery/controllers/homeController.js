const { getAllItems } = require('../services/itemService');

const router = require('express').Router();

router.get('/', async (req, res) => {
    let publications;
    try {
        publications = await getAllItems();
    } catch (error) {
        console.log('Get catalog => ', error.message);
    }
    res.render('home', {
        title: 'Home Page',
        publications
    });
});

router.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page'
    });
});

module.exports = router;
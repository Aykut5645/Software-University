const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard', { title: 'Cubicle' });
});
router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
router.all('*', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
});

module.exports = router;
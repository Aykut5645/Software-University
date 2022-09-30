const router = require('express').Router();

router.get('/', async (req, res) => {
    let cubes = [];
    try {
        cubes = await req.storage.getAllCubes();
        console.log(cubes);
    } catch (err) {
        console.error(err);
    }
    res.render('dashboard', { cubes: cubes });
});
router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});
router.all('*', (req, res) => {
    res.render('404', { title: 'Page Not Found' });
});

module.exports = router;
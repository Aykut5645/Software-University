const router = require('express').Router();

// get catalog
router.get('/', async (req, res) => {
    let cubes = await req.api.getAll(req.query);
    res.render('catalog', {
        title: 'Cubicle',
        search: req.query.search || '',
        from: req.query.from || '',
        to: req.query.to || '',
        cubes
    });
});

// get details of cube
router.get('/details/:id', async (req, res) => {
    const cube = await req.api.getById(req.params.id);
    if (!cube) {
        return res.redirect('/404');
    }
    res.render('details', { title: 'Details Page', ...cube });
});

// create cube
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});
router.post('/create', async (req, res) => {
    let cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)
    };
    try {
        await req.api.create(cube);
        res.redirect('/');
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.render('create', { title: 'Create Cube Page', error: 'All fields are required' });
        }
        console.error(err.message);
    }
});

// edit cube
router.get('/edit/:id', async (req, res) => {
    let cube = await req.api.getById(req.params.id);
    if (!cube) {
        return res.redirect('/404');
    }
    cube[`select${cube.difficultyLevel}`] = true;
    res.render('edit', { title: 'Edit Cube Page', ...cube });
});
router.post('/edit/:id', async (req, res) => {
    let cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)
    };

    try {
        await req.api.edit(req.params.id, cube);
        res.redirect('/');
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.render('edit', { title: 'Edit Cube Page', error: 'All fields are required', ...cube });
        }
        console.error(err.message);
        res.redirect('/404');
    }
});

// attach accessories
router.get('/attach/:id', async (req, res) => {
    const cube = await req.api.getById(req.params.id);
    const accessories = await req.api.getAllAccessories((cube.accessories || []).map(acc => acc._id));

    res.render('attachAccessory', { title: 'Attach Accessory', cube, accessories });
});
router.post('/attach/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const accessoryId = req.body.accessory;

    try {
        await req.api.attachAccessory(cubeId, accessoryId);
        res.redirect(`/products/details/${cubeId}`);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;
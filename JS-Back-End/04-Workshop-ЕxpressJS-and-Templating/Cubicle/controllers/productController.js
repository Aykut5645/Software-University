const router = require('express').Router();

router.get('/', async (req, res) => {
    const cubes = await req.storage.getAll(req.query);

    res.render(
        'index',
        {
            title: 'Catalog Cube Page',
            cubes,
            ...req.query
        }
    );
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Cube Page' });
});

router.post('/create', async (req, res) => {
    const cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)
    };

    try {
        await req.storage.create(cube);
        res.redirect('/');
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.render('create', {
                title: 'Create Cube Page',
                error: 'All fields are required!'
            });
        }
    }
});

router.get('/details/:cubeId', async (req, res) => {
    const cube = await req.storage.getById(req.params.cubeId);

    if (!cube) {
        return res.redirect('404');
    }
    res.render(
        'details',
        {
            title: 'Details Cubic Page',
            ...cube,
        }
    )
});

router.get('/edit/:cubeId', async (req, res) => {
    const cube = await req.storage.getById(req.params.cubeId);
    cube[`select${cube.difficultyLevel}`] = 'selected';

    if (!cube) {
        res.redirect('404');
    }

    res.render(
        'edit',
        {
            title: 'Edit Cubic Page',
            ...cube
        }
    );
});

router.post('/edit/:cubeId', async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: Number(req.body.difficultyLevel)
    };

    try {
        await req.storage.edit(
            req.params.cubeId,
            data
        );
        res.redirect('/');
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.render('edit', {
                title: 'Edit Cube Page',
                error: 'All fields are required!',
                _id: req.params.cubeId,
                ...data
            });
        } else if (error.name === 'ReferenceError') {
            res.render('edit', {
                title: 'Edit Cube Page',
                error: error.message,
                _id: req.params.cubeId,
                ...data
            });
        }
    }
});

router.get('/attach/:cubeId', async (req, res) => {
    const cube = await req.storage.getById(req.params.cubeId);

    const accessories = await req.storage.getAllAccessories(
        (cube.accessories || []).map(x => x._id)
    );

    res.render('attach', {
        title: 'Attach Accessory Page',
        cube,
        accessories
    });
});

router.post('/attach/:cubeId', async (req, res) => {
    const cubeId = req.params.cubeId;
    const stickerId = req.body.accessory;

    await req.storage.attachStricker(cubeId, stickerId);

    res.redirect(`/details/${cubeId}`);
});

module.exports = router;
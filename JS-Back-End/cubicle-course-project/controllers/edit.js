const edit = {
    get: async (req, res) => {
        let cube = await req.api.getById(req.params.id);
        if (!cube) {
            return res.redirect('/404');
        }
        cube[`select${cube.difficultyLevel}`] = true;
        res.render('edit', { title: 'Edit Cube Page', ...cube });
    },
    post: async (req, res) => {
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
    }
};

module.exports = edit;
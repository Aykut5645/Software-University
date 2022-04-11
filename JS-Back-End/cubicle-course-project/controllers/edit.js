const edit = {
    get: async (req, res) => {
        let cube = await req.api.getById(req.params.id);
        cube[`select${cube.difficultyLevel}`] = true;

        if (!cube) {
            return res.redirect('404');
        }
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
            res.redirect('404');
        }
    }
};

module.exports = edit;+
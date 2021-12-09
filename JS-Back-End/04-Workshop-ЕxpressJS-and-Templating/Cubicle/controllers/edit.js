module.exports = {
    getEdit: async (req, res) => {
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
    },
    postEdit: async (req, res) => {
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
    }
};

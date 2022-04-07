const create = {
    get: (req, res) => {
        res.render('create', { title: 'Create Cube Page' });
    },
    post: async (req, res) => {
        let cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: Number(req.body.difficultyLevel)
        };
        await req.api.create(cube);
        res.redirect('/');
    }
};

module.exports = create;
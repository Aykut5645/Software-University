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
        try {
            const response = await req.api.create(cube);
            console.log(response);
            res.redirect('/');
        } catch (err) {
            if (err.name === 'ValidationError') {
                return res.render('create', { title: 'Create Cube Page', error: 'All fields are required' });
            }
            console.error(err.message);
        }
    }
};

module.exports = create;
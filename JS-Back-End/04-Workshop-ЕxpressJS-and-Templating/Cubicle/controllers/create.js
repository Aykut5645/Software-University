module.exports = {
    getCreate: (req, res) => {
        res.render('create', { title: 'Create Cube Page' });
    },
    postCreate: async (req, res) => {
        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: Number(req.body.difficultyLevel)
        };
        
        try {
            await req.storage.create(cube);
        } catch (error) {
            if (error.name === 'ValidationError') {
                res.redirect('/');
            }
        }
    }
};
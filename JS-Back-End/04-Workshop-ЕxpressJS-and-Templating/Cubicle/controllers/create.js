module.exports = {
    getCreate: (req, res) => {
        res.render('create', { title: 'Create Cube Page' });
    },
    postCreate: async (req, res) => {
        await req.storage.create({
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficultyLevel: req.body.difficultyLevel
        });

        res.redirect('/');
    }
};
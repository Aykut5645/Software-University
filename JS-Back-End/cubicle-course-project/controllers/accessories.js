const accessories = {
    get: (req, res) => {
        res.render('createAccessory', { title: 'Create Accessory' });
    },
    post: async (req, res) => {
        let accessory = {
            name: req.body.name,
            imageUrl: req.body.imageUrl,
            description: req.body.description
        };

        try {
            await req.api.createAccessory(accessory);
            res.redirect('/');
        } catch (err) {
            console.error(err.message);
        }
    }
};

module.exports = accessories;
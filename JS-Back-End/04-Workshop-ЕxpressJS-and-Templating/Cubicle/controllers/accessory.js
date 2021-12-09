module.exports = {
    getAccessory: (req, res) => {
        res.render(
            'createAccessory',
            { title: 'Create Accessory Page' }
        );
    },
    postAccessory: async (req, res) => {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };

        await req.storage.createAccessory(accessory);

        res.redirect('/');
    },
};
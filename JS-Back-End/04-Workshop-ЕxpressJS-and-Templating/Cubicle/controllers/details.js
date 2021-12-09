module.exports = {
    details: async (req, res) => {
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
        );
    },
    getAttach: async (req, res) => {
        const cube = await req.storage.getById(req.params.cubeId);
        
        const accessories = await req.storage.getAllAccessories(
            (cube.accessories || []).map(x => x._id)
        );

        res.render('attach', {
            title: 'Attach Accessory Page',
            cube,
            accessories
        });
    },
    postAttach: async (req, res) => {
        const cubeId = req.params.cubeId;
        const stickerId = req.body.accessory;

        await req.storage.attachStricker(cubeId, stickerId);

        res.redirect(`/details/${cubeId}`);
    }
};
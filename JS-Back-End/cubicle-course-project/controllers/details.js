const details = {
    get: async (req, res) => {
        const cube = await req.api.getById(req.params.id);
        if (!cube) {
            return res.redirect('/404');
        }
        res.render('details', { title: 'Details Page', ...cube });
    },
    getAttach: async (req, res) => {
        const cube = await req.api.getById(req.params.id);
        const accessories = await req.api.getAllAccessories((cube.accessories || []).map(acc => acc._id));

        res.render('attachAccessory', { title: 'Attach Accessory', cube, accessories })
    },
    postAttach: async (req, res) => {
        const cubeId = req.params.cubeId;
        const accessoryId = req.body.accessory;

        try {
            await req.api.attachAccessory(cubeId, accessoryId);
        } catch (err) {
            console.error(err.message);
        }
        res.redirect(`/details/${cubeId}`);
    }
};

module.exports = details;
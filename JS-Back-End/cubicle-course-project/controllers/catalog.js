const catalog = {
    get: async (req, res) => {
        let cubes = await req.api.getAll(req.query);
        // cubes = cubes.map(cube => ({ ...cube, _id: cube._id.toString() }));
        console.log(cubes);

        res.render('catalog', {
            title: 'Cubicle',
            // search: req.query.search || '',
            // from: req.query.from || '',
            // to: req.query.to || '',
            cubes
        });
    }
};

module.exports = catalog;
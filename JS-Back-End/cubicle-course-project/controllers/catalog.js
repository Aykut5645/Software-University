const catalog = {
    get: async (req, res) => {
        let cubes = await req.api.getAll();
        
        res.render('catalog', {
            title: 'Cubicle',
            cubes
        });
    }
};

module.exports = catalog;
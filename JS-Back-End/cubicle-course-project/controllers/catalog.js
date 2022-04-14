const catalog = {
    get: async (req, res) => {
        console.log(req.api);
        const cubes = await req.api.getAll(req.query);
        
        res.render('catalog', {
            title: 'Cubicle',
            search: req.query.search || '',
            from: req.query.from || '',
            to: req.query.to || '',
            cubes
        });
    }
};

module.exports = catalog;
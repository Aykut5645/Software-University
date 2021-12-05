module.exports = {
    catalog: async (req, res) => {
        const cubes = await req.storage.getAll(req.query);

        res.render(
            'index',
            {
                title: 'Catalog Cube Page',
                cubes
            }
        );
    }
};
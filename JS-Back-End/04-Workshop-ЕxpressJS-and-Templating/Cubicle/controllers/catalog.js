module.exports = {
    catalog: async (req, res) => {
        const cubes = await req.storage.getAll();

        res.render(
            'index',
            { title: 'Catalog Cube Page', cubes }
        );
    }
};
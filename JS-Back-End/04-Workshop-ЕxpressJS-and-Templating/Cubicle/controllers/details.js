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
                ...cube
            }
        );
    }
};
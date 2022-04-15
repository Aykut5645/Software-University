const details = {
    get: async (req, res) => {
        console.log(req.params.id);
        const cube = await req.api.getById(req.params.id);
        if (!cube) {
            return res.redirect('404');
        }
        res.render('details', { title: 'Details Page', ...cube });
    }
};

module.exports = details;
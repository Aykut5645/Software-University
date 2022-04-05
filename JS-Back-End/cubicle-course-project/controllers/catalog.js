const catalog = {
    get: (req, res) => {
        res.render('catalog', { title: 'Cubicle' });
    }
};

module.exports = catalog;
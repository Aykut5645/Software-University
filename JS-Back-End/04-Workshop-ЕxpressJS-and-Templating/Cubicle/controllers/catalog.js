module.exports = {
    catalog: (req, res) => {
        console.log(req.storage);
        res.render('index', { title: 'Catalog Cube Page' });
    }
};
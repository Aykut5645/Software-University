const details = {
    get: (req, res) => {
        res.render('details', { title: 'Details Page' });
    }
};

module.exports = details;
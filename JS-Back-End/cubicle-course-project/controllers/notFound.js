const notFound = {
    get: (req, res) => {
        res.render('404', { title: 'Page Not Found' });
    }
};

module.exports = notFound;
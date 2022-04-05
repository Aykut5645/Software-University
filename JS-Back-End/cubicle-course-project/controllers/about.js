const about = {
    get: (req, res) => {
        res.render('about', { title: 'About Page' });
    }
};

module.exports = about;
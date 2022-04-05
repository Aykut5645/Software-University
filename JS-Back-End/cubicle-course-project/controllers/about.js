const { getById } = require("../models/storage");

const about = {
    get: (req, res) => {
        res.render('about', { title: 'About Page' });
        console.log(req.api);
    }
};

module.exports = about;
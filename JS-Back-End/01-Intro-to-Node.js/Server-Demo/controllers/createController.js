const formidable = require('formidable');

const { addItem } = require('../util/database');

module.exports = function (req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        addItem(fields);

        res.writeHead(301, {
            'Location': '/catalog'
        });
        res.end();
    });
}
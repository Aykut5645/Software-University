const formidable = require('formidable');

const { addItem } = require('../utils/database');
const parse = require('../utils/formParser');

module.exports = async (req, res) => {
    // const form = new formidable.IncomingForm();

    // form.parse(req, function (err, fields, files) {
    //     addItem(fields);

    //     res.writeHead(301, {
    //         'Location': '/catalog'
    //     });
    //     res.end();
    // });

    const data = await parse(req);
    console.log(data);
    addItem(data);

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}
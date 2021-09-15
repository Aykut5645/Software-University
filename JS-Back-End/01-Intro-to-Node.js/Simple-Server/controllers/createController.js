const { addItem } = require('../utils/database');
const parse = require('../utils/formParser');

module.exports = async (req, res) => {
    const data = await parse(req);
    addItem(data);

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}
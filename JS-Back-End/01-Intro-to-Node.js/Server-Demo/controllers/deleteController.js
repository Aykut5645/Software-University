const { deleteItem } = require('../util/database');

module.exports = function (req, res) {
    const id = req.url.split('=')[1];
    deleteItem(id);

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}
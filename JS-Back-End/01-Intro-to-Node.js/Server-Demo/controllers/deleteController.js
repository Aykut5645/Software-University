const { deleteItem } = require('../utils/database');

module.exports = (req, res) => {
    const id = req.url.split('=')[1];
    deleteItem(id);

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}
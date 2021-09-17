const { render } = require("../utils/template");

async function addCatHandler(req, res) {
    const addCatView = await render('addCat', 'Add Cat');

    return res.writeHead(200, {
        'Content-Length': Buffer.byteLength(addCatView),
        'Content-Type': 'text/html'
    }).end(addCatView);
}

module.exports = addCatHandler;
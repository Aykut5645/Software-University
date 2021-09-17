const { render } = require("../utils/template");

async function homeHandler(req, res) {
    const homeView = await render('home');

    return res.writeHead(200, {
        'Content-Length': Buffer.byteLength(homeView),
        'Content-Type': 'text/html'
    }).end(homeView);
}

module.exports = homeHandler;
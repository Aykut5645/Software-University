const render = require("../utils/templates");

async function homeController(req, res) {
  const currentView = await render('home');

  return res.writeHead(200, {
    'Content-Length': Buffer.byteLength(currentView),
    'Content-Type': 'text/html'
  }).end(currentView);
}

module.exports = homeController;
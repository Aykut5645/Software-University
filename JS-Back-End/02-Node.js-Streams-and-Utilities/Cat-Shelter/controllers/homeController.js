const render = require("../utils/templates");

async function homeController(req, res) {
  const homeView = await render('home', 'Cat Shelter');

  return res.writeHead(200, {
    'Content-Length': Buffer.byteLength(homeView),
    'Content-Type': 'text/html'
  }).end(homeView);
}

module.exports = homeController;
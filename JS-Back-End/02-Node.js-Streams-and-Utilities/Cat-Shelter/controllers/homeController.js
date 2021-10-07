const render = require("../utils/templates");
const { renderCats } = require("../utils/renderData");

async function homeController(req, res) {
  const currentView = await render('home', 'Cat Schelter', renderCats());
  
  return res.writeHead(200, {
    'Content-Length': Buffer.byteLength(currentView),
    'Content-Type': 'text/html'
  }).end(currentView);
}

module.exports = homeController;
const render = require("../utils/templates");

async function addBreedController(req, res) {
  const currentView = await render('addBreed');

  return res.writeHead(200, {
    'Content-Length': Buffer.byteLength(currentView),
    'Content-Type': 'text/html'
  }).end(currentView);
}

module.exports = addBreedController;
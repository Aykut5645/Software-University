const render = require("../utils/templates");

async function addCatController(req, res) {
  const currentView = await render('addCat');

  return res.writeHead(200, {
    'Content-Length': Buffer.byteLength(currentView),
    'Content-Type': 'text/html'
  }).end(currentView);
}

module.exports = addCatController;
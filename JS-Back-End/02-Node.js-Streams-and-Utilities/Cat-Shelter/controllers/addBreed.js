const { render } = require("../utils/template");

async function addBreedHandler(req, res) {
    const addBreedView = await render('addBreed', 'Add Breed');

    return res.writeHead(200, {
        'Content-Length': Buffer.byteLength(addBreedView),
        'Content-Type': 'text/html'
    }).end(addBreedView);
}

module.exports = addBreedHandler;
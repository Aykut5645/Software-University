const fs = require('fs');
const path = require('path');

const render = require("../utils/templates");

const handlers = {
  'GET': renderAddBreed,
  'POST': handleAddBreed
};

async function addBreedController(req, res) {
  return handlers[req.method](req, res);
}

async function renderAddBreed(req, res) {
  const currentView = await render('addBreed', 'Add Breed');

  return res.writeHead(200, {
    'Content-Length': Buffer.byteLength(currentView),
    'Content-Type': 'text/html'
  }).end(currentView);
}

function handleAddBreed(req, res) {
  const pathDatabase = path.resolve('utils/database/breeds.json');

  let inputData = '';

  req
    .on('data', (chunk) => {
      inputData += chunk;
    })
    .on('end', () => {
      const parsedBreed = inputData.split('=')[1];

      fs.readFile(pathDatabase, (err, data) => {
        if (err !== null) {
          throw new Error(err);
        }
        const breeds = JSON.parse(data);
        breeds.push(parsedBreed);

        fs.writeFile(pathDatabase, JSON.stringify(breeds), (err) => {
          if (err !== null) {
            throw new Error(err);
          }

          res.writeHead(302,
            { location: '/' }
          ).end();
        });
      });
    });
}

module.exports = addBreedController;
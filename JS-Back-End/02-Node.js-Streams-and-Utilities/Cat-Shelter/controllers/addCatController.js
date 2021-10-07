const uniqid = require('uniqid')
const formidable = require('formidable');

const fs = require('fs');
const path = require('path');

const render = require("../utils/templates");
const { renderBreeds } = require('../utils/renderData');
const homeController = require('./homeController');

const handlers = {
  'GET': renderAddCat,
  'POST': handleAddCat
};

async function addCatController(req, res) {
  return handlers[req.method](req, res);
}

async function renderAddCat(req, res) {
  const currentView = await render('addCat', 'Add Cat', renderBreeds);

  return res.writeHead(200, {
    'Content-Length': Buffer.byteLength(currentView),
    'Content-Type': 'text/html'
  }).end(currentView);
}

async function handleAddCat(req, res) {
  const pathDatabase = path.resolve('utils/database/cats.json');
  const form = formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      throw new Error(err);
    }

    const oldPath = files.upload.path;
    const newPath = path.resolve('content/images/' + files.upload.name);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        throw err;
      }
    });

    fs.readFile(pathDatabase, (err, data) => {
      if (err !== null) {
        throw new Error(err);
      }

      const cats = JSON.parse(data);

      cats.push(
        {
          id: uniqid(),
          ...fields,
          image: files.upload.name
        }
      );

      fs.writeFile(pathDatabase, JSON.stringify(cats, null, 2), (err) => {
        if (err !== null) {
          throw new Error(err);
        }

        res.writeHead(302, { location: '/' });
        homeController(req, res); // HACK SOLUTION BECAUSE REDIRECT DOESN'T WORK
        res.end();
      });
    });
  });
}

module.exports = addCatController;
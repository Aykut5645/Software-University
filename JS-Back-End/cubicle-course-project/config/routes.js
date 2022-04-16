const catalog = require('../controllers/catalog');
const about = require('../controllers/about');
const edit = require('../controllers/edit');
const create = require('../controllers/create');
const details = require('../controllers/details');
const comments = require('../controllers/comments');
const accessories = require('../controllers/accessories');
const notFound = require('../controllers/notFound');

module.exports = app => {
    app.get('/', catalog.get);
    app.get('/about', about.get);
    app.get('/details/:id', details.get);

    app.get('/create', create.get);
    app.post('/create', create.post);

    app.get('/edit/:id', edit.get);
    app.post('/edit/:id', edit.post);

    app.post('/comments/:cubeId/create', comments.post);

    app.get('/accessory/create', accessories.get);
    app.post('/accessory/create', accessories.post);
    app.get('/details/:id/attach', details.getAttach);
    app.post('/details/:cubeId/attach', details.postAttach);

    app.all('*', notFound.get);
};
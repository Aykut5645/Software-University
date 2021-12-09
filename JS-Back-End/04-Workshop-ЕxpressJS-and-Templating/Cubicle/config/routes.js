const { about } = require('../controllers/about');
const { catalog } = require('../controllers/catalog');
const { details } = require('../controllers/details');
const { getCreate, postCreate } = require('../controllers/create');
const { getEdit, postEdit } = require('../controllers/edit');
const postComments = require('../controllers/comments');
const { notFound } = require('../controllers/notFound');

module.exports = app => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/details/:cubeId', details);

    app.get('/create', getCreate);
    app.post('/create', postCreate);

    app.get('/edit/:cubeId', getEdit);
    app.post('/edit/:cubeId', postEdit);

    app.post('/comments/:cubeId/create', postComments);

    app.all('*', notFound);
};
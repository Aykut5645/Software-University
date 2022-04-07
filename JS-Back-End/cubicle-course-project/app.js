const express = require('express');
const { engine } = require('express-handlebars');
const PORT = 3000;

const catalog = require('./controllers/catalog');
const about = require('./controllers/about');
const create = require('./controllers/create');
const details = require('./controllers/details');
const notFound = require('./controllers/notFound');
const { init: api } = require('./models/storage');

(async () => {
    const app = express();

    app.engine('hbs', engine());
    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: false }));
    app.use(await api());

    app.get('/', catalog.get);
    app.get('/about', about.get);
    app.get('/details/:id', details.get);

    app.get('/create', create.get);
    app.post('/create', create.post);

    app.all('*', notFound.get);

    app.listen(
        PORT,
        () => console.log(`Server is listening on port https://localhost:${PORT}...`)
    );
})();
const express = require('express');
const exphbs = require('express-handlebars');

const homeHanlder = require('./handlers/homeHandler');
const aboutHandler = require('./handlers/aboutHandler');
const catalog = require('./handlers/catalogHandler');
const { init: storage } = require('./utils/storage');

start();

async function start() {
    const port = 3000;
    const app = express();

    app
        .engine('hbs', exphbs({
            extname: '.hbs'
        }))
        .set('view engine', 'hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/public', express.static('public'));
    app.use(await storage());

    app.get('/', homeHanlder);
    app.get('/about', aboutHandler);
    app.use('/catalog', catalog);

    app.listen(port, () => console.log('Server is listening on port ' + port + '...'));
}
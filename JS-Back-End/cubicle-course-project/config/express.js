const { urlencoded, static } = require('express');
const { engine } = require('express-handlebars');

const defaultTitle = require('../middlewares/defaultTitle');
const { storage } = require('../services/storage');

module.exports = (app) => {
    app.engine('hbs', engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    app.use(urlencoded({ extended: true }));
    app.use('/static', static('static'));

    app.use(defaultTitle('Cubicle'));
    app.use(storage());
};
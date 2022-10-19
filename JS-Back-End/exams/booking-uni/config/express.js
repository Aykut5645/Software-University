const { urlencoded, static } = require('express');
const { engine } = require('express-handlebars');
const cookieParser = require('cookie-parser');
const auth = require('../middlewares/auth');
const trimBody = require('../middlewares/trim');

module.exports = (app) => {
    app.engine('hbs', engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    app.use(urlencoded({ extended: true }));
    app.use('/static', static('static')); // TODO: be careful with the paths
    app.use(cookieParser());
    app.use(auth());
    app.use(trimBody());
};
const { static, urlencoded } = require('express');
const { engine } = require('express-handlebars');
const cookieParser = require('cookie-parser');

const auth = require('../middlewares/auth');

module.exports = app => {
    // configure template
    app.engine('hbs', engine());
    app.set('view engine', 'hbs');

    // middlewares
    app.use('/static', static('static'));
    app.use(urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(auth());
};
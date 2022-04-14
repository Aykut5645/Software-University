const { static, urlencoded } = require('express');
const { engine } = require('express-handlebars');

module.exports = app => {
    // configure template
    app.engine('hbs', engine());
    app.set('view engine', 'hbs');

    // middlewares
    app.use('/static', static('static'));
    app.use(urlencoded({ extended: false }));
};
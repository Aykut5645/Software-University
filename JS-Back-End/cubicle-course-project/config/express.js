const { urlencoded, static } = require('express');
const { engine } = require('express-handlebars');

module.exports = (app) => {
    //TODO: Setup the view engine
    app.engine('hbs', engine({ extname: '.hbs' }));
    app.set('view engine', 'hbs');

    //TODO: Setup the body parser
    app.use(urlencoded({ extended: true }));

    //TODO: Setup the static files
    app.use('/static', static('static'));
};
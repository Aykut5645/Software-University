const express = require('express');
const handlebars = require('express-handlebars');
const PORT = 3000;

const { init: storage } = require('./models/storage');
const { about } = require('./controllers/about');
const { catalog } = require('./controllers/catalog');
const { getCreate, postCreate } = require('./controllers/create');
const { details } = require('./controllers/details');
const { notFound } = require('./controllers/notFound');

(async () => {
	const app = express();

	app.engine('hbs', handlebars({
		extname: '.hbs'
	}));
	app.set('view engine', 'hbs');
	app.use('/static', express.static('static'));
	app.use(await storage());

	app.get('/', catalog);
	app.get('/about', about);
	app.get('/create', getCreate);
	app.post('/create', postCreate);
	app.get('/details/:id', details);

	app.all('*', notFound);

	app.listen(
		PORT,
		() => console.log(`Server is listening on port ${PORT}...`)
	);
})();
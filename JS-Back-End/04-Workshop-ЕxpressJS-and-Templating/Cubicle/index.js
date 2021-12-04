const express = require('express');
const handlebars = require('express-handlebars');
const PORT = 3000;

const app = express();

app
	.engine('hbs', handlebars({
		extname: '.hbs'
	}))
	.set('view engine', 'hbs');

app.use(express.static('static'));

app.get('/', (req, res) => {
	res.send('hello world')
});

app.listen(
	PORT,
	() => console.log(`Server is listening on port ${PORT}...`)
);
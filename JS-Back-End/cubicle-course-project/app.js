const express = require('express');
const { engine } = require('express-handlebars');
const PORT = 3000;

const app = express();

app.engine('hbs', engine());
app.set('view engine', 'hbs');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('index', { title: 'HBS' });
});

app.listen(
    PORT,
    () => console.log(`Server is listening on port https://localhost:${PORT}...`)
);
const express = require('express');
const bodyParser = require('body-parser').urlencoded;
const expressSession = require('express-session');
// const cookieParser = require('cookie-parser');

const routes = require('./controllers');
const auth = require('./auth');

const app = express();

// app.use(cookieParser());
app.use(bodyParser({ extended: false }));
app.use(expressSession({
    secret: 'my random secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(auth);

routes(app);

app.post('/register', async (req, res) => {
    await req.register(req.body.username, req.body.password);
    res.redirect('/login');
});

app.post('/login', async (req, res) => {
    const passwordsMatch = await req.login(req.body.username, req.body.password);
    if (passwordsMatch) {
        res.redirect('/');
    } else {
        res.send(403, '<h1>Wrong password</h1>');
    }
});

app.listen(
    3000,
    () => console.log(`Server is running at port 3000...`)
);
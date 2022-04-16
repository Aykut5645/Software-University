const api = require('./middlewares/api');
const PORT = 3000;

(async () => {
    const app = require('express')(); // initialize app

    require('./config/express')(app); // configure express
    await require('./config/database')(app); // configure database (mongoose)
    app.use(await api()); // set middleware API
    require('./config/routes')(app); // configure routes

    app.listen(
        PORT,
        () => console.log(`Server is listening on port https://localhost:${PORT}...`)
    );
})();
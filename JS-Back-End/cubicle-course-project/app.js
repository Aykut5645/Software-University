const { init: api } = require('./services/storage');
const PORT = 3000;

(async () => {
    const app = require('express')(); // initialize app

    require('./config/express')(app); // configure express
    app.use(await api());
    await require('./config/database')(app); // configure database (mongoose)
    require('./config/routes')(app); // configure routes

    app.listen(
        PORT,
        () => console.log(`Server is listening on port https://localhost:${PORT}...`)
    );
})();
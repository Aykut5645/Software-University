const storage = require('./middlewares/storage');
const PORT = 5000;

(async () => {
    const app = require('express')(); // initialize app

    await require('./config/database')(app); // configure database (mongoose)
    require('./config/express')(app); // configure express
    app.use(await storage()); // set middleware storage
    require('./config/routes')(app); // configure routes

    app.listen(
        PORT,
        () => console.log(`Server is listening on port https://localhost:${PORT}...`)
    );
})();
const { init: api } = require('./models/storage');
const PORT = 3000;

(async () => {
    const app = require('express')(); // initialize app
    
    require('./config/express')(app); // configure express
    app.use(await api());
    require('./config/routes')(app); // configure routes

    app.listen(
        PORT,
        () => console.log(`Server is listening on port https://localhost:${PORT}...`)
    );
})();
const express = require('express');
const PORT = 3000;

const { init: storage } = require('./services/storage');
const databaseConfig = require('./config/database');

(async () => {
    const app = express();
    app.use(await storage());

    require('./config/express')(app);
    await databaseConfig(app);
    require('./config/routes')(app);

    app.listen(
        PORT,
        () => console.log(`Server is listening on port ${PORT}...`)
    );
})();
const express = require('express');
const PORT = 3000;

const { init: storage } = require('./models/storage');

(async () => {
    const app = express();
    app.use(await storage());

    require('./config/express')(app);
    require('./config/routes')(app);

    app.listen(
        PORT,
        () => console.log(`Server is listening on port ${PORT}...`)
    );
})();
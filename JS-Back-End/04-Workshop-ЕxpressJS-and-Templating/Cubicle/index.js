const express = require('express');
const PORT = 3000;

const storage = require('./middlewares/storage');
const databaseConfig = require('./config/database');

(async () => {
    const app = express();
    
    await databaseConfig(app);
    require('./config/express')(app);

    app.use(await storage());
    require('./config/routes')(app);

    app.listen(
        PORT,
        () => console.log(`Server is listening on port http://localhost:${PORT}...`)
    );
})();
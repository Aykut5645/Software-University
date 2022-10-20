const PORT = 3000;

const app = require('express')();

require('./config/database');
require('./config/express')(app);
require('./config/routes')(app);

app.listen(
    PORT,
    console.log(`Listening on http://localhost:${PORT}...`)
);
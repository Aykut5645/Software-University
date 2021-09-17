const http = require('http');
const port = 3000;

const router = require('./router');
const homeHandler = require('./controllers/home');
const addBreedHandler = require('./controllers/addBreed');
const addCatHandler = require('./controllers/addCat');
const staticFiles = require('./controllers/staticFiles');

router.registerHandler('/', homeHandler);
router.registerHandler('/add-breed', addBreedHandler);
router.registerHandler('/add-cat', addCatHandler);

http
    .createServer(requestHandler)
    .listen(port, () => console.log(`Server is listening in port ${port}...`));

function requestHandler(req, res) {
    const currentHandler = router.match(req.url);

    currentHandler(req, res);
}
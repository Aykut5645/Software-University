const http = require('http');
const port = 3000;

const router = require('./router');
const homeHandler = require('./controllers/homeView');
const addBreedHandler = require('./controllers/addBreedView');
const addCatHandler = require('./controllers/addCatView');

router.get('/', homeHandler);
router.get('/add-breed', addBreedHandler);
router.get('/add-cat', addCatHandler);

router.post('/add-breed', addBreedHandler);
router.post('/add-cat', addCatHandler);

http
    .createServer(requestHandler)
    .listen(port, () => console.log(`Server is listening in port ${port}...`));

function requestHandler(req, res) {
    const currentHandler = router.match(req.method, req.url);

    currentHandler(req, res);
}
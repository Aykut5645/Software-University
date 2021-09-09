const http = require('http');
const port = 3000;

const router = require('./router');
const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/catalog', catalogController);
router.get('/delete', deleteController)

router.post('/create', createController);

http
    .createServer(requestHandler)
    .listen(port, uponStartedHandler);

function requestHandler(req, res) {
    const url = new URL(req.url, 'http://localhost');
    const currentHandler = router.match(req.method, url.pathname);

    if (typeof currentHandler === 'function') {
        currentHandler(req, res);
    }
}

function uponStartedHandler() {
    console.log('Server is listening on port ' + port + '...');
}
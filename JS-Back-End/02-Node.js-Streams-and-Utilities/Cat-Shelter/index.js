const http = require('http');
const PORT = 3000;

const router = require('./router');
const homeController = require('./controllers/homeController');
const addBreedController = require('./controllers/addBreedController');
const addCatController = require('./controllers/addCatController');

router.get('/', homeController);
router.get('/add-breed', addBreedController);
router.get('/add-cat', addCatController);

router.post('/add-breed', addBreedController);
router.post('/add-cat', addCatController);

http
  .createServer(requestHandler)
  .listen(PORT,
    () => console.log(`Server is listening on port ${PORT}...`)
  );

function requestHandler(req, res) {
  const currentHandler = router.match(req.method, req.url);
  currentHandler(req, res);
}
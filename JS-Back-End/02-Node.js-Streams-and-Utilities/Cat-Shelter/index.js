const http = require('http');
const PORT = 3000;

const router = require('./router');
const homeController = require('./controllers/homeController');
const addBreedController = require('./controllers/addBreedController');

router.get('/', homeController);
router.get('/add-breed', addBreedController);

http
  .createServer(requestHandler)
  .listen(PORT,
    () => console.log(`Server is listening on port ${PORT}...`)
  );

function requestHandler(req, res) {
  const currentHandler = router.match(req.method, req.url);
  currentHandler(req, res);
}
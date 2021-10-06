const http = require('http');
const PORT = 3000;

const router = require('./router');

router.get('/', (req, res) => {
  res.end('HOME PAGE');
});

http
  .createServer(requestHandler)
  .listen(PORT,
    () => console.log(`Server is listening on port ${PORT}...`)
  );

function requestHandler(req, res) {
  const currentHandler = router.match(req.url);

  currentHandler(req, res);
}
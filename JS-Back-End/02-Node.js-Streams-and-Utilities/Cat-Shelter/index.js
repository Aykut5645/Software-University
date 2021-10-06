const http = require('http');
const PORT = 3000;

http
  .createServer(requestHandler)
  .listen(PORT,
    () => console.log(`Server is listening on port ${PORT}...`)
  );

function requestHandler(req, res) {
  res.end('sdfsadfas');
}
const handlers = {};

function registerHandler(url, handler) {
  return handlers[url] = handler;
}

function match(url) {
  const handler = handlers[url];

  if (handler === undefined) {
    return defaultHandler;
  }

  return handler;
}

function defaultHandler(req, res) {
  return res.writeHead(404, {
    'Content-Length': Buffer.byteLength('Not Found'),
    'Content-Type': 'text/plain'
  }).end('Not Found');
}

module.exports = {
  match,
  get: (...params) => registerHandler(...params) 
};
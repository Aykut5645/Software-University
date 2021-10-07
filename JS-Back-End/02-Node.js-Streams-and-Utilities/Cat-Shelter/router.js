const staticFiles = require('./controllers/static');

const routes = {};

function registerHandler(method, url, handler) {
  const methods = routes[url] || {};
  methods[method] = handler;
  
  return routes[url] = methods;
}

function match(method, url) {
  if (method === 'GET' && url.startsWith('/content')) {
    return staticFiles;
  }
  const handler = routes[url][method] || defaultHandler;

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
  get: (...params) => registerHandler('GET', ...params),
  post: (...params) => registerHandler('POST', ...params),
};
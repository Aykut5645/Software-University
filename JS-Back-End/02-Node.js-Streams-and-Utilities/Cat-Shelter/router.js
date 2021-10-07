const staticFiles = require('./controllers/static');

const handlers = {};

function registerHandler(method, url, handler) {
  const methods = {};
  methods[method] = handler;
  handlers[url] = methods;
  //console.log(handlers);
}

function match(method, url) {
  if (method === 'GET' && url.startsWith('/content')) {
    return staticFiles;
  }
  
  const handler = handlers[url][method];
  
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
  get: (...params) => registerHandler('GET', ...params), 
  post: (...params) => registerHandler('POST', ...params), 
};
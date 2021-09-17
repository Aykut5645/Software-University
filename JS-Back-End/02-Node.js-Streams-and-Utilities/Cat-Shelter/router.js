const staticFiles = require('./controllers/staticFiles');

const handlers = {};

function registerHandler(method, url, handler) {
    let methods = handlers[method] || {};
    handlers[url] = methods;

    return handlers[url][method] = handler;
}

function match(method, url) {
    if (url.includes('/content')) {
        return staticFiles;
    }

    const methods = handlers[url] || {};
    const handler = methods[method];

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
    get: (...params) => registerHandler('GET', ...params),
    post: (...params) => registerHandler('POST', ...params),
    delete: (...params) => registerHandler('DELETET', ...params),
    registerHandler,
    match
};
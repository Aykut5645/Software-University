const staticFiles = require('./controllers/staticFiles');

const handlers = {};

function registerHandler(url, handler) {
    // console.log(url);
    return handlers[url] = handler;
}

function match(url) {
    if (url.includes('/content')) {
        return staticFiles;
    }

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
    registerHandler,
    match
};
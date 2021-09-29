const path = require('path');
const { getStaticFiles } = require("../utils/templates");

async function staticFiles(req, res) {
    const static = await getStaticFiles(req);
    const extname = path.extname(req.url);

    return res.writeHead(200, {
        'Content-Length': Buffer.byteLength(static),
        'Content-Type': getMimeTypes(extname)
    }).end(static);
}

function getMimeTypes(extname) {
    const types = {
        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpeg',
        '.css': 'text/css',
        '.ico': 'image/x-icon'
    }
    return types[extname];
}

module.exports = staticFiles;
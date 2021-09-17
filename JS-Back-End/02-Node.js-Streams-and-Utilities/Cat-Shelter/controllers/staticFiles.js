const fs = require('fs');
const path = require('path');

function staticFiles(req, res) {
    const fullPath = path.resolve(`content/${req.url.slice(8)}`);
    const extname = path.extname(fullPath);

    fs.readFile(fullPath, (err, data) => {
        if (err !== null) {
            return res.writeHead(404, {
                'Content-Length': Buffer.byteLength(err.message),
                'Content-Type': 'text/plain'
            }).end(err.message);
        }

        return res.writeHead(200, {
            'Content-Length': Buffer.byteLength(data),
            'Content-Type': getMimeTypes(extname)
        }).end(data);
    });
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
const path = require('path');
const { getStaticFiles } = require("../utils/template");

async function staticFiles(req, res) {
    const static = await getStaticFiles(req);
    const extname = path.extname(req.url);
    // fs.readFile(fullPath, (err, data) => {
    //     if (err !== null) {
    //         return res.writeHead(404, {
    //             'Content-Length': Buffer.byteLength(err.message),
    //             'Content-Type': 'text/plain'
    //         }).end(err.message);
    //     }

    //     return res.writeHead(200, {
    //         'Content-Length': Buffer.byteLength(data),
    //         'Content-Type': getMimeTypes(extname)
    //     }).end(data);
    // });

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
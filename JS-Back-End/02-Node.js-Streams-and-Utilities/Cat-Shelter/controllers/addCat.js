const fs = require('fs');
const path = require('path');

function addCatHandler(req, res) {
    const fullPath = path.resolve('views/addCat.html');

    fs.readFile(fullPath, (err, data) => {
        if (err !== null) {
            return res.writeHead(404, {
                'Content-Length': Buffer.byteLength(err.message),
                'Content-Type': 'text/plain'
            }).end(err.message);
        }

        return res.writeHead(200, {
            'Content-Length': Buffer.byteLength(data),
            'Content-Type': 'text/html'
        }).end(data);
    });
}

module.exports = addCatHandler;
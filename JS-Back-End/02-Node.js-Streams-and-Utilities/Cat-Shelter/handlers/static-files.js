const fs = require('fs');
const path = require('path');

const staticFiles = (req, res) => {
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    const extname = path.extname(url.pathname);

    if (url.pathname.startsWith('/content') && req.method === 'GET') {
        fs.readFile(`.${url.pathname}`, (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('404 Not Found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': getMimeTypes(extname)
            });
            res.write(data);
            res.end();
        });
    }
}

const getMimeTypes = (extname) => {
    const types = {
        '.css': 'text/css',
        '.jpg': 'img/jpg',
        '.jpeg': 'img/jpeg',
        '.png': 'img/png'
    };

    return types[extname];
}


module.exports = staticFiles;
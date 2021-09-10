const fs = require('fs');
const path = require('path');
// const cats = require('../data/cats.json');

module.exports = (req, res) => {
    const baseUrl = 'http://' + req.headers.host;
    const url = new URL(req.url, baseUrl);
    const filePath = path.normalize(path.join(__dirname, '../views/home/index.html'));

    if (url.pathname === '/' && req.method === 'GET') {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('404 Not Found');
                res.end();
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}
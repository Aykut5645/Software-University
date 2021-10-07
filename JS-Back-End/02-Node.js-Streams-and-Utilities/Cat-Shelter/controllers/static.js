const fs = require('fs');
const path = require('path');

function staticFiles(req, res) {
  const filesPath = path.resolve(`content/${req.url.slice(8)}`);
  const extname = path.extname(req.url);

  const readStream = fs.createReadStream(filesPath);

  readStream
    .on('data', (chunk) => {
      res.writeHead(200, {
        'Content-Length': Buffer.byteLength(chunk),
        'Content-Type': getMimeType(extname)
      });
      res.write(chunk);
    })
    .on('end', () => {
      res.end();
    })
    .on('error', (err) => {
      throw err.message;
    });
}

function getMimeType(extname) {
  const types = {
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.css': 'text/css',
    '.ico': 'image/x-icon'
  }

  return types[extname];
}

module.exports = staticFiles;
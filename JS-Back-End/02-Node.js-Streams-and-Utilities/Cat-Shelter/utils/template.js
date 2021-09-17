const fs = require('fs').promises;
const path = require('path');
const url = require('url');

async function loadTemplates(name) {
    const fullPathLayoutTemplate = path.resolve('views/layout/layout.html');
    const fullPathRootTemplate = path.resolve(`views/${name}.html`);

    try {
        return Promise.all([
            await fs.readFile(fullPathLayoutTemplate, 'utf8'),
            await fs.readFile(fullPathRootTemplate, 'utf8')
        ]);
    } catch (err) {
        throw new Error('Error has occured!!!');
    }
}

async function render(name, title = 'Cat Shelter') {
    const [layout, root] = await loadTemplates(name);

    return layout
        .replace('{{title}}', title)
        .replace('{{root}}', root);
}

async function getStaticFiles(req) {
    const fullPath = path.resolve(`content/${req.url.slice(8)}`);

    // const fullPath = fullPath.match(/\\content.+/g)[0];
    
    try {
        const files = await fs.readFile(fullPath, 'utf8');
        return files;
    } catch (err) {
        throw new Error('Error has occured!!!');
    }
    
    // fs.readFile(fullPath, (err, data) => {
    //     if (err !== null) {
    //         return res.writeHead(404, {
    //             'Content-Length': Buffer.byteLength(err.message),
    //             'Content-Type': 'text/plain'
    //         }).end(err.message);
    //     }
    // });
}

module.exports = {
    render,
    getStaticFiles
};
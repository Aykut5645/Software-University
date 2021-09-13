const layout = require("../views/layout");

module.exports = (req, res) => {
    res.write(layout(html));
    res.end();
}

const html = '<h1>Welcome to Home Page!<h1>';
const layout = require("../views/layout");

module.exports = function (req, res) {
    res.write(layout(html, 'About'));
    res.end();
}

const html = `
    <h1>About Us</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`;
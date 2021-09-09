const layout = require("../views/layout");
const database = require('../util/database');

module.exports = function (req, res) {
    res.write(layout(html(Object.entries(database.database)), 'Catalog'));
    res.end();
}

const html = (items) => `
    <h1>Catalog Page</h1>
    <form method="POST" action="/create">
        <label>Name <input type="text" name="name"></label>
        <label>S/N <input type="text" name="serial"></label>
        <input type="submit" value="Create Item">
    </form>
    <ul>
        ${items
        .map((
            [id, item]
        ) => `<li data-id="${id}">${item.name} -> ${item.serial} <a href="/delete?id=${id}">Delete</a></li>`)
        .join('')
    }
    </ul>
`;
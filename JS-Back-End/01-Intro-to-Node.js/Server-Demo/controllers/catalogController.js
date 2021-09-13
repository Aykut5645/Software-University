const { database } = require('../utils/database');
const { layout, render } = require('../utils/template');

module.exports = async (req, res) => {
    const catalogPage = await render('catalog', {
        items: Object.entries(database)
            .map((
                [id, item]
            ) => `<li data-id="${id}">${item.name} -> ${item.serial} <a href="/delete?id=${id}">Delete</a></li>`)
            .join('')
    });

    res.write(await layout(catalogPage, 'Catalog'));
    res.end();
}
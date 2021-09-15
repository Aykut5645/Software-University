const fs = require('fs').promises;

async function loadTemplate(name) {
    try {
        const result = await fs.readFile(`./views/${name}.html`);
        return result.toString();
    } catch (err) {
        return console.error(err);
    }
}

async function layout(body, title = 'Welcome') {
    return render('layout', { title, body });
}

async function render(name, context = {}) {
    let result = await loadTemplate(name);
    const props = Object.keys(context);

    for (const prop of props) {
        result = result.replace(new RegExp(`{{${prop}}}`, 'g'), context[prop]);
    }

    return result;
}

module.exports = {
    loadTemplate,
    layout,
    render
};
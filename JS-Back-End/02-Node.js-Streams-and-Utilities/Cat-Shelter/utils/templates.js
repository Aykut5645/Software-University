const fs = require('fs').promises;
const path = require('path');

async function loadTemplates(name) {
  const layoutPath = path.resolve('views/layouts/main.html');
  const bodyPath = path.resolve(`views/${name}.html`);

  try {
    return Promise.all([
      await fs.readFile(layoutPath, 'utf8'),
      await fs.readFile(bodyPath, 'utf8')
    ]);
  } catch (err) {
    throw new Error(err.message);
  }
}

async function render(name, title = 'Cat Schelter') {
  const [layout, body] = await loadTemplates(name);

  return layout
    .replace('{{title}}', title)
    .replace('{{{body}}}', body);
}

module.exports = render;
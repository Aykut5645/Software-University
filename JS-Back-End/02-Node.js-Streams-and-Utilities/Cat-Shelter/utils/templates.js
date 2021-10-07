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

async function render(name, title, data) {
  let [layout, body] = await loadTemplates(name);

  if (data !== undefined) {
    body = body
      .replace('{{cats}}', data)
      .replace('{{breeds}}', data);
  }

  return layout
    .replace('{{title}}', title)
    .replace('{{{body}}}', body);
}

module.exports = render;
const cats = require('./database/cats.json');
const breeds = require('./database/breeds.json');

function renderBreeds() {
  return breeds
    .map(b => `<option value="${b}">${b}</option>`)
    .join('');
}

function renderCats() {
  return cats.map(cat => {
    return `<li>
      <img src="${cat.image}"
          alt="${cat.name}">
      <h3>${cat.name}</h3>
      <p><span>Breed: </span>${cat.breed}</p>
      <p><span>Description: </span>${cat.description}</p>
      <ul class="buttons">
          <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
          <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
      </ul>
    </li>`
  }).join('');
}

module.exports = {
  renderBreeds,
  renderCats
};
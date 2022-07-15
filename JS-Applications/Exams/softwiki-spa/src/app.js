import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout } from './api/data.js';

import { catalogPage } from './pages/catalog.js';
import { detailsPage } from './pages/details.js';
import { editPage } from './pages/edit.js';
import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { myPage } from './pages/my-page.js';
import { createPage } from './pages/create.js';
import { registerPage } from './pages/register.js';
import { searchPage } from './pages/search.js';

page(decorateContext);

// get dom elements
const main = document.getElementById('main-content');
const user = document.getElementById('user');
const guest = document.getElementById('guest');
const logoutBtn = document.getElementById('logoutBtn');

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/my-page', myPage);
page('/create', createPage);
page('/search', searchPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
	ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    if (sessionStorage.getItem('userId') != null) {
        user.style.display = 'block';
        guest.style.display = 'none';
    } else {
        guest.style.display = 'block';
        user.style.display = 'none';
    }
}

logoutBtn.addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});
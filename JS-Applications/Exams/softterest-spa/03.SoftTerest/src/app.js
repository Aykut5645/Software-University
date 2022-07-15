import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout } from './api/data.js';

import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { registerPage } from './pages/register.js';
import { catalogPage } from './pages/catalog.js';
import { detailsPage } from './pages/details.js';
import { editPage } from './pages/edit.js';
import { createPage } from './pages/create.js';
// import { myPage } from './pages/my-page.js';
// import { searchPage } from './pages/search.js';1


// get dom elements
const main = document.getElementById('root');
const logoutBtn = document.getElementById('logout-action')
const createLink = document.getElementById('create-link');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

page(decorateContext);

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/create', createPage);
// page('/my-page', myPage);
// page('/search', searchPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
	ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    if (sessionStorage.getItem('userId') != null) {
        logoutBtn.style.display = '';
        createLink.style.display = '';
        registerLink.style.display = 'none';
        loginLink.style.display = 'none';
    } else {
        loginLink.style.display = '';
        registerLink.style.display = '';
        createLink.style.display = 'none';
        logoutBtn.style.display = 'none';
    }
}

logoutBtn.addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('');
});
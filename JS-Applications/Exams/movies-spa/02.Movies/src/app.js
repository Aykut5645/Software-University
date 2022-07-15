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

page(decorateContext);

// get dom elements
const html = {
    main: () => document.getElementById('container'),
    logout: () => document.getElementById('logout-action'),
    login: () => document.getElementById('login-link'),
    register: () => document.getElementById('register-link'),
    welcome: () => document.getElementById('welcome-user')
};

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/create', createPage);

setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, html.main());
	ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    if (sessionStorage.getItem('email') != null) {
        html.logout().style.display = '';
        html.welcome().style.display = '';
        html.login().style.display = 'none';
        html.register().style.display = 'none';
        html.welcome().textContent = 'Welcome, ' + sessionStorage.getItem('email');
    } else {
        html.login().style.display = '';
        html.register().style.display = '';
        html.logout().style.display = 'none';
        html.welcome().style.display = 'none';
    }
}

html.logout().addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/login');
});
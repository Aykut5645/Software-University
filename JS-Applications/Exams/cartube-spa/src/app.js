import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { logout } from './api/data.js';

import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { catalogView } from './views/catalog.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/editView.js';
import { myView } from './views/myListing.js';
import { searchView } from './views/search.js';

const html = {
    root: () => document.getElementById('site-content'),
    nav: () => document.querySelector('nav'),
    profile: () => document.getElementById('profile'),
    guest: () => document.getElementById('guest'),
    logout: () => document.getElementById('logout-btn'),
    welcome: () => document.getElementById('welcome-user')
};

page(decorateContext);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/myListing', myView);
page('/search', searchView)

setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, html.root());
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    if (sessionStorage.getItem('username') != null) {
        html.profile().style.display = 'block';
        html.guest().style.display = 'none';
        html.welcome().textContent = `Welcome ${sessionStorage.getItem('username')}`;
    } else {
        html.profile().style.display = 'none';
        html.guest().style.display = 'block';
    }
}

html.logout().addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});
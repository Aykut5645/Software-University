import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { myProfileView } from './views/myProfileView.js';

import { logout } from './api/data.js';

const html = {
    main: () => document.querySelector('main'),
    user: () => document.querySelector('.user'),
    guest: () => document.querySelector('.guest'),
    welcome: () => document.getElementById('email'),
    logout: () => document.getElementById('logout')
};

page(decorateContext);

page('/', guestUsersOnly, homeView);
page('/login', loginView);
page('/register', registerView);
page('/catalog', catalogView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/myProfile', myProfileView);

setUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, html.main());
    ctx.setUserNav = setUserNav;
    next();
}

function guestUsersOnly(ctx, next) {
    if (sessionStorage.getItem('userId') !== null) {
        return ctx.page.redirect('/catalog');
    }
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email) {
        html.user().style.display = 'block',
            html.guest().style.display = 'none';
        html.welcome().textContent = `Welcome, ${email}`;
    } else {
        html.user().style.display = 'none';
        html.guest().style.display = 'block';
    }
}

html.logout().addEventListener('click', async () => {
    await logout();
    setUserNav();
    page.redirect('/');
});
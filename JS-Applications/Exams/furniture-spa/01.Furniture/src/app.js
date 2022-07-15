import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from './api/data.js';

import { dashboardView } from './dashboard.js';
import { loginView } from './login.js';
import { registerView } from './register.js';
import { detailsView } from './details.js';
import { editView } from './edit.js';
import { createView } from './create.js';
import { myView } from './myFurniture.js';

const html = {
    container: () => document.querySelector('.container'),
    logoutBtn: () => document.getElementById('logoutBtn'),
    user: () => document.getElementById('user'),
    guest: () => document.getElementById('guest')
};

page(decorateContext);

page('/', dashboardView);
page('/dashboard', dashboardView);
page('/register', registerView);
page('/login', loginView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/create', createView);
page('/my-furniture', myView);

setUserNav();
page.start();

export function decorateContext(ctx, next) {
    ctx.render = function (content) {
        render(content, html.container());
    }
    ctx.setUserNav = setUserNav;
    next();
}

html.logoutBtn().addEventListener('click', async () => {
    await logout();

    setUserNav();
    page.redirect('/dashboard');
});

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId !== null) {
        html.user().style.display = 'inline-block';
        html.guest().style.display = 'none';
    } else {
        html.user().style.display = 'none';
        html.guest().style.display = 'inline-block';
    }
}
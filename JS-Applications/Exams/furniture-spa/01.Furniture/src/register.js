import { html } from '../node_modules/lit-html/lit-html.js';
import { register } from './api/data.js';

const registerTemplate = (onSubmit) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Register New User</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
<form @submit=${onSubmit}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="email">Email</label>
                <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="password">Password</label>
                <input class="form-control" id="password" type="password" name="password">
            </div>
            <div class="form-group">
                <label class="form-control-label" for="rePass">Repeat</label>
                <input class="form-control" id="rePass" type="password" name="rePass">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
        </div>
    </div>
</form>`;

export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        inputValidation(email, password, rePass);

        await register(email, password);
        
        ctx.setUserNav();
        ctx.page.redirect('/dashboard');
    }
}

function inputValidation(email, password, rePass) {
    if (email === '' || password === '' || rePass === '') {
        alert('All fields are required!');
        throw new Error('All fields are required!');
    }
    if (password !== rePass) {
        alert('Passwords do not match!');
        throw new Error('Passwords do not match!');
    }
}
import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/data.js";

const registerTemplate = (onSubmit) => html`
<section id="form-sign-up">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="post">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <div class="form-group">
            <label for="repeatPassword">Repeat Password</label>
            <input type="password" class="form-control" placeholder="Repeat-Password" name="repeatPassword" value="">
        </div>

        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);
        const email = formdata.get('email').trim();
        const password = formdata.get('password').trim();
        const repeatPassword = formdata.get('repeatPassword').trim();

        if (!email || !password || !repeatPassword) {
            return alert('All fields are required!');
        }
        if (email.length < 6) {
            return alert('Password should be at least 6 characters long');
        }
        if (password !== repeatPassword) {
            return alert('Passwords do not match!');
        }

        await register({ email, password });
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}
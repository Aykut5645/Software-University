import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/data.js";

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

export async function loginView(ctx) {
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username').trim();
        const password = formData.get('password').trim();

        await login(username, password);

        ctx.setUserNav();
        ctx.page.redirect('/catalog');
    }
}
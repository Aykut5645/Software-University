module.exports = app => {
    app.get('*', (req, res, next) => {
        if (req.url.includes('favicon') == false) {
            console.log(req.session);
        }
        next();
    });
    app.get('/', (req, res) => {
        let title = 'Welcome';
        console.log(req.session.user);
        if (req.session.user) {
            title = `Welcome, ${req.session.user.username}`;
        }
        // res.cookie('cookie_parser', 1);
        res.send(layout(title, '<p>Home Page</p>'));
        // console.log(req.cookies);
    });
    app.get('/register', (req, res) => {
        let title = 'Register';
        if (req.session.user) {
            title = `Register, ${req.session.user.username}`;
        }
        res.send(layout(title, `
            <form action="/register" method="POST">
                <label >Username: <input type="text" name="username"></label>
                <label >Password: <input type="password" name="password"></label>
                <label >RepeatPasword: <input type="password" name="repeatPassword"></label>
                <input type="submit" value="Register" >
            </form>
        `));
    });
    app.get('/login', (req, res) => {
        let title = 'Login';
        if (req.session.user) {
            title = `Login, ${req.session.user.username}`;
        }
        res.send(layout(title, `
            <form action="/login" method="POST">
                <label >Username: <input type="text" name="username"></label>
                <label >Password: <input type="password" name="password"></label>
                <input type="submit" value="Login" >
            </form>
        `));
    });
};

function layout(title, html) {
    return `
        <h1>${title}</h1>
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/login">Login</a>
        ${html}
    `;
}
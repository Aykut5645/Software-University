module.exports = function (html, title = 'Welcome') {
    return `
        <html>
            <head>
                <title>
                    ${title}
                </title>
            </head>
            <nav>
                <a href="/">Home</a>
                <a href="/catalog">Catalog</a>
                <a href="/about">About</a>
            </nav>
            <body>
                ${html}
            <body>
        </html>
    `;
}
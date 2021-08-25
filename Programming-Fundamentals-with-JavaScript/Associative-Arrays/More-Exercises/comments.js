// - 80/100;
function comments(input) {
    let articles = {};
    let users = [];

    for (let line of input) {
        if (line.includes('article')) {
            let article = line.split('article ')[1];
            articles[article] = [];
        } else if (line.includes('user')) {
            let user = line.split('user ')[1];
            users.push(user);
        } else {
            let [user, article] = line.split(': ')[0].split(' posts on ');
            let titleAndContent = line.split(': ')[1].replace(/, /g, ' - ');

            if (articles.hasOwnProperty(article) && users.includes(user)) {
                articles[article].push(`--- From user ${user}: ${titleAndContent}`);
            }
        }
    }

    Object.entries(articles).sort((a, b) => b[1].length - a[1].length).forEach(kvp => {
        console.log(`Comments on ${kvp[0]}`);
        kvp[1].sort((a, b) => a.substring(14).localeCompare(b.substring(14))).forEach(x => {
            console.log(x);
        });
    });
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);
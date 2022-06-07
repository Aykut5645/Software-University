function loadCommits() {
    const html = {
        usernameElement: () => document.getElementById('username'),
        repoElement: () => document.getElementById('repo'),
        commitsElement: () => document.getElementById('commits')
    };

    fetch(`https://api.github.com/repos/${html.usernameElement().value}/${html.repoElement().value}/commits`)
        .then(errorHandle)
        .then(getResponse)
        .then(renderCommits)
        .catch(catchError);

    function errorHandle(response) {
        if (response.ok === false) {
            html.commitsElement().innerHTML = `<li>Error: ${response.status} ${response.statusText}</li>`;
            //throw new Error(`${response.status} ${response.statusText}`);
        }

        return response;
    }

    function getResponse(response) {
        return response.json();
    }

    function renderCommits(commits) {
        html.commitsElement().innerHTML = commits
			.map(com => `<li>${com.commit.author.name}: ${com.commit.message}</li>`)
			.join('')
    }

    function catchError(error) {
        return alert(error);
    }
}
// with XMLHttpRequest (the old approach):
function loadRepos() {
    new XMLHttpRequest()
        .addEventListener('readystatechange', function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById('res').textContent = httpRequest.responseText;
            }
        });

    httpRequest.open('GET', `https://api.github.com/users/testnakov/repos`);
    httpRequest.send();
}

// with Fetch Api:
function loadRepos() {
    fetch('https://api.github.com/users/testnakov/repos')
        .then(getResponse)
        .then(renderReposText)
        .catch(errorHandle);
}

function getResponse(response) {
    return response.json();
}

function renderReposText(data) {
    document.getElementById('res').textContent = JSON.stringify(data);
}

function errorHandle(error) {
    console.error(error);
}

// async-await:
async function loadRepos() {
    try {
        const response = await fetch('https://api.github.com/users/testnakov/repos');
        const data = await response.json();
        
        document.getElementById('res').textContent = JSON.stringify(data);
    } catch (error) {
        console.error(error);
    }
}
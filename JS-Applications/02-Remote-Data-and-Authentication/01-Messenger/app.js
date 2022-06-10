function attachEvents() {
    let nameElement = document.querySelector('[name="author"]');
    let contentElement = document.querySelector('[name="content"]');
    let textAreaElement = document.querySelector('#messages');

    let sendButton = document.querySelector('#submit');
    let refreshButton = document.querySelector('#refresh');

    sendButton.addEventListener('click', onClickSend);
    refreshButton.addEventListener('click', onClickRefresh);

    async function onClickSend() {
        await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: nameElement.value, content: contentElement.value })
        });

        [nameElement.value, contentElement.value] = ['', ''];
    }

    async function onClickRefresh() {
        let response = await fetch('http://localhost:3030/jsonstore/messenger');
        let data = await response.json();

        textAreaElement.textContent = Object.values(data)
            .map(({ author, content }) => `${author}: ${content}`)
            .join('\n');
    }
}

attachEvents();
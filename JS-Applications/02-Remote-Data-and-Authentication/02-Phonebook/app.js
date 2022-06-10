function attachEvents() {
    let phonebookElement = document.querySelector('#phonebook');
    let buttonLoadElement = document.querySelector('#btnLoad');
    let buttonCreateElement = document.querySelector('#btnCreate');

    buttonLoadElement.addEventListener('click', onClickLoad);
    buttonCreateElement.addEventListener('click', onClickCreate);
    phonebookElement.addEventListener('click', onClickDelete);

    async function onClickLoad() {
        let data = await loadPhoneEntries();

        phonebookElement.innerHTML = Object.values(data)
            .map(({ person, phone, _id }) => `<li id="${_id}">${person}: ${phone} <button>Delete</button></li>`)
            .join('\n');
    }

    function onClickDelete(e) {
        if (e.target.innerText !== 'Delete') {
            return;
        }

        deletePhoneEntrie(e.target.parentElement.id);
        e.target.parentElement.remove();
    }

    function onClickCreate() {
        let person = document.querySelector('#person').value;
        let phone = document.querySelector('#phone').value;
        
        postPhoneEntrie({ person, phone });

        [document.querySelector('#person').value, document.querySelector('#phone').value] = ['', ''];
    }

    async function loadPhoneEntries() {
        let response = await fetch('http://localhost:3030/jsonstore/phonebook');

        return await response.json();
    }

    async function deletePhoneEntrie(id) {
        await fetch('http://localhost:3030/jsonstore/phonebook/' + id, { method: 'delete' });
    }

    async function postPhoneEntrie(data) {
        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
}

attachEvents();
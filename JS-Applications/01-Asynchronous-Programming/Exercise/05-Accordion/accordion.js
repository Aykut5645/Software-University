async function solution() {
    const main = document.querySelector('#main');
    const data = await getData();
    if (!data) { return; }

    main.innerHTML = data
        .map(templateHtml)
        .join('');

    main.addEventListener('click', moreBtnClick);
}

solution();

async function moreBtnClick(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const moreData = await getData(event.target.id);
    if (!moreData) { return; }

    const displayEl = event.target.parentElement.nextElementSibling;
    const pEl = displayEl.firstElementChild;

    if (displayEl.style.display === '') {
        pEl.textContent = moreData.content;
        displayEl.style.display = 'block';
        event.target.textContent = 'LESS';
    } else {
        event.target.textContent = 'MORE';
        displayEl.style.display = '';
    }
}

async function getData(id) {
    try {
        const response = await fetch(
            id
                ? 'http://localhost:3030/jsonstore/advanced/articles/details/' + id
                : 'http://localhost:3030/jsonstore/advanced/articles/list'
        );

        if (response.ok === false) {
            throw new Error();
        }

        return await response.json();
    } catch (error) {
        alert(error);
    }
}

function templateHtml(data) {
    return `<div class="accordion">
    <div class="head">
        <span>${data.title}</span>
        <button class="button" id=${data._id}>More</button>
    </div>
    <div class="extra">
        <p></p>
    </div>
</div>`;
}
function notify(message) {
    let divElement = document.querySelector('#notification');
    divElement.textContent = message;

    divElement.style.display = 'block';
    divElement.style.cursor = 'pointer';

    divElement.addEventListener('click', (e) => {
        e.target.style.display = 'none';
    });
}
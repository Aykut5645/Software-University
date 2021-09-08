function addItem() {
    let textElement = document.querySelector('input');
    let ulElement = document.querySelector('#items');

    let liElement = document.createElement('li');
    liElement.textContent = textElement.value;

    ulElement.appendChild(liElement);
    textElement.value = '';
}
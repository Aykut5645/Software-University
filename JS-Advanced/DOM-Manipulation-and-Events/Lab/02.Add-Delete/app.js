function addItem() {
    let textElement = document.querySelector('input');
    let ulElement = document.querySelector('#items');

    let liElement = document.createElement('li');
    let linkElement = document.createElement('a');
    
    linkElement.textContent = '[Delete]';
    linkElement.setAttribute('href', '#');

    liElement.textContent = textElement.value;
    
    ulElement.appendChild(liElement);
    liElement.appendChild(linkElement);

    linkElement.addEventListener('click', function() {
        liElement.remove();
    });

    textElement.value = '';
}


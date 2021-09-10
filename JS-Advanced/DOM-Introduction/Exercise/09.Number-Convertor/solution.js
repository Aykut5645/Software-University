function solve() {
    let selectMenuElement = document.getElementById('selectMenuTo');
    let inputElement = document.getElementById('result');
    let numberElement = document.getElementById('input');
    let buttonElement = document.getElementsByTagName('button')[0];

    let firstOptionElement = selectMenuElement.firstElementChild;
    let secondOptionElement = document.createElement('option');

    firstOptionElement.setAttribute('value', 'binary');
    secondOptionElement.setAttribute('value', 'hexadecimal');

    firstOptionElement.textContent = 'Binary';
    secondOptionElement.textContent = 'Hexadecimal';

    selectMenuElement.appendChild(secondOptionElement);

    buttonElement.addEventListener('click', () => {
        if (selectMenuElement.value === 'binary') {
            inputElement.value = decTobin(numberElement.value);
        } else if (selectMenuElement.value === 'hexadecimal') {
            inputElement.value = decToXec(numberElement.value);
        }
    });

    function decTobin(dec) {
        return (dec >>> 0).toString(2);
    }

    function decToXec(dec) {
        return (dec >>> 0).toString(16).toUpperCase();
    }
}
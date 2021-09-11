function addItem() {
    let textElement = document.querySelector('#newItemText');
    let valueElement = document.querySelector('#newItemValue');
    let selectElement = document.querySelector('#menu');

    if (!textElement.value && !valueElement.value) {
        return;
    }

    let optionElement = document.createElement('option');
    
    optionElement.setAttribute('value', valueElement.value);
    optionElement.textContent = textElement.value;

    selectElement.appendChild(optionElement);

    [textElement.value, valueElement.value] = ['', ''];
}
function deleteByEmail() {
    let tableRowElements = document.querySelectorAll('tbody tr');
    let inputElement = document.querySelector('input[type="text"]');
    let resultElement = document.querySelector('#result');

    Array.from(tableRowElements).forEach(row => {
        if (row.lastElementChild.textContent === inputElement.value) {
            row.remove();
            resultElement.textContent = 'Deleted.';
        }

        resultElement.textContent = 'Not found.';
    });
}
function sum() {
    let rowElements = document.querySelectorAll('tr td');
    let sumElement = document.querySelector('#sum');
    let sum = 0;

    Array.from(rowElements).forEach((row, i) => {
        if (i % 2 != 0) {
            sum += Number(row.textContent);
        }
    });

    sumElement.textContent = sum;
}
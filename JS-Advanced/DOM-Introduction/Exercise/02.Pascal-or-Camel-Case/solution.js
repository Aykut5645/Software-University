function solve() {
    let inputText = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    switch (currentCase) {
        case 'Pascal Case':
            result.textContent = toPascalCase(inputText);
            break;
        case 'Camel Case':
            result.textContent = toCamelCase(inputText);
            break;
        default:
            result.textContent = 'Error!';
    }

    function toPascalCase(words) {
        return words.split(' ').map(w => w[0].toLocaleUpperCase() + w.slice(1).toLocaleLowerCase()).join('');
    }

    function toCamelCase(words) {
        return words.split(' ').map((w, i) => i === 0 ? w.toLocaleLowerCase() : w[0].toLocaleUpperCase() + w.slice(1).toLocaleLowerCase()).join('');
    }
}
function search() {
    let townsLiElements = document.getElementById('towns').children;
    let inputElement = document.getElementById('searchText');
    let resultElement = document.getElementById('result');
    let counter = 0;

    if (!inputElement.value) {
        return;
    }

    Array.from(townsLiElements).forEach(town => {
        if (town.textContent.includes(inputElement.value)) {
            counter++;
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';

            resultElement.textContent = `${counter} matches found`;
        }
    });
}
function extractText() {
    let liElements = document.getElementById('items').children;
    let textAreaElement = document.getElementById('result');

    textAreaElement.value = Array
        .from(liElements)
        .map(li => li.textContent)
        .join('\n');
}
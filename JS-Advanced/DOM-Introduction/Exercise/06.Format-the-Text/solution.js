function solve() {
    let inputElement = document.getElementById('input');
    let outputElement = document.getElementById('output');
    let text = inputElement.value;

    let sentences = text.split('.');
    sentences.pop();

    while (sentences.length != 0) {
        let currentSentences = sentences.splice(0, 3).join('.') + '.';
        let currentParagraph = document.createElement('p');

        currentParagraph.textContent = currentSentences;

        outputElement.appendChild(currentParagraph);
    }
}
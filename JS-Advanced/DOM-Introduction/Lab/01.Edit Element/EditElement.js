function editElement(sentenceElement, match, replacer) {
    let text = sentenceElement.textContent;

    while (text.includes(match)) {
        text = text.replace(match, replacer);
    }

    sentenceElement.textContent = text;
}
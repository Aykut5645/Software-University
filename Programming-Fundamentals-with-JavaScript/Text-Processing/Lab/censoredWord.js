function censoredWord(text, word) {
    while(text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
}

censoredWord("A small sentence with some small", "small");



/*
function censoredWord(text, word) {
    while (newWord.length < word.length) {
        newWord += '*';
    }

    //for (let i = 0; i < word.length; i++) {
    //    newWord += '*';
    //}

    let index = text.indexOf(word);

    while (text.indexOf(word) >= 0) {
        text = text.replace(word, newWord);
        index = text.indexOf(word, index + 1);
    }

    console.log(text);
}
*/
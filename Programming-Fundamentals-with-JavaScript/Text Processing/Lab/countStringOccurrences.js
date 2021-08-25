function countStringOccurrences(text, word) {
    let searchWord = ' ' + word + ' ';
    let occurrences = 0;

    let index = text.indexOf(searchWord);

    while(index >= 0) {
        occurrences++;
        index = text.indexOf(searchWord, index + 1);
    }

    if (text.startsWith(word)) {
        occurrences++;
    } 

    if (text.endsWith(word)) {
        occurrences++;
    }

    console.log(occurrences);
}

countStringOccurrences("This is a word and it also is a sentence", "is");



/*function countStringOccurrences(text, word) {
    let textArr = text.split(' ');
    let occurrencess = 0;

    while (textArr.includes(word)) {
        let index = textArr.indexOf(word);
        textArr.splice(index, 1);
        occurrencess++;
    }

    console.log(occurrencess);
}

countStringOccurrences("This is a word and it also is a sentence", "is");
*/
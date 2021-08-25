function removeOccurrences(word, text) {
    while (text.indexOf(word) != -1) {
        text = text.replace(word, '');    
    }
    console.log(text);
}

removeOccurrences('ice', 'kicegiciceeb');
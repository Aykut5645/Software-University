function wordsOccurences(sentence) {
    let obj = {};

    for (let word of sentence) {
        let index = sentence.indexOf(word);
        obj[word] = 0;

        while (index != -1) {
            obj[word] += 1;
            index = sentence.indexOf(word, index + 1);
        }
    }
    
    Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .forEach(word => {
        console.log(`${word} -> ${obj[word]} times`);
    });
}

wordsOccurences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"]);
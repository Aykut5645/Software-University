function wordsTracker(words) {
    let needWords = words.shift().split(' ');
    let object = {};

    for (let word of needWords) {
        let index = 0;
        object[word] = 0;

        while (words.indexOf(word, index) != -1) {
            object[word]++;
            index = words.indexOf(word, index) + 1;
        }
    }

    Object.entries(object)
    .sort((a, b) => b[1] - a[1])
    .forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    });
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
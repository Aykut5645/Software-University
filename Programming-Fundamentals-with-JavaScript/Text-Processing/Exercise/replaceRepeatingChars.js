function replaceRepeatingChars(sentence) {
    let finalSentence = '';

    for (const letter of sentence) {
        if (!finalSentence.endsWith(letter)) {
            finalSentence += letter;
        }
    }

    console.log(finalSentence);
}

//replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');

function replaceRepeatingChars(sentence) {
    console.log(sentence.split('').filter(l, i, arr => l != arr[i + 1]).join(''));
}
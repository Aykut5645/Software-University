function hardWords(totalArr) {
    let text = totalArr[0];
    let wordsArr = totalArr[1];
    let currentLine = '';

    let index = text.indexOf('_');

    while (index != -1) {
        while (text[index] == '_') {
            currentLine += text[index];
            index++;
        }
        text = text.replace(currentLine, isEqualLength(wordsArr, currentLine));
        currentLine = '';
        index = text.indexOf('_');
    }
    
    function isEqualLength(arr, lineWord) {
        for (const element of arr) {
            if (element.length == lineWord.length) {
                return element;
            }
        }
    }

    console.log(text);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________,and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);

/*
function hardWords(totalArr) {
    let text = totalArr[0];
    let wordsArr = totalArr[1].sort((a, b) => b.length - a.length);

    for (const word of wordsArr) {
        let line = '_'.repeat(word.length);

        text = text.replace(line, word);
    }

    console.log(text);
}*/

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________,and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);
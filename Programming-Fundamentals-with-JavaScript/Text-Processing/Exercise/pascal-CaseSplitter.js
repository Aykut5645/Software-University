function pascalCaseSplitter(text) {
    let finalText = '';

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];

        if (i == 0) {
            finalText += letter;
            continue;
        }

        if (letter.toUpperCase() == letter) {
            finalText += ', ' + letter;
        } else {
            finalText += letter;
        }
    }

    console.log(finalText);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
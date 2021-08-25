function lettersChangeNumbers(input) {
    input = input.trim();
    let text = '';

    if (input.includes('  ')) {
        for (const char of input) {
            if (char == ' ') {
                if (!text.endsWith(' ')) {
                    text += char;
                }
            } else {
                text += char;
            }
        }
    } else {
        text = input;
    }
    

    let textAsArr = text.split(' ');
    let totalResult = 0;

    for (const str of textAsArr) {
        let firstLetter = str[0];
        let secondLetter = str[str.length - 1];
        let num = Number(str.substring(1, str.length - 1));
        
        let currentResult = 0;

        if (isUpper(firstLetter)) {
            currentResult = num / letterIsValue(firstLetter.toLowerCase());
        } else {
            currentResult = num * letterIsValue(firstLetter.toLowerCase());
        }

        if (isUpper(secondLetter)) {
            currentResult -= letterIsValue(secondLetter.toLowerCase());
        } else {
            currentResult += letterIsValue(secondLetter.toLowerCase());
        }

        totalResult += currentResult;
    }

    console.log(totalResult.toFixed(2));

    function letterIsValue(letter) {
        let counter = 0;
        for (let i = 97; i <= 122; i++) {
            let currentLetter = String.fromCharCode(i);
            counter++;

            if (currentLetter == letter) {
                return counter; 
            }
        }
    }

    function isUpper(letter) {
        if (letter.toUpperCase() == letter) {
            return true;
        } else {
            return false;
        }
    }
}

//lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
//lettersChangeNumbers('a1A');
function oddOccurrences(inputAsStr) {
    inputAsStr = inputAsStr.toLowerCase();
    let inputAsArr = inputAsStr.split(' ');
    let finalArr = [];

    for (let word of inputAsArr) {
        let index = 0;
        let times = 0;

        if (finalArr.includes(word)) {
            continue;
        }

        while (inputAsArr.indexOf(word, index) != -1) {
            times++;
            index = inputAsArr.indexOf(word, index) + 1;
        }

        if (times % 2 != 0) {
            finalArr.push(word);
        }
    }

    console.log(finalArr.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
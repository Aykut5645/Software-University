function solve(input1, input2, input3) {
    let firstWord = input1;
    let letter = input2;
    let rightWord = input3;

    let firstWordLength = firstWord.length;
    let counter = 0;
    
    for (let i = 0; i < firstWordLength; i++) {
        if (firstWord[i] == '_') {
            break;
        }

        counter++;
    }

    if (letter == rightWord[counter]) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'i', 'String');





function solve(input1, input2, input3) {
    let firstWord = input1;
    let letter = input2;
    let rightWord = input3;
 
    let firstWordResult = firstWord.replace('_', letter);
 
    if (firstWordResult == rightWord) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
 }
 
 solve('Str_ng', 'i', 'String');
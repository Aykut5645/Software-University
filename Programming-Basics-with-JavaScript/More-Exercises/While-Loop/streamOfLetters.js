function streamOfLetters(input) {

    let index = 0;
    let currentSymbol = input[index];
    index++;

    let isFoundC = false;
    let isFoundO = false;
    let isFoundN = false;
    
    while (currentSymbol != "End") {

        let firstCondition = currentSymbol.charCodeAt() >= 65 && currentSymbol.charCodeAt() <= 90;
        let secondCondition = currentSymbol.charCodeAt() >= 97 && currentSymbol.charCodeAt() <= 122;

        if (firstCondition || secondCondition) {

            if (currentSymbol == "c") {
                isFoundC = true;
            } else if (currentSymbol == "o") {
                isFoundO = true;
            } else if (currentSymbol == "n") {
                isFoundN = true;
            }
        } else {
            currentSymbol = input[index];
            index++;
            continue;
        }

        if (isFoundC == true || isFoundO == true || isFoundN == true) {
            currentSymbol = input[index];
            index++;
            continue;
        }

        currentSymbol = input[index];
        index++;

        console.log(currentSymbol)
    }

    

}

streamOfLetters([
    '%', '!',   'c',  '^',
    'B', '`',   'o',  '%',
    'o', 'o',   'M',  ')',
    '{', 'n',   '\\', 'A',
    'D', 'End'
  ]);
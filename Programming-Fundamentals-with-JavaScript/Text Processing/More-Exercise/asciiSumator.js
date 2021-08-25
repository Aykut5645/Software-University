function asciiSumator(input) {
    let [firstChar, secondChar, str] = input;
    let [firstNum, secondNum] = [firstChar.charCodeAt(), secondChar.charCodeAt()];
    let sum = 0;

    for (const char of str) {
        if (char.charCodeAt() > Math.min(firstNum, secondNum) && char.charCodeAt() < Math.max(firstNum, secondNum)) {
            sum += char.charCodeAt();
        }
    }

    console.log(sum);
}

asciiSumator(['.', '@', 'dsg12gr5653feee5']);
asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);
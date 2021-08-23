function equalSumsEvenOddPosition(input) {
    let firstNumber = input[0];
    let secondNumber = input[1];

    let output = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = String(i);

        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j < 6; j++) {
            let currentDigit = currentNumber[j];

            currentDigit = Number(currentDigit);

            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else if (j % 2 == 1) {
                oddSum += currentDigit;
            }
        }

        if (evenSum == oddSum) {
            output += currentNumber + " ";
        }
    }
    
    console.log(output);
}

equalSumsEvenOddPosition([ '100000', '100050' ]);
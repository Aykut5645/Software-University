function greatestCommonDivisor(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    while (secondNumber != 0) {
        let currentResult = firstNumber % secondNumber;
        firstNumber = secondNumber;
        secondNumber = currentResult;
    }

    console.log(firstNumber);

}

greatestCommonDivisor(["47", "17"]);
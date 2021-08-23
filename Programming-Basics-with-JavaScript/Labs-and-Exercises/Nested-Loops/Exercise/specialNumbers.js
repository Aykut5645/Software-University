function specialNumbers(input) {
    let number = Number(input[0]);

    let firstNumber = 1111;
    let secondNumber = 9999;

    let output = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let currentNumber = String(i);

        let currentDigit = 0;

        let counter = 0;

        for (let j = 0; j < currentNumber.length; j++) {
            currentDigit = Number(currentNumber[j]);
            
            if (number % currentDigit == 0) {
                counter++;
            } 
        }

        if (counter == 4) {
            output += currentNumber + " ";
            
        }
    }

    console.log(output);
}

specialNumbers([ '16' ]);
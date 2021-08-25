function triangleOfNumbers(input) {
    let num = input;
    let counter = 1;
    let currentResult = '';

    for (let i = 1; i <= num; i++) {

        while (counter <= i) {
            currentResult += i + ' ';
            counter++;
        }

        console.log(currentResult);
        currentResult = '';
        counter = 1;
    }
}

triangleOfNumbers(20);
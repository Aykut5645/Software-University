function factorial(input) {
    let number = Number(input[0]);
    let startNumber = 1;
    currentNumber = 1;
    let result = 0;

    do {
        result = startNumber * currentNumber;
        startNumber = result;
        currentNumber++;
    } while (currentNumber <= number);

   console.log(result);
}

factorial(["10"]);
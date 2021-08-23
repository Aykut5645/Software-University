function operationBetweenNumbers(arg1, arg2, arg3) {
    let number1 = Number(arg1);
    let number2 = Number(arg2);
    let operator = arg3;

    let plus = number1 + number2;
    let minus = number1 - number2;
    let product = number1 * number2;
    let quotient = number1 / number2;
    let modul = number1 % number2;

    let evenOrOdd = 0;

    if (operator == "+") {

        if (plus % 2 == 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }    
        console.log(`${number1} ${operator} ${number2} = ${plus} - ${evenOrOdd}` );

    } else if (operator == "-") {

        if (minus % 2 == 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }  
        console.log(`${number1} ${operator} ${number2} = ${minus} - ${evenOrOdd}`);

    } else if (operator == "*") {

        if (product % 2 == 0) {
            evenOrOdd = "even";
        } else {
            evenOrOdd = "odd";
        }  
        console.log(`${number1} ${operator} ${number2} = ${product} - ${evenOrOdd}`)

    } else if (operator == "/") {

        if (number2 == 0) {
            console.log(`Cannot divide ${number1} by zero`);
        } else {
            console.log(`${number1} / ${number2} = ${quotient.toFixed(2)}`)
        }

    } else if (operator == "%") {
        if (number2 == 0) {
            console.log(`Cannot divide ${number1} by zero`);
        } else {
            console.log(`${number1} % ${number2} = ${modul}`);
        }
    }
}

operationBetweenNumbers("7", "3", "*");
function solve(firstNum, secondNum, operator) {
    let operation = null;

    if (operator == 'add') {
        operation = (a, b) => a + b;
    } else if (operator == 'subtract') {
        operation = (a, b) => a - b;
    } else if (operator == 'multiply') {
        operation = (a, b) => a * b;
    } else {
        operation = (a, b) => a / b;
    }

    console.log(operation(firstNum, secondNum));
}

solve(5, 5, 'multiply');


function solve(a, b, operator) {
    let add = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    let multiply = (x, y) => x * y;
    let divide = (x, y) => x / y;

    switch (operator) {
        case 'add':
            console.log(add(a, b));        
            break;
        case 'subtract':
            console.log(subtract(a, b));        
            break;
        case 'multiply':
            console.log(multiply(a, b));
            break;
        case 'divide':
            console.log(divide(a, b));
            break;
    }
}

solve(5, 5, 'multiply');



function solve(input1, input2, input3) {
    let firstNum = input1;
    let secondNum = input2;
    let operator = input3;
    let result = 0;

    switch (operator) {
        case 'add':
            result = firstNum + secondNum;
            break;
        case 'substract':
            result = firstNum - secondNum;
            break;
        case 'multiply':
            result = firstNum * secondNum;
            break;
        case 'divide':
            result = firstNum / secondNum;
            break;
    }

    console.log(result);
}

solve(5, 5, 'multiply');

function solve(input1, input2, input3) {
    let firstNum = input1;
    let symbol = input2;
    let secondNum = input3;
    let result = 0;

    if (symbol == '+') {
        result = firstNum + secondNum;    
    } else if (symbol == '-') {
        result = firstNum - secondNum;
    } else if (symbol == '*') {
        result = firstNum * secondNum;
    } else {
        result = firstNum / secondNum;
    }

    console.log(result.toFixed(2));
}

solve(25.5,
    '-',
    3
    );
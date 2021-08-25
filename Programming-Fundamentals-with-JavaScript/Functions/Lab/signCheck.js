function solve(input1, input2, input3) {
    let firstNum = input1;
    let secondNum = input2;
    let thirdNum = input3;

    let result = firstNum / secondNum / thirdNum;

    if ((firstNum == 0 || secondNum == 0 || thirdNum == 0) || result > 0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
}

console.log(solve(-1, -2, -3));
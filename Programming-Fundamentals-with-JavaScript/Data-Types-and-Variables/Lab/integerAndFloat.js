function solve(input1, input2, input3) {
    let firstNum = input1;
    let secondNum = input2;
    let thirdNum = input3;

    let sum = firstNum + secondNum + thirdNum;
    let convertedSum = Math.trunc(sum);

    if (sum == convertedSum) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

solve(9, 100, 1);
function solve(input) {
    let num = input;
    let numAsStr = String(num);

    let sum = 0;
    let currentNum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        currentNum = numAsStr[i];
        sum += Number(currentNum);
    }

    let sumAsStr = String(sum);
    let result = sumAsStr.includes('9');

    if (result) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}   

solve(999);
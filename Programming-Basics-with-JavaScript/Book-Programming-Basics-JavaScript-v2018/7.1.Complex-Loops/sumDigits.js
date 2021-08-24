function sumDigits(input) {
    let inputData = input[0];
    let inputDataLength = inputData.length;

    let sum = 0;

    for (let i = 0; i < inputDataLength; i++) {
        let currentDigit = inputData[i];
        currentDigit = Number(currentDigit);
        sum += currentDigit;
    }

    console.log(sum);
}

function sumDigits(input) {
    let inputData = Number(input[0]);

    let sum = 0;

    while (inputData != 0) {
        let currentDigit = inputData % 10;
        sum += currentDigit;
        inputData = Math.trunc(inputData / 10);
    }

    console.log(sum);
}

sumDigits(["5634"]);
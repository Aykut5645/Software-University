function averageNumber(input) {
    let numberCount = Number(input[0]);

    let sum = 0;

    for (let i = 1; i <= numberCount; i++) {
        let currentNumber = Number(input[i]);

        sum += currentNumber;
    }

    let averageNumber = sum / numberCount;

    console.log(averageNumber.toFixed(2));
}   

averageNumber([ '4', '3', '2', '4', '2' ]);
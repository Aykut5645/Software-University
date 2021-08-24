function halfSumElement(input) {
    let numbersCount = Number(input[0]);
    let sum = 0;
    let maxNumber = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = Number(input[i]);
        sum += currentNumber;
    }

    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }
    }

    if ((sum - maxNumber) == maxNumber) {
        console.log("Yes");
        console.log(`Sum = ${maxNumber}`);
    } else {
        let difference = Math.abs(maxNumber -(sum - maxNumber));
        console.log("No");
        console.log(`Diff = ${difference}`);
    }
}

halfSumElement(["3",
                "5",
                "5",
                "1"
                ]);
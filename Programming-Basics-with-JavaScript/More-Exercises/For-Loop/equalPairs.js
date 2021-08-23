function equalPairs(input) {
    let index = 0;
    let couplesCount = Number(input[index]);
    index++;

    let firstResult = 0;
    let secondResult = 0;

    let isDifference = false;
    let difference = 0;

    for (let i = 1; i <= couplesCount; i++) {
        let firstNumber = Number(input[index]);
        index++;
        let secondNumber = Number(input[index]);
        index++;

        if (i % 2 == 1) {
            firstResult = firstNumber + secondNumber;
        } else {
            secondResult = firstNumber + secondNumber;
        }

        if (i % 2 == 1) {
            continue;
        }

        if (firstResult != secondResult) {
            isDifference = true;
        }
    }

        difference = Math.abs(firstResult - secondResult);

    if (isDifference) {
        console.log(`No, maxdiff=${difference}`);
    } else {
        console.log(`Yes, value=${firstResult}`);
    }
}

equalPairs(["4",
            "1",
            "1",
            "3",
            "1",
            "2",
            "2",
            "0",
            "0"
    
            ]);
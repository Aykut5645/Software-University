function sumOfTwoNumbers(input) {
    let origin = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);

    let count = 0;

    let isFoundMagic = false;

    let firstNumber = 0;
    let secondNumber = 0;

    for (let i = origin; i <= end; i++) {
        firstNumber = i;

        for (let j = origin; j <= end; j++) {
            secondNumber = j;
            count++;

            if (i + j == magic ) {
                isFoundMagic = true;
                break;
            }
        }

        if (isFoundMagic) {
            break;
        }
    }

    if (isFoundMagic) {
        console.log(`Combination N:${count} (${firstNumber} + ${secondNumber} = ${magic})`);
    } else {
        console.log(`${count} combinations - neither equals ${magic}`);
    }
}

sumOfTwoNumbers([ '23', '24', '20' ]);
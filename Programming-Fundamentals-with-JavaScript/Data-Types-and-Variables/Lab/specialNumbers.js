function solve(input) {
    let num = input;
    let isTrue = false;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        let currentDigit = i.toString();

        if (currentDigit == 5 || currentDigit == 7) {
            isTrue = true;
        }

        if (currentDigit > 9) {
            let currentDigitLength = currentDigit.length;

            for (let j = 0; j < currentDigitLength; j++) {
                let currentNum = Number(currentDigit[j]);
                sum += currentNum;
            }

            if (sum == 5 || sum == 7 || sum == 11) {
                isTrue = true;
            }
        }

        if (isTrue) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }

        isTrue = false;
        sum = 0;
    }
}

solve(15);
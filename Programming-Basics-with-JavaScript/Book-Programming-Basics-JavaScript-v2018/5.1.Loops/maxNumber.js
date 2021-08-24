function maxNumber(input) {
    let n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber > max) {
            max = currentNumber;
        }
    }

    console.log(max);

}

maxNumber(["2", "100", "99"]);
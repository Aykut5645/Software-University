function minNumber(input) {
    let n = Number(input[0]);
    let min = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < min) {
            min = currentNumber;
        }
    }

    console.log(min);
}

minNumber(["4",
    "45",
    "-20",
    "7",
    "99"
    ]);
function sumNumbers(input) {
    n = Number(input[0]);
    sum = 0;

    for(let i = 1; i <= n; i++) {
        sum += Number(input[i]);
    }

    console.log(sum);
}

sumNumbers(["3",
    "-10",
    "-20",
    "-30"
    ]);
    
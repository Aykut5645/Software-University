function sumOfSeries(arg) {
    let num = Number(arg);

    let result = 0;

    for (let i = 1; i <= num; i++) {
        result += i * i;

        if (i == num) {
            console.log(result);
        }
    }
}

sumOfSeries(7);
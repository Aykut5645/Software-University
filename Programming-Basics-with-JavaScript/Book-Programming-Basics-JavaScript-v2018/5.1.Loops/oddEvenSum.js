function oddEvenSum(input) {
    let n = Number(input[0]);
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);

        if (i % 2 == 1) {
            oddSum += currentNumber;
        } else {
            evenSum += currentNumber;
        }
    }

    let difference = Math.abs(evenSum - oddSum);

    if (evenSum == oddSum) {
        console.log("Yes");
        console.log("Sum = " + oddSum);
    } else {
        console.log("No");
        console.log("Diff = " + difference);
    }
}

oddEvenSum(["4", "10", "50", "60", "20"]);
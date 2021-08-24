function oddOrEvenPosition(input) {
    let countNumber = Number(input[0]);

    let evenSum = 0;
    let oddSum = 0;

    let evenMax = Number.NEGATIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenMin = Number.POSITIVE_INFINITY;
    let oddMin = Number.POSITIVE_INFINITY;

    for (let i = 1; i <= countNumber; i += 2) {
        let currentNumber = Number(input[i]);

        oddSum += currentNumber;

        if (currentNumber > oddMax) {
            oddMax = currentNumber;
        } 
        
        if (currentNumber < oddMin) {
            oddMin = currentNumber;
        }
    }


    for (let i = 2; i <= countNumber; i += 2) {
          let currentNumber = Number(input[i]);
          evenSum += currentNumber;

        if (currentNumber > evenMax) {
            evenMax = currentNumber;
        } 
        
        if (currentNumber < evenMin) {
            evenMin = currentNumber;
        }
    }

    if (evenSum == 0) {
        evenMax = "No";
        evenMin = "No";
    }

    if (oddSum == 0) {
        oddMax = "No";
        oddMin = "No";
    }

    console.log(`OddSum=${oddSum},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum}`);
    console.log(`EvenMin=${evenMin}`);
    console.log(`EvenMax=${evenMax}`);
}

oddOrEvenPosition([
 1, -5
]);
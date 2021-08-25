function oddAndEvenSum(num) {
    let numAsStr = num.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let currentNum = Number(numAsStr[i]);
        
        if (currentNum % 2 == 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
function solve(input) {
    let arr = input;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        
        if (currentNum % 2 == 0 ) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    let result = evenSum - oddSum;

    console.log(result);
}

solve([3,5,7,9]);
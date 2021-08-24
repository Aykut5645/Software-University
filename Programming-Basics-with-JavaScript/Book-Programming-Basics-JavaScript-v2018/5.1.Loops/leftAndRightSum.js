function leftAndRightSum(input) {
    let n = Number(input[0]);

    let rightSum = 0;
    let leftSum = 0;

    for (let i = 1; i <= n; i++) {  
        rightSum += Number(input[i]);
    }

    for (let i = n + 1; i <= n * 2; i++) {
        leftSum += Number(input[i]);
    }

    let difference = Math.abs(rightSum - leftSum);

    if (rightSum == leftSum) {
        console.log(`Yes, sum = ${rightSum}`);
    } else {
        console.log(`No, diff = ${difference}`);
    }
}

leftAndRightSum([2,
    90,
    9,
    50,
    50
    ]);
function solve(input) {
    let isEqual = false;

    for (let index = 0; index < input.length; index++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < index; i++) {
            leftSum += input[i];
        }

        for (let i = index + 1; i < input.length; i++) {
            rightSum += input[i];
        }

        if (leftSum == rightSum) {
            isEqual = true;
            console.log(index);
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}

//solve([1, 2, 3, 3]);
//solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
//solve([1]);
solve([1, 2]);
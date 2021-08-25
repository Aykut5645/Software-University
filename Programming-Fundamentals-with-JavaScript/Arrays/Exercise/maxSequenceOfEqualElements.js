function solve(input) {
    let arr = input;
    let secondArr = [];
    let equals = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let rightElement = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {   
            if (arr[i] != arr[j]) {
                break;
            } else {
                equals++;
            }
        }

        if (equals >= max) {
            max = equals;
            rightElement = arr[i];
        }

        equals = 0;
    }

    while (max >= 0) {
        secondArr.push(rightElement);
        max--;
    }

    console.log(secondArr.join(' '));
}

//solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);

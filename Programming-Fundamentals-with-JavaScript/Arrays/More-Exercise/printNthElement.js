function solve(arr) {
    let lastElement = arr[arr.length - 1];
    let result = '';

    for (let i = 0; i < arr.length - 1; i++) {
        if (i == 0) {
            result = arr[0] + ' ';
        } else if (i % lastElement == 0) {
            result += arr[i] + ' ';
        }
    }

    console.log(result);
}

solve(['1', '2', '3', '4', '5', '6']);
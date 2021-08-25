function solve(input) {
    let arr = input;
    let currentResult = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);

        if (arr[i] % 2 == 0) {
            currentResult += arr[i];
        }
    }

    console.log(currentResult);
}

solve(['2','4','6','8','10']);
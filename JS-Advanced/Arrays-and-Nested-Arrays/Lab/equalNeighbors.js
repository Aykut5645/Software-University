function foo(matrix) {
    let equalCount = 0;

    for (let row = 0; row < matrix.length; row++) {
        matrix[row].forEach((el, i, arr) => { if (el == arr[i + 1]) { equalCount++ } return equalCount });

        if (matrix[row + 1] == undefined) {
            break;
        }
        for (let i = 0; i < matrix[row].length; i++) {
            if (matrix[row][i] == matrix[row + 1][i]) {
                equalCount++;
            }
        }
    }

    return equalCount;
}

console.log(
    foo(
        [
            ['2', '3', '4', '7', '0'],
            ['4', '0', '5', '3', '4'],
            ['2', '3', '5', '4', '2'],
            ['9', '8', '7', '5', '4']
        ]
    )
);
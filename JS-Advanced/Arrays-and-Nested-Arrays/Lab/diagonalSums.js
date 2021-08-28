function foo(matrix) {
    function mainDiagonal(matrix) {
        let mainSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            mainSum += matrix[i][i];
        }
        return mainSum;
    }

    function secondaryDiagonal(matrix) {
        let secondarySum = 0;
        for (let i = 0; i < matrix.length; i++) {
            secondarySum += matrix[i][matrix.length - 1 - i];
        }
        return secondarySum;
    }

    return `${mainDiagonal(matrix)} ${secondaryDiagonal(matrix)}`;
}

console.log(
    foo(
        [
            [3, 5, 17],
            [-1, 7, 14],
            [1, -8, 89]
        ]
    )
);
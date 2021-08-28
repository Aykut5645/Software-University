function foo(matrix) {
    let sum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrix.length; i++) {
        let rowsSum = matrix[i].reduce((a, b) => a + b);;
        let columnsSum = matrix.map(x => x[i]).reduce((a, b) => a + b);

        if (rowsSum != sum || columnsSum != sum) {
            return 'false';
        }
    }

    return 'true';
}

console.log(
    foo(
        [
            [4, 5, 6],
            [6, 5, 4],
            [5, 5, 5]
        ]
    )
);
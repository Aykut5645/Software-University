function biggestElement(matrix) {
    return matrix
        .map(row => Math.max(...row))
        .reduce((a, x) => Math.max(a, x), Number.MIN_SAFE_INTEGER);
}

console.log(
    foo(
        [
            [20, 50, 10],
            [8, 33, 145]
        ]
    )
);
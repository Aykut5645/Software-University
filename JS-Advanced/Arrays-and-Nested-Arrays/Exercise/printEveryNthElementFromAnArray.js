function foo(arr, steps) {
    return arr.filter((v, i) => i % steps == 0);
}

console.log(
    foo(
        [
            '5',
            '20',
            '31',
            '4',
            '20'
        ],
        2
    )
);
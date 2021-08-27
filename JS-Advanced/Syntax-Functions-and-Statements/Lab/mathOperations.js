function foo(a, b, operator) {
    const calcurator = {
        '+': () => a + b,
        '-': () => a - b,
        '*': () => a * b,
        '/': () => a / b,
        '%': () => a % b,
        '**': () => a ** b
    };

    return calcurator[operator]();
}

console.log(
    foo(5, 6, '+')
);
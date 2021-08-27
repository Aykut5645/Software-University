function foo(input) {
    let result = '';

    for(let i = 0; i < input; i++) {
        result += '* '.repeat(input).trimEnd() + '\n';
    }
    return result;
}

console.log(
    foo(5)
);
function foo(input) {
    const operations = {
        sum: () => input.reduce((acc, x) => acc + x, 0),
        sumDevByOne: () => input.reduce((acc, x) => acc + 1 / x, 0),
        sumByStr: () => input.map(String).reduce((acc, x) => acc + x, '')
    };

    return [
        operations.sum(), 
        operations.sumDevByOne(),
        operations.sumByStr()
    ].join('\n');
}

console.log(
    foo([1, 2, 3])
);
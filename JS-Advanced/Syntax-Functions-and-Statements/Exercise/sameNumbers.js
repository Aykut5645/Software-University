function foo(num) {
    Array.from(new Set(num.toString().split(''))).length != 1
        ? console.log('false')
        : console.log('true');
        
    return num
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b);
}

console.log(
    foo(2222222)
);
function foo(arr) {
    return arr
        .filter((n, i) => i % 2 === 0)
        .join(' ');
}

console.log(
    foo(['20', '30', '40', '50', '60'])
);
function foo(arr) {
    return arr
        .filter((n, i) => i % 2 == 1)
        .map(n => n * 2)
        .reverse()
        .join(' ');
}

console.log(
    foo([10, 15, 20, 25])
);
function foo(arr) {
    return arr
        .sort((a, b) => a - b)
        .splice(arr.length / 2);
}

console.log(
    foo([4, 7, 2, 5])
);
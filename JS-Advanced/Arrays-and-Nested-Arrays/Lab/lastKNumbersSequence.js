function foo(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        arr
            .push(arr
                .slice(-k)
                .reduce((acc, x) => acc + x)
            );
    }

    return arr;
}

console.log(
    foo(6, 3)
);
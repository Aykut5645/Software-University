function foo(arr) {
    let counter = 1;

    let = newArr = arr
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, x) => {
            acc.push(`${counter}.${x}`);
            counter++;

            return acc;
        }, []);

    return newArr.join('\n');
}

console.log(
    foo(["John", "Bob", "Christina", "Ema"])
);
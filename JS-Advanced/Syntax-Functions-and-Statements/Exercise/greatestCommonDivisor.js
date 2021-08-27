function foo(a, b) {
    for (let i = Math.min(a, b); i >= 1; i--) {
        if (
            Math.min(a, b) % i == 0 
            && 
            Math.max(a, b) % i == 0
        ) {
            return i;
        }
        maxNum--;
    }
}

console.log(
    foo(15, 5)
);
function foo(str) {
    return str
        .match(/\w+/g)
        .map(w => w.toLocaleUpperCase())
        .join(', ');
}

console.log(
    foo('Hi, how are you?')
);
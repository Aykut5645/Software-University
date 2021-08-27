function foo(...input) {
    return 'The largest number is ' + Math.max(...input) + '.';
}

console.log(
    foo(5, -3, 16)
);
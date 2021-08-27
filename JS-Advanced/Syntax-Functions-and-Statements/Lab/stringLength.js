function foo(...input) {
    function sum() {
        return input.reduce((acc, x) => acc + x.length, 0);
    }
    function average() {
        return input.reduce((acc, x) => acc + x.length, 0) / input.length;
    }

    return sum() + '\n' + Math.floor(average());
}

console.log(
    foo('chocolate', 'ice cream', 'cake')
);
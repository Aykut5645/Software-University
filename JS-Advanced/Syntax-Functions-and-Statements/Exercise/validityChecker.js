function foo(x1, y1, x2, y2) {
    return [
        `{${x1}, ${y1}} to {0, 0} ${checkValidity(x1, y1, 0, 0)}`,
        `{${x2}, ${y2}} to {0, 0} ${checkValidity(x2, y2, 0, 0)}`,
        `{${x1}, ${y1}} to {${x2}, ${y2}} ${checkValidity(x1, y1, x2, y2)}`
    ].join('\n');

    function checkValidity(x1, y1, x2, y2) {
        let result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return Number.isInteger(result) ? 'is valid' : 'is invalid';
    }
}

console.log(
    foo(2, 1, 1, 1)
);
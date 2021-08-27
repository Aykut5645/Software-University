function foo(input) {
    return typeof input === 'number' 
        ? (Math.pow(input, 2) * Math.PI).toFixed(2)
        : 'We can not calculate the circle area, because we receive a ' + typeof input + '.'
}

console.log(
    foo('5')
);
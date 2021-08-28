function foo(arr) {
    parsedArr = () => arr.map(Number);
    return parsedArr()[0] + parsedArr()[arr.length - 1];
}

console.log(
    foo(['20', '30', '40'])
);
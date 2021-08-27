function foo(...input) {
    input = input.map(Number);
    let result = 0;

    for (let i = input[0]; i <= input[1]; i +=  1) {
        result += i;
    }
    return result;
}

console.log(
    foo('-8', '20')
);
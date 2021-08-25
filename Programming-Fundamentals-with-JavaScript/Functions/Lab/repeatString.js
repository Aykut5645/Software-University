function solve(input1, input2) {
    let text = input1;
    let count = input2;
    let result = '';

    while (count != 0) {
        result += text;
        count--;
    }

    return result;
}

console.log(solve('String', 2));
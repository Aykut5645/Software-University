function solve(input1, input2, input3) {
    let firstName = input1;
    let secondName = input2;
    let delimiter = input3;

    let result = `${firstName}${delimiter}${secondName}`;

    console.log(result);
}

solve('John', 'Smith', '->');
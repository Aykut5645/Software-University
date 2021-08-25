function printAndSum(input1, input2) {
    let startNum = input1;
    let endNum = input2;
    let numbers = '';
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        numbers += i + ' ';
        sum += i;
    }

    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
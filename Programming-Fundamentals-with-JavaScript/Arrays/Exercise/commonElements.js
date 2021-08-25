function solve(input1, input2) {
    let firstArr = input1;
    let secondArr = input2;

    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j]) {
                console.log(firstArr[i]);
            }
        }
    }
}

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
      ['s', 'o', 'c', 'i', 'a', 'l']
);
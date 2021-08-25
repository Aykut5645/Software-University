function solve(input1, input2) {
    let firstArr = input1;
    let secondArr = input2;
    let counter = 0;
    let sum = 0;
    let concat = '';
    let result = [];

    for (let i = 0; i < firstArr.length; i++) {

        while (counter < 1) {
            counter++;

            if (i % 2 == 0) {
                sum = Number(firstArr[i]) + Number(secondArr[i]);
                result.push(sum);
            } else {
                concat = firstArr[i] + secondArr[i];
                result.push(concat);
            }

            if (counter == 1) {
                break;
            }
        }

        sum = 0;
        concat = '';
        counter = 0;
    }

    console.log(result.join(' - '));
}

solve(
    ['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']

);
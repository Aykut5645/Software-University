function solve(input) {
    let arr = input;
    let currentNum = 0;
    let checkNum = 0;
    let isLess = false;
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        currentNum = (arr[i]);

        for (let j = ++i; j < arr.length; j++) {
            checkNum = (arr[j]);

            if (currentNum <= checkNum) {
                isLess = true;
                break;
            }
        }

        if (isLess == false) {
            result += currentNum + ' ';
        }

        isLess = false;
        i--;
    }

    return result;
}

console.log(solve([41, 41, 34, 20]));
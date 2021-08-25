function solve(arr) {
    let numArr = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i].split(' ');
        let command = null;
        let firstNum = null;
        let secondNum = null;

        for (let j = 0; j < 1; j++) {
            command = currentArr[j];
            firstNum = Number(currentArr[j + 1]);
            secondNum = Number(currentArr[j + 2]);
        }

        switch (command) {
            case 'Add':
                numArr.push(firstNum);
                break;
            case 'Remove':
                numArr = numArr.filter(x => x != firstNum);
                break;
            case 'RemoveAt':
                numArr.splice(firstNum, 1);
                break;
            case 'Insert':
                numArr.splice(secondNum, 0, firstNum);
                break;
        }
    }

    console.log(numArr.join(' '));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
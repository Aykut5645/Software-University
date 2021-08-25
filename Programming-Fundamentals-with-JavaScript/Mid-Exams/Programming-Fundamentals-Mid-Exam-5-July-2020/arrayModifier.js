function solve(arr) {
    let integers = arr.shift().split(' ').map(Number);
    let command;

    while ((command = arr.shift()) != 'end') {
        let [action, ...params] = command.split(' ');
        let [indexOne, indexTwo] = params.map(Number);

        if (action == 'swap') {
            swapIntegers(integers, indexOne, indexTwo);
        } else if (action == 'multiply') {
            multiplyIntegers(integers, indexOne, indexTwo);
        } else if (action == 'decrease') {
            integers = decreaseIntegers(integers);
        }
    }

    console.log(integers);

    function swapIntegers(arr, firstInd, secondInd) {
        let firstNum = arr[firstInd];
        arr[firstInd] = arr[secondInd];
        arr[secondInd] = firstNum;
    }

    function multiplyIntegers(arr, firstInd, secondIndex) {
        let result = arr[firstInd] * arr[secondIndex];
        arr[firstInd] = result;
    }

    function decreaseIntegers(arr) {
        return arr.map(i => i -= 1);
    }
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
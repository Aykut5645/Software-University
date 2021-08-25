function solve(arr) {
    arr.sort((a, b) => a - b);
    let result = arr.splice(0, 2);

    console.log(result.join(' '));   
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);



function solve(arr) {
    let firstMin = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
    let currentIndex = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < firstMin) {
            firstMin = arr[i];
            currentIndex = i;
        }
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < secondMin && j != currentIndex) {
            secondMin = arr[j];
        }
    }

    newArr.push(firstMin, secondMin);
    console.log(newArr.join(' '));
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);

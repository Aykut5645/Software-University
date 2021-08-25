function solve(input) {
    let arr = input;
    let counter = 1;
    let firstInd = 0;
    let secondInd = 1;
    let currentArr = [];
    let currentSum = 0;

    while (counter < arr.length) {
        currentSum = arr[firstInd] + arr[secondInd];
        firstInd++;
        secondInd++;

        currentArr.push(currentSum);
        currentSum = 0;
        counter++;

        if (counter == arr.length) {
            counter = 1;
            arr = currentArr;
            currentArr = [];
            firstInd = 0;
            secondInd = 1;
            continue;
        }
    }
    
    arr = arr.toString();
    arr = Number(arr);

    console.log(arr);
}

solve([2]);



function solve(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i] + arr[i + 1];

        if (i == arr.length - 2) {
            i = -1;
            arr = newArr;
            newArr = [];
        }
    }

    arr = Number(arr);
    console.log(arr);
}

solve([5,0,4,1,2]);




function solve(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < i + 2; j++) {
            newArr[i] = arr[i] + arr[j];
        }

        if (i == arr.length - 2) {
            i = -1;
            arr = newArr;
            newArr = [];
        }
    }

    arr = Number(arr);
    console.log(arr);
}
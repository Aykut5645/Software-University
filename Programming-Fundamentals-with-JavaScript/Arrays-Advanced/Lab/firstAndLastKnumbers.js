function solve(arr) {
    let firstNum = arr[0];
    let firstLine = arr.slice(1, firstNum + 1);
    let secondLine = arr.slice(-firstNum);

    console.log(firstLine.join(' '));
    console.log(secondLine.join(' '));
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);


function solve(arr) {
    let firstNum = arr.shift();
    let firstLine = arr.slice(0, firstNum);
    let secondLine = arr.slice(-firstNum); // arr.slive(arr.length - firstNum);

    console.log(firstLine.join(' '));
    console.log(secondLine.join(' '));
    console
}

solve([2, 7, 8, 9]);
//solve([3, 6, 7, 8, 9]);



function solve(arr) {
    let firstNum = arr[0];
    let firstLine = [];
    let secondLine = [];
    let currentInd = 0;

    for (let i = 1; i <= firstNum; i++) {
        firstLine[currentInd] = arr[i];
        currentInd++;
    }

    currentInd = 0;

    for (let j = arr.length - 1; j >= arr.length - firstNum; j--) {
        secondLine[currentInd] = arr[j];
        currentInd++;
    }

    for (let k = 0; k < secondLine.length / 2; k++) {
        let firstInd = secondLine[k];
        let lastInd = secondLine[secondLine.length - 1 - k];
        secondLine[secondLine.length - 1 - k] = firstInd;
        secondLine[k] = lastInd;
    }
    
    console.log(firstLine.join(' '));
    console.log(secondLine.join(' '));
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);




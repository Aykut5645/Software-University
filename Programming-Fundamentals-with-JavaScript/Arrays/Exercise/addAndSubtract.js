function solve(input) {
    let origArr = input;
    let origSum = 0;
    let newSum = 0;
    let newArr = [];

    for (let i = 0; i < origArr.length; i++) {
        origSum += origArr[i];
        
        if (origArr[i] % 2 == 0) {
            origArr[i] += i;
            newSum += origArr[i];
        } else {
            origArr[i] -= i;
            newSum += origArr[i];
        }

        newArr.push(origArr[i]);
    }

    console.log(newArr);
    console.log(origSum);
    console.log(newSum);
}   

solve([-5, 11, 3, 0, 2]);




function solve(input) {
    let arr = input;
    let origSum = 0;
    let newSum = 0;

    for (const element of arr) {
        origSum += element;
    }

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;

        }
    }

    for (const element of arr) {
        newSum += element;
    }

    console.log(arr);
    console.log(origSum);
    console.log(newSum);
}

solve([-5, 11, 3, 0, 2]);
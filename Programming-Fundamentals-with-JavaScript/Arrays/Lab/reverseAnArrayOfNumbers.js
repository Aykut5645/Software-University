function solve(input1, input2) {
    let count = input1;
    let arr = input2;

    arr.length = count;
    arr = arr.reverse().join(' ');
    console.log(arr);
}

solve(4, [-1, 20, 99, 5]);




function solve(input1, input2) {
    let num = input1;
    let arr = input2;

    let secondArr = [];

    for (let i = 0; i < num; i++) {
        secondArr.push(arr[i]);
    }

    secondArr = secondArr.reverse().join(' ');
    console.log(secondArr);
}

solve(2, [66, 43, 75, 89, 47]);



function solve(num, arr) {
    arr.length = num;

    let firstElement = 0;
    let lastElement = 0;

    for (let i = 0; i < arr.length / 2; i++) {
        firstElement = arr[i];
        lastElement = arr[arr.length - 1 - i];

        arr[arr.length - 1 - i] = firstElement;
        arr[i] = lastElement;
    }

    console.log(arr.join(' '));
}

solve(4, [-1, 20, 99, 5]);



function solve(num, arr) {
    let newArr = [];
    
    for (let i = 0; i < num; i++) {
        newArr[i] = arr[i];
    }

    let reversedArr = [];

    for (let i = 0; i < newArr.length; i++) {
        reversedArr[i] = newArr[newArr.length - 1 - i]; 
    }

    console.log(reversedArr.join(' '));
}

solve(3, [-1, 20, 99, 5]);


//let arr = [];
//
//arr[0] = 1;
//arr[arr.length] = 2;
//console.log(arr); // arr[1, 2];
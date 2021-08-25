// push()
function withoutPush(arr) {
    arr[arr.length] = 9;

    console.log(arr); // [2, 5, 3, 7, 9];
}

withoutPush([2, 5, 3, 7]);
 


// pop()
function withoutPop(arr) {
    arr.length--; // arr.length = arr.length - 1; 

    console.log(arr); // [2, 5, 3];
}

withoutPop([2, 5, 3, 7]);

// shift()  !!! мое творение - внимавай !!!
// първи начин:
function withoutShift(arr) {
    let newArr = [];

    for (let i = 1; i < arr.length; i++) {
        newArr[i - 1] = arr[i];
    }

    console.log(newArr);
}

withoutShift([2, 5, 3, 7]);

// втори начин:
function withoutShift(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    //[5, 3, 7, undefinded];
    arr.length--;

    console.log(arr); // [5, 3, 7];
}

withoutShift([2, 5, 3, 7]);



// unshift()   !!! мое творение - внимавай !!! 
// първи начин:
function withoutUnshift(arr) {
    let newArr = [];
    let currentIndex = 1;

    for (let i = 0; i < arr.length; i++) {
        newArr[currentIndex] = arr[i];
        currentIndex++;
    }
    //[undefined , 2, 5, 3, 7];
    newArr[0] = 8;

    console.log(newArr); // [8, 2, 5, 3, 7];
}

withoutUnshift([2, 5, 3, 7]);

// втори начин:
function withoutUnshift(arr) {
    arr[arr.length] = undefined;
    let currentNumber = arr.length - 2;

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[currentNumber];
        currentNumber--;
    }
    //[2, 2, 5, 3, 7];
    arr[0] = 9;
    
    console.log(arr); //[9, 2, 5, 3, 7];
}

withoutUnshift([2, 5, 3, 7]);


// includes()
function withoutIncludes(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        } 
    }

    return false;
}

console.log(withoutIncludes(1, [2, 5, 3, 7]))



// indexOf()
function withoutIndexOf(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === num) {
            return i;
        }
    }

    return -1;
}

console.log(withoutIndexOf(5, [2, 5, 3, 7]));


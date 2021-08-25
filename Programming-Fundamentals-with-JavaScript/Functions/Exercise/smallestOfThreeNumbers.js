function smallestNumber(firstNum, secondNum, thirdNum) {
    let getSmallest = (a, b, c) => Math.min(a, b, c);

    console.log(getSmallest(firstNum, secondNum, thirdNum));
}

smallestNumber(2, 1, 3);


function smallestNumber(firstNum, secondNum, thirdNum) {
    let min = Number.MAX_SAFE_INTEGER;

    if (min > firstNum) {
        min = firstNum;
    } 
    
    if (min > secondNum) {
        min = secondNum;
    }

    if (min > thirdNum) {
        min = thirdNum
    }

    console.log(min);
}

smallestNumber(3, 5, 1)



function smallestNumber(firstNum, secondNum, thirdNum) {
    let arr = [firstNum, secondNum, thirdNum];
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < 3; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    console.log(min);
}

smallestNumber(2, 1, 3);
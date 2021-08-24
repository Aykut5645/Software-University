function equalNumbers([arg1, arg2, arg3]) {
    let firstNumber = arg1;
    let secondNumber = arg2;
    let thirdNumber = arg3;

    if (firstNumber != secondNumber) {

        console.log("no");
    } else if (firstNumber != thirdNumber) {

        console.log("no");
    } else if (secondNumber != thirdNumber) {

        console.log("no");
    } else {
        
        console.log("yes");
    }
}

equalNumbers([5, 3, 3]);
function subtract(firstNum, secondNum, thirdNum) {

    let subtract = sum(firstNum, secondNum) - thirdNum;
    console.log(subtract);

    function sum(a, b) {
        let result = a + b;
        return result;
    }
}

subtract(1, 17, 30);



function subtract(firstNum, secondNum, thirdNum) {
    let sum = (a, b) => a + b;
    
    let subtract = (sum(firstNum, secondNum) - thirdNum);
    console.log(subtract);
}

subtract(1, 17, 30);
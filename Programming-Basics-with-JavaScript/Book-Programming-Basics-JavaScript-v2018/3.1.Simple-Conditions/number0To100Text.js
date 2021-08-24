function numberZeroToHundred([arg]) {
    let number = Number(arg);
    let name = 0;
    let firstNumber = Math.trunc(number / 10);
    let secondNumber = number % 10;


    if (number == 0) {
        name = "zero";
    } else if (number == 1) {
        name = "one";
    } else if (number == 2) {
        name = "two";
    } else if (number == 3) {
        name = "three";
    } else if (number == 4) {
        name = "four";
    } else if (number == 5) {
        name = "five";
    } else if (number == 6) {
        name = "six";
    } else if (number == 7) {
        name = "seven";    
    } else if (number == 8) {
        name = "eight";
    } else if (number == 9) {
        name = "nine";
    } else if (number == 10) {
        name = "ten";
    } else if (number == 11) {
        name = "eleven";
    } else if (number == 12) {
        name = "twelve";
    } else if (number == 13) {
        name = "thirteen";
    } else if (number == 14) {
        name = "fourteen";
    } else if (number == 15) {
        name = "fifteen";        
    } else if (number == 16) {
        name = "sixteen";
    } else if (number == 17) {
        name = "seventeen";
    } else if (number == 18) {
        name = "eighteen";
    } else if (number == 19) {
        name = "nineteen";
    } 

    if (firstNumber == 2) {
        firstNumber = "twenty";
    } else if (firstNumber == 3) {
        firstNumber = "thirty";
    } else if (firstNumber == 4) {
        firstNumber = "forty";
    } else if (firstNumber == 5) {
        firstNumber = "fifty";
    } else if (firstNumber == 6) {
        firstNumber = "sixty";
    } else if (firstNumber == 7) {
        firstNumber = "seventy";
    } else if (firstNumber == 8) {
        firstNumber = "eighty";
    } else if (firstNumber == 9) {
        firstNumber = "ninety";
    }

    if (secondNumber == 1) {
        secondNumber = "one";  
    } else if (secondNumber == 2) {
        secondNumber = "two";
    } else if (secondNumber == 3) {
        secondNumber = "three";
    } else if (secondNumber == 4) {
        secondNumber = "four";
    } else if (secondNumber == 5) {
        secondNumber = "five";
    } else if (secondNumber == 6) {
        secondNumber = "six";
    } else if (secondNumber == 7) {
        secondNumber = "seven";
    } else if (secondNumber == 8) {
        secondNumber = "eight";
    } else if (secondNumber == 9) {
        secondNumber = "nine";
    } 

    if (number == 100) {
        name = "one hundred";
        console.log(name);
    } else if (number < 0 || number > 100) {
        console.log("Invalid Number");
    } else if (number < 20) {
        console.log(name);
    } else if (secondNumber == 0) {
        console.log(firstNumber);
    } else if (number >= 20 && number < 100) {
        console.log(`${firstNumber} ${secondNumber}`);
    } 
}

numberZeroToHundred([88]);
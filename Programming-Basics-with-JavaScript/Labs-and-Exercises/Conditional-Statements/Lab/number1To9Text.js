function number1To9Text(arg) {
    let number = arg;

    if (number == 1) {
        number = "one";
    } else if (number == 2) {
        number = "two"; 
    } else if (number == 3) {
        number = "three";
    } else if (number == 4) {
        number = "four";
    } else if (number == 5) {
        number = "five";
    } else if (number == 6) {
        number = "six";
    } else if (number == 7) {
        number = "seven"; 
    } else if (number == 8) {
        number = "eight";
    } else if (number == 9) {
        number = "nine";
    } else {
        number = "number too big";
    }

    console.log(number);
}

number1To9Text(5);
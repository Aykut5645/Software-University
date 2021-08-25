function rounding(input1, input2) {
    let roundedNumber = input1;
    let precision = input2;

    if (precision > 15) {
        precision = 15;
    }

    let result = roundedNumber.toFixed(precision);
    result = parseFloat(result);
    
    console.log(result);
}

rounding(10.5, 3);
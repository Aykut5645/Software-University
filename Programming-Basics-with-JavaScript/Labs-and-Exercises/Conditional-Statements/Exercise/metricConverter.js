 function metricConverter(arg1, arg2, arg3) {
    let number = Number(arg1);
    let inputMetr = arg2;
    let outputMetr = arg3;

    if (inputMetr == "cm") {
        number = number / 100;
    } else if (inputMetr == "mm") {
        number = number / 1000;
    }

    if (outputMetr == "cm") {
        number = number * 100;
    } else if (outputMetr == "mm") {
        number = number * 1000;
    }
    
    console.log(number.toFixed(3));
}

metricConverter("12", "mm", "m");

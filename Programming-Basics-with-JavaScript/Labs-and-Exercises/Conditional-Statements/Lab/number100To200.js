function number100To200(arg) {
    let number = Number(arg);

    if (number < 100) {
        number = "Less than 100";
    } else if (number <= 200) {
        number = "Between 100 and 200";
    } else {
        number = "Greater than 200";
    }

    console.log(number);
}

number100To200(0);
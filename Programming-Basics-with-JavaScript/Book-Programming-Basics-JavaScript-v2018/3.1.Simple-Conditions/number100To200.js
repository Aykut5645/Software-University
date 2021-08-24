function number100To200([arg]) {
    let result = Number(arg);

    if (result < 100) {
        result = "Less than 100";
    } else if (result <= 200) {
        result = "Between 100 and 200";
    } else {
        result = "Greater than 200";
    }

    console.log(result);
}

number100To200([178]);
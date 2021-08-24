function currencyConverter([arg1, arg2, arg3]) {
    let value = Number(arg1);
    let firstCourse = arg2;
    let secondCourse = arg3;

    if (firstCourse == "USD") {
        value *= 1.79549;
    } else if (firstCourse == "EUR") {
        value *= 1.95583;
    } else if (firstCourse == "GBP") {
        value *=  2.53405;
    }

    if (secondCourse == "USD") {
        value /= 1.79549;
    } else if (secondCourse == "EUR") {
        value /= 1.95583;
    } else if (secondCourse == "GBP") {
        value /= 2.53405;
    }

    console.log(`${value.toFixed(2)} ${secondCourse}`);
}

currencyConverter([12.35, "EUR", "GBP"]);
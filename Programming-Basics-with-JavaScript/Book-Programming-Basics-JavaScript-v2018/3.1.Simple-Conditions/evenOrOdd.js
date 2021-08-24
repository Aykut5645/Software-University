function everOnOdd([arg]) {
    let number = Number(arg);

    if (number % 2 == 0) {
        number = "even";
    } else {
        number = "odd";
    }

    console.log(number);
}

everOnOdd([5]);
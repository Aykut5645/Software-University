function invalidNumber(arg) {
    let number = Number(arg);

    if (!((number >= 100 && number <= 200 && number) || number == 0)) {
        console.log("invalid");
    } 
}

invalidNumber();
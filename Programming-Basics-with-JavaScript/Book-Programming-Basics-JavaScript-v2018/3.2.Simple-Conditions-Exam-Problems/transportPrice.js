function transportPrice([arg1, arg2]) {
    let kilometers = Number(arg1);
    let time = arg2;

    let taxiPrice = 0.70;
    let busPrice = 0.09 * kilometers;
    let trainPrice = 0.06 * kilometers;

    if (time == "day") {
        taxiPrice = taxiPrice + (0.79 * kilometers); 
    } else if (time == "night") {
        taxiPrice = taxiPrice + (0.90 * kilometers);
    }

    if (kilometers < 20) {
        console.log(taxiPrice);
    } else if (kilometers < 100) {
        console.log(busPrice);
    } else if (kilometers >= 100) {
        console.log(trainPrice);
    }
}

transportPrice(["7", "night"]);
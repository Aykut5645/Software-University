function flowers(arg1, arg2, arg3, arg4, arg5) {
    let chrysanthemumCount = Number(arg1);
    let roseCount = Number(arg2);
    let tulipCount = Number(arg3);
    let seasonType = arg4;
    let holidayOrNot = arg5;

    let chrysanthemumPrice = 0;
    let rosePrice = 0;
    let tulipPrice = 0;

    let totalPrice = 0;

    switch (seasonType) {
        case "Spring":
        case "Summer":
            chrysanthemumPrice = 2.00;
            rosePrice = 4.10;
            tulipPrice = 2.50;
            totalPrice = (chrysanthemumCount * chrysanthemumPrice) + (roseCount * rosePrice) + (tulipCount * tulipPrice);
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumPrice = 3.75;
            rosePrice = 4.50;
            tulipPrice = 4.15;
            totalPrice = (chrysanthemumCount * chrysanthemumPrice) + (roseCount * rosePrice) + (tulipCount * tulipPrice);
            break;
    }

    if (holidayOrNot == "Y") {
        totalPrice *= 1.15;
    }

    if (tulipCount > 7 && seasonType == "Spring") {
        totalPrice *= 0.95;
    }

    if (roseCount >= 10 && seasonType == "Winter") {
        totalPrice *= 0.90;
    }

    if ((chrysanthemumCount + roseCount + tulipCount > 20) && (seasonType == "Summer" || seasonType == "Spring" || seasonType == "Autumn" || seasonType == "Winter")) {
        totalPrice *= 0.80;
    }

    let arrangementPrice = 2;

    totalPrice = arrangementPrice + totalPrice;

    console.log((totalPrice).toFixed(2));
}

flowers(10,
    10,
    10,
    "Autumn",
    "N"
);
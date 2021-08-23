function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let еggsBatch = Number(input[2]);

    let currentPrice = 0;

    if (eggsSize == "Large") {

        switch (eggsColor) {
            case "Red":
                currentPrice = 16;
                break;
            case "Green":
                currentPrice = 12;
                break;
            case "Yellow":
                currentPrice = 9;
                break;
        }
    } else if (eggsSize == "Medium") {

        switch (eggsColor) {
            case "Red":
                currentPrice = 13;
                break;
            case "Green":
                currentPrice = 9;
                break;
            case "Yellow":
                currentPrice = 7;
                break;
        }

    } else if (eggsSize == "Small") {

        switch (eggsColor) {
            case "Red":
                currentPrice = 9;
                break;
            case "Green":
                currentPrice = 8;
                break;
            case "Yellow":
                currentPrice = 5;
                break;
        }
    }

    let totalPrice = currentPrice * еggsBatch;
    let percentForCosts = totalPrice * 0.35;

    totalPrice -= percentForCosts;

    console.log(`${totalPrice.toFixed(2)} leva.`);
}

paintingEggs(['Large', 'Red', '7']);
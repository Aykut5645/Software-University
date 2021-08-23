function easterTrip(input) {
    let destination = input[0];
    let date = input[1];
    let nightsCount = Number(input[2]);

    let currentPrice = 0;

    if (destination == "France") {

        switch (date) {
            case "21-23":
                currentPrice = 30;
                break;
            case "24-27":
                currentPrice = 35;
                break;
            case "28-31":
                currentPrice = 40;
                break;
        }
    } else if (destination == "Italy") {

        switch (date) {
            case "21-23":
                currentPrice = 28;
                break;
            case "24-27":
                currentPrice = 32;
                break;
            case "28-31":
                currentPrice = 39;
                break;
        }
    } else if (destination == "Germany") {
        switch (date) {
            case "21-23":
                currentPrice = 32;
                break;
            case "24-27":
                currentPrice = 37;
                break;
            case "28-31":
                currentPrice = 43;
                break;
        }
    }

    currentPrice *= nightsCount;

    console.log(`Easter trip to ${destination} : ${currentPrice.toFixed(2)} leva.`);
}

easterTrip(['Germany', '24-27', '5', '', '']);
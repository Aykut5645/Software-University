function cruiseShip(input) {
    let cruiseType = input[0];
    let cabinType = input[1];
    let nightCount = Number(input[2]);

    let familyCount = 4;
    let currentPrice = 0;

    if (cruiseType == "Mediterranean") {

        switch (cabinType) {
            case "standard cabin":
                currentPrice = 27.50;
                break;
            case "cabin with balcony":
                currentPrice = 30.20;
                break;
            case "apartment":
                currentPrice = 40.50;
                break;
        }
    } else if (cruiseType == "Adriatic") {

        switch (cabinType) {
            case "standard cabin":
                currentPrice = 22.99;
                break;
            case "cabin with balcony":
                currentPrice = 25.00;
                break;
            case "apartment":
                currentPrice = 34.99;
                break;
        }

    } else if (cruiseType == "Aegean") {

        switch (cabinType) {
            case "standard cabin":
                currentPrice = 23.00;
                break;
            case "cabin with balcony":
                currentPrice = 26.60;
                break;
            case "apartment":
                currentPrice = 39.80;
                break;
        }
    }

    let totalPrice = familyCount * nightCount * currentPrice;

    if (nightCount > 7) {
        totalPrice *= 0.75;
    }

    console.log(`Annie's holiday in the ${cruiseType} sea costs ${totalPrice.toFixed(2)} lv.`)
}

cruiseShip([ 'Aegean', 'standard cabin', '10']);
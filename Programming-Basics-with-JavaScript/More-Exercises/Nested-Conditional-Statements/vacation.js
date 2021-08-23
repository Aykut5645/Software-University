function vacation(arg1, arg2) {
    let budget = Number(arg1);
    let seasonType = arg2;

    let location = 0;
    let placeForNight = 0;
    let price = 0;

    if (budget <= 1000) {
        placeForNight = "Camp";

        switch (seasonType) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000) {
        placeForNight = "Hut";

        switch (seasonType) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.8;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.6;
                break;
        }
    } else if (budget > 3000) {
        placeForNight = "Hotel";

        switch (seasonType) {
            case "Summer":
                location = "Alaska";
                price = budget * 0.9;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.9;
                break;
        }
    }

    console.log(`${location} - ${placeForNight} - ${price.toFixed(2)}`);
}

vacation("799.50", "Winter");
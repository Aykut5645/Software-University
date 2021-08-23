function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;

    let result = 0;
    let destination = 0;
    let place = 0;


    if (budget <= 100) {
        destination = "Bulgaria";

        switch (season) {
            case "summer":
                place = "Camp";
                result = budget * 0.3;
                break;
            case "winter":
                place = "Hotel";
                result = budget * 0.7;
                break;
        }

    } else if (budget <= 1000) {
        destination = "Balkans";

        switch (season) {
            case "summer":
                place = "Camp";
                result = budget * 0.4;
                break;
            case "winter":
                place = "Hotel";
                result = budget * 0.8;
                break;
        }

    } else if (budget > 1000) {
        destination = "Europe";

        switch (season) {
            case "summer":
            case "winter":
                place = "Hotel";
                result = budget * 0.9;
                break;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${result.toFixed(2)}`);
}

journey(678.53, "winter");
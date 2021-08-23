function worldSnookerChampionship(input) {
    let stage = input[0];
    let ticketType = input[1];
    let ticketCount = Number(input[2]);
    let pictureWithTrophy = input[3];

    let photoPrice = 40 * ticketCount;

    let ticketPrice = 0;

    if (stage == "Quarter final") {

        switch (ticketType) {
            case "Standard":
                ticketPrice = 55.50;
                break;
            case "Premium":
                ticketPrice = 105.20;
                break;
            case "VIP":
                ticketPrice = 118.90;
                break;
        }
    } else if (stage == "Semi final") {

        switch (ticketType) {
            case "Standard":
                ticketPrice = 75.88;
                break;
            case "Premium":
                ticketPrice = 125.22;
                break;
            case "VIP":
                ticketPrice = 300.40;
                break;
        }
    } else if (stage == "Final") {

        switch (ticketType) {
            case "Standard":
                ticketPrice = 110.10;
                break;
            case "Premium":
                ticketPrice = 160.66;
                break;
            case "VIP":
                ticketPrice = 400;
                break;
        }
    }

    ticketPrice *= ticketCount;

    if (ticketPrice > 4000) {
        ticketPrice *= 0.75;
    } else if (ticketPrice > 2500) {
        ticketPrice *= 0.90;
    }

    if (pictureWithTrophy == "Y") {
        ticketPrice += photoPrice;

        if (ticketPrice > 4000) {
            ticketPrice -= photoPrice;
        }
    } 
    
    console.log(ticketPrice.toFixed(2));
}

worldSnookerChampionship([ 'Final', 'Premium', '25', 'Y' ]);
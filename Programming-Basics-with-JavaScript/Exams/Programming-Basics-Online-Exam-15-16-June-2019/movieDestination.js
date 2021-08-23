function movieDestination(input) {
    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysCount = Number(input[3]);

    if (destination == "Dubai") {

        switch (season) {
            case "Winter":
                currentPrice = 45000;
                break;
            case "Summer":
                currentPrice = 40000;
                break;
        }
    } else if (destination == "Sofia") {

        switch (season) {
            case "Winter":
                currentPrice = 17000;
                break;
            case "Summer":
                currentPrice = 12500;
                break;
        }
    } else if (destination == "London") {

        switch (season) {
            case "Winter":
                currentPrice = 24000;
                break;
            case "Summer":
                currentPrice = 20250;
                break;
        }
    }

    let finalPrice = currentPrice * daysCount

    if (destination == "Dubai") {
        finalPrice *= 0.70;
    }

    if (destination == "Sofia") {
        finalPrice += (finalPrice * 0.25);
    }

    let difference = Math.abs(finalPrice - movieBudget);

    if (finalPrice >= movieBudget) {
        console.log(`The director needs ${difference.toFixed(2)} leva more!`);
    } else {
        console.log(`The budget for the movie is enough! We have ${difference.toFixed(2)} leva left!`);
    }
}

movieDestination([ '400000', 'Sofia', 'Winter', '20', '' ]);
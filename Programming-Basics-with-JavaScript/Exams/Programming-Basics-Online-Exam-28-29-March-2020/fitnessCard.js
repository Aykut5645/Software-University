function fitnessCard(input) {
    let currentSum = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sportType = input[3];

    let currentPrice = 0;

    if (sex == "m") {
        switch (sportType) {
            case "Gym":
                currentPrice = 42;
                break;
            case "Boxing":
                currentPrice = 41;
                break;
            case "Yoga":
                currentPrice = 45;
                break;
            case "Zumba":
                currentPrice = 34;
                break;
            case "Dances":
                currentPrice = 51;
                break;
            case "Pilates":
                currentPrice = 39;
                break;
        }
    } else if (sex == "f") {
        switch (sportType) {
            case "Gym":
                currentPrice = 35;
                break;
            case "Boxing":
                currentPrice = 37;
                break;
            case "Yoga":
                currentPrice = 42;
                break;
            case "Zumba":
                currentPrice = 31;
                break;
            case "Dances":
                currentPrice = 53;
                break;
            case "Pilates":
                currentPrice = 37;
                break;
        }
    }

    if (age <= 19) {
        currentPrice *= 0.80;
    }

    if (currentPrice <= currentSum) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        let difference = Math.abs(currentSum - currentPrice);
        console.log(`You don't have enough money! You need $${difference.toFixed(2)} more.`);
    }
}

fitnessCard(['50', 'm', '23', 'Gym']);
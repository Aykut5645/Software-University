function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let fishermanCount = Number(arg3);

    let shipRent = 0;

    switch (season) {
        case "Spring":
            shipRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            shipRent = 4200;
            break; 
        case "Winter":
            shipRent = 2600;
            break;
    }

    if (fishermanCount <= 6) {
        shipRent *= 0.90;
    } else if (fishermanCount >= 7 && fishermanCount <= 11) {
        shipRent *= 0.85;
    } else if (fishermanCount >= 12) {
        shipRent *= 0.75;
    }

    if (fishermanCount % 2 == 0 && season != "Autumn") {
        shipRent *= 0.95;
    }

    if (shipRent > budget) {
        let needSum = Math.abs(shipRent - budget);
        console.log(`Not enough money! You need ${needSum.toFixed(2)} leva.`); 
    } else {
        let leftSum = Math.abs(shipRent - budget);
        console.log(`Yes! You have ${leftSum.toFixed(2)} leva left.`); 
    }
}   

fishingBoat(2000, "Winter", 13);
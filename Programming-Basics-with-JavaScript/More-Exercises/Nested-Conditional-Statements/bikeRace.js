function bikeRace(arg1, arg2, arg3) {
    let juniorCyclistCount = Number(arg1);
    let seniorCyclistCount = Number(arg2);
    let routeType = arg3;

    let juniorTax = 0;
    let seniorTax = 0;

    switch (routeType) {
        case "trail":
            juniorTax = 5.50;
            seniorTax = 7;
            break;
        case "cross-country":
            juniorTax = 8;
            seniorTax = 9.50;
            break;
        case "downhill":
            juniorTax = 12.25;
            seniorTax = 13.75;
            break;
        case "road":
            juniorTax = 20;
            seniorTax = 21.50;
            break;
    }

    let sum = (juniorCyclistCount * juniorTax) + (seniorCyclistCount * seniorTax);

    if (routeType == "cross-country" && (juniorCyclistCount + seniorCyclistCount) >= 50) {
        sum *= 0.75; 
    }

    sumWithoutCost = sum * 0.95;
    
    console.log(sumWithoutCost.toFixed(2));
}

bikeRace("3", "40", "road");
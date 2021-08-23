function safari([arg1, arg2, arg3]) {
    let budgetCouple = Number(arg1);
    let fuel = Number(arg2);
    let dayOfWeekend = arg3;

    let guidePrice = 100;
    let fuelPrice = fuel * 2.10;
    let safariSum = fuelPrice + guidePrice;

    if (dayOfWeekend == "Saturday") {
        safariSum = safariSum * 0.9;
    } else {
        safariSum = safariSum * 0.8;
    }

    if (budgetCouple >= safariSum) {
        sumLeft = budgetCouple - safariSum;

        console.log(`Safari time! Money left: ${sumLeft.toFixed(2)} lv.`);
    } else {
        sumNeeded = safariSum - budgetCouple;

        console.log(`Not enough money! Money needed: ${sumNeeded.toFixed(2)} lv.`)
    }
}

safari(["120", "30", "Saturday"])
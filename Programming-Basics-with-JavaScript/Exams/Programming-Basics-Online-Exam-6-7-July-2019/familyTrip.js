function familyTrip([arg1, arg2, arg3, arg4]) {
    let familyBudget = Number(arg1);
    let nightCount = Number(arg2);
    let priceOneNight = Number(arg3);
    let percentOtherCost = Number(arg4);

    if (nightCount > 7) {
        priceOneNight = priceOneNight * 0.95;
    }

    let allNightPrice = nightCount * priceOneNight
    let otherCost = percentOtherCost * 1/100 * familyBudget;
    let tripSum = allNightPrice + otherCost;

    if (familyBudget >= tripSum) {
        let leftMoney = familyBudget - tripSum;

        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`);
    } else {
        let needMoney = tripSum - familyBudget;

        console.log(`${needMoney.toFixed(2)} leva needed.`);
    }
}

familyTrip(["500", "7", "66", "15"]);
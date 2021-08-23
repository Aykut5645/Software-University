function easterParty([arg1, arg2, arg3]) {
    let guestCount = Number(arg1);
    let priceOneGuest = Number(arg2);
    let budgetDesi = Number(arg3);
    
    let cakePrice = budgetDesi * 0.1;
    let tripPrice = guestCount * priceOneGuest;
    
    if (guestCount > 20) {
        tripPrice = tripPrice * 0.75;
    } else if (guestCount > 15) {
        tripPrice = tripPrice * 0.80;
    } else if (guestCount >= 10) {
        tripPrice = tripPrice * 0.85;
    }

    totalSum = cakePrice + tripPrice; 

    if (budgetDesi < totalSum) {
        let sumNeeded = totalSum - budgetDesi;

        console.log(`No party! ${sumNeeded.toFixed(2)} leva needed.`);
    } else {
        let sumLeft = budgetDesi - totalSum 

        console.log(`It is party time! ${sumLeft.toFixed(2)} leva left.`);
    }
}

easterParty(["24", "35", "550"]);
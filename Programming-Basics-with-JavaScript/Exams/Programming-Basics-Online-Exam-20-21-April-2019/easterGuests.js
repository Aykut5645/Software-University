function easterGuests([arg1, arg2]) {
    let guestCount = Number(arg1);
    let budgetLubo = Number (arg2);

    let easterBreadCount = Math.ceil(guestCount / 3);
    let eggsCount = guestCount * 2;

    let easterPrice = easterBreadCount * 4;
    let eggsPrice = eggsCount * 0.45;

    let totalPrice = easterPrice + eggsPrice;

    if (budgetLubo >= totalPrice) {
        sumLeft = budgetLubo - totalPrice;


        console.log(`Lyubo bought ${easterBreadCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${sumLeft.toFixed(2)} lv. left.`);
    } else {
        sumNeed = totalPrice - budgetLubo;

        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${sumNeed.toFixed(2)} lv. more.`);
    }
}

easterGuests(["9", "12"]);
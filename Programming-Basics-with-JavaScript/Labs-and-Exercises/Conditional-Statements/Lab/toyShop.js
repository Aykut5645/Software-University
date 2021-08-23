function toyShop(arg1, arg2, arg3, arg4, arg5, arg6) {
    let tourPrice = Number(arg1);
    let puzzleCount = Number(arg2);
    let dollCount = Number(arg3);
    let bearCount = Number(arg4);
    let minionCount = Number(arg5);
    let truckCount = Number(arg6);

    let toysCount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let toysPrice = puzzleCount * 2.60 + dollCount * 3 + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;

    if (toysCount >= 50) {
        toysPrice = toysPrice - (25 * 1 / 100 * toysPrice);
    }

    toysPrice = toysPrice - (10 * 1 / 100 * toysPrice);

    if (toysPrice >= tourPrice) {
        let leftSum = toysPrice - tourPrice;

        console.log(`Yes! ${leftSum.toFixed(2)} lv left.`);
    } else if (toysPrice < tourPrice) {
        let neededSum = tourPrice - toysPrice;

        console.log(`Not enough money! ${neededSum.toFixed(2)} lv needed.`)
    }
}

toyShop("320", "8", "2", "5", "5", "1");


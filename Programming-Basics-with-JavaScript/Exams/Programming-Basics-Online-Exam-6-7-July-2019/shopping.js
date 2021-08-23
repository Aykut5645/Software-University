function shopping([arg1, arg2 , arg3, arg4]) {
    let peterBudget = Number(arg1);
    let videoCardCount = Number(arg2);
    let processorCount = Number(arg3);
    let ramCount = Number(arg4);

    let videoCardPrice = 250 * videoCardCount;
    let processorPrice = (videoCardPrice * 0.35) * processorCount;
    let ramPrice = (videoCardPrice * 0.1) * ramCount;

    let totalPrice = videoCardPrice + processorPrice + ramPrice;

    if (videoCardCount > processorCount) {
        totalPrice = totalPrice * 0.85;
    }

    if (peterBudget >= totalPrice) {
        let leftMoney = peterBudget - totalPrice;

        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    } else {
        let needMoney = totalPrice - peterBudget;

        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva more!`);
    }
}

shopping(["920.45", "3", "1", "1"]);
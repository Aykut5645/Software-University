function disneylandJourney(arr) {
    let journeyPrice = Number(arr[0]);
    let monthsCount = Number(arr[1]);
    let currentPrice = 0;

    for (let i = 1; i <= monthsCount; i++) {
        if (i != 1 && i % 2 == 1) {
            currentPrice = currentPrice - (currentPrice * 0.16);
        }
        if (i % 4 == 0) {
            currentPrice += currentPrice * 0.25;
        }
        currentPrice += journeyPrice * 0.25;
    }

    let leftMoney = Math.abs(currentPrice - journeyPrice);

    if (currentPrice >= journeyPrice) {
        console.log(`Bravo! You can go to Disneyland and you will have ${leftMoney.toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${leftMoney.toFixed(2)}lv. more.`);
    }
}

//disneylandJourney(['1000', '4']);
disneylandJourney([ '3265', '3' ]);
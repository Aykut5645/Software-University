function helloFrance(arr) {
    let commands = arr.shift().split('|');
    let budget = Number(arr.shift());
    let arrNewPrices = [];
    let currentNewPrice = 0;
    let profit = 0;
    
    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split('->');
        let currentItem = currentCommand[0];
        let currentPrice = Number(currentCommand[1]);

        if (currentItem == 'Clothes') {
            if (currentPrice <= 50.00 && budget >= currentPrice) {
                budget -= currentPrice;
                profit += currentPrice * 0.4;
                currentNewPrice = currentPrice + (currentPrice * 0.4);
                arrNewPrices.push(currentNewPrice);
            }
        } else if (currentItem == 'Shoes') {
            if (currentPrice <= 35.00 && budget >= currentPrice) {
                budget -= currentPrice;
                profit += currentPrice * 0.4;
                currentNewPrice = currentPrice + (currentPrice * 0.4);
                arrNewPrices.push(currentNewPrice);
            }
        } else if (currentItem == 'Accessories') {
            if (currentPrice <= 20.50 && budget >= currentPrice) {
                budget -= currentPrice;
                profit += currentPrice * 0.4;
                currentNewPrice = currentPrice + (currentPrice * 0.4);
                arrNewPrices.push(currentNewPrice);
            }
        }
    }

    let sumAllNewPrices = 0;
    let resultFromSell = 0;

    for (const element of arrNewPrices) {
        sumAllNewPrices += element;
    }

    resultFromSell = sumAllNewPrices + budget;

    let mappedArr = arrNewPrices.map(x => x.toFixed(2));

    if (resultFromSell > 150) {
        console.log(mappedArr.join(' '));
        console.log(`Profit: ${profit.toFixed(2)}`);
        console.log('Hello, France!');
    } else {
        console.log(mappedArr.join(' '));
        console.log(`Profit: ${profit.toFixed(2)}`);
        console.log('Time to go.');
    }
}

//helloFrance(['Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60', '120']);
helloFrance(['Shoes->41.20|Clothes->20.30|Accessories->40|Shoes->15.60|Shoes->33.30|Clothes->48.60', '90']);
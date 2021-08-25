function solve(stock, delivery) {
    let totalArr = stock.concat(delivery);
    let stockObject = {};

    for (let i = 0; i < totalArr.length; i += 2) {
        if (stockObject.hasOwnProperty(totalArr[i])) {
            stockObject[totalArr[i]] += Number(totalArr[i + 1]);
        } else {
            stockObject[totalArr[i]] = Number(totalArr[i + 1]);
        }
    }
                    
    Object.keys(stockObject).forEach(key => {
        console.log(`${key} -> ${stockObject[key]}`);
    });
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

/*
function storeProvision(stocks, ordered) {
    let finalList = {};

    for (let i = 0; i < stocks.length; i += 2) {
        finalList[stocks[i]] = Number(stocks[i + 1]);
    }

    for (let i = 0; i < ordered.length; i += 2) {
        ordered[i + 1] = Number(ordered[i + 1]);

        if (!finalList.hasOwnProperty(ordered[i])) {
            finalList[ordered[i]] = 0;
        }

        finalList[ordered[i]] += ordered[i + 1];
    }

    let entries = Object.entries(finalList);

    for (const [product, quantity] of entries) {
        console.log(`${product} -> ${quantity}`);
    }
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
*/
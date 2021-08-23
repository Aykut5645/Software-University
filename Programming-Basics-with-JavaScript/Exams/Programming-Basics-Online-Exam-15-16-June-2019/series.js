function series(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let seriesCount = Number(input[index]);
    index++;

    let seriesName = input[index];
    index++;

    let totalPriceSeries = 0;

    while (seriesName != undefined) {

        for (let i = seriesCount; i > 0; i--) {

            let currentPrice = Number(input[index]);
            index++;

            if (seriesName == "Thrones") {
                currentPrice *= 0.50;
            } else if (seriesName == "Lucifer") {
                currentPrice *= 0.60;
            } else if (seriesName == "Protector") {
                currentPrice *= 0.70;
            } else if (seriesName == "TotalDrama") {
                currentPrice *= 0.80;
            } else if (seriesName == "Area") {
                currentPrice *= 0.90;
            } 

            totalPriceSeries += currentPrice;

            seriesName = input[index];
            index++;
        }
    }

    let difference = Math.abs(budget - totalPriceSeries);

    if (totalPriceSeries <= budget) {
        console.log(`You bought all the series and left with ${difference.toFixed(2)} lv.`);
    } else {
        console.log(`You need ${difference.toFixed(2)} lv. more to buy the series!`);
    }
}

series([ '10', '3', 'Thrones', '5', 'Riverdale', '5', 'Gotham', '2' ]);
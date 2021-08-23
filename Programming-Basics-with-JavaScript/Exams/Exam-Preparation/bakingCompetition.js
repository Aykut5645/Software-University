function bakingCompetition(input) {
    let index = 0;
    let cookerCount = Number(input[index]);
    index++;
    
    let cookerName = input[index];
    index++;

    let totalCookiesCount = 0;
    let totalCakesCount = 0;
    let totalWafflesCount = 0;

    let counter = 0;

    while (counter < cookerCount) {
        counter++

        let bakingType = input[index];
        index++;

        let currentCookiesCount = 0;
        let currentCakesCount = 0;
        let currentWafflesCount = 0;

        while (bakingType != "Stop baking!") {

            let currentTypeCount = Number(input[index]);
            index++;

            if (bakingType == "cookies") {
                currentCookiesCount += currentTypeCount;
                totalCookiesCount += currentTypeCount;
            } else if (bakingType == "cakes") {
                currentCakesCount += currentTypeCount;
                totalCakesCount += currentTypeCount;
            } else if (bakingType == "waffles") {
                currentWafflesCount += currentTypeCount;
                totalWafflesCount += currentTypeCount;
            }

            bakingType = input[index];
            index++;
        }

        console.log(`${cookerName} baked ${currentCookiesCount} cookies, ${currentCakesCount} cakes and ${currentWafflesCount} waffles.`);

        cookerName = input[index];
        index++;   
    }

    let totalBakingCount = totalCookiesCount + totalCakesCount + totalWafflesCount;
    let totalBakingPrice = (totalCookiesCount * 1.50) + (totalCakesCount * 7.80) + (totalWafflesCount * 2.30);
    
    console.log(`All bakery sold: ${totalBakingCount}`);
    console.log(`Total sum for charity: ${totalBakingPrice.toFixed(2)} lv.`);
}

bakingCompetition([
    '2',            'Annie',
    'cakes',        '3',
    'waffles',      '6',
    'cookies',      '2',
    'Stop baking!', 'Petya',
    'waffles',      '8',
    'Stop baking!'
  ]);
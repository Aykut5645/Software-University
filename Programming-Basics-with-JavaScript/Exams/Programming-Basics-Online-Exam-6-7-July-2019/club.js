function club(input) {
    let index = 0;
    let desiredProfit = Number(input[index]);
    index++;

    let cocktail = input[index];
    index++;
    
    let count = input[index];
    index++;

    let currentCocktailPrice = 0;
    let totalPrice = 0;

    while (cocktail != "Party!" && cocktail != undefined) {

        let cocktailLength = cocktail.length;

        count = Number(count);

        currentCocktailPrice = cocktailLength * count;
        
        if (!(currentCocktailPrice % 2 == 0)) {
            currentCocktailPrice *= 0.75;
        }

        totalPrice += currentCocktailPrice;

        cocktail = input[index];
        index++;

        count = input[index];
        index++;
    }

    if (desiredProfit <= totalPrice) {
        console.log("Target acquired.");
        console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
    } else {
        let difference = Math.abs(desiredProfit - totalPrice)
        console.log(`We need ${difference.toFixed(2)} leva more.`);
        console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
    }
}

club([ '100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10' ]);
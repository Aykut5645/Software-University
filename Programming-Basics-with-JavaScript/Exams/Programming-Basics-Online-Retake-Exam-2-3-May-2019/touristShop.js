function touristShop(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let currentProductName = input[index];
    index++;
    let currentProductPrice = input[index];
    index++;

    let counter = 0;
    let totalPrice = 0;
    let isEnough = false;


    while (currentProductName != "Stop") {
        counter++;

        currentProductPrice = Number(currentProductPrice);

        if (counter % 3 == 0) {
            currentProductPrice /= 2;
        }

        totalPrice += currentProductPrice;

        budget -= currentProductPrice;

        if (budget < 0) {
            isEnough = true;
            break;
        }

        currentProductName = input[index];
        index++;
        currentProductPrice = input[index];
        index++;
    }

    if (isEnough) {
        budget = Math.abs(budget);
        console.log("You don't have enough money!");
        console.log(`You need ${budget.toFixed(2)} leva!`);
    } else {
        console.log(`You bought ${counter} products for ${totalPrice.toFixed(2)} leva.`);
    }
}

touristShop([
    '153.20', 'Backpack',
    '25.20', 'Shoes',
    '54', 'Sunglasses',
    '30', 'Stop'
]);
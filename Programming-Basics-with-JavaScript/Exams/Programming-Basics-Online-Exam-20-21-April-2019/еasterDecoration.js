function easterDecoration(input) {
    let index = 0;
    let clientCount = Number(input[index]);
    index++;

    let basket = 1.50;
    let wreath = 3.80;
    let chocolateBunny = 7;

    let itemsType = input[index];
    index++;

    let totalPrice = 0;

    for (let i = clientCount; i >= 1; i--) {

        let currentTotalPrice = 0;
        counter = 0;

        while (itemsType != "Finish") {

            switch (itemsType) {
                case "basket":
                    currentTotalPrice += basket;
                    break;
                case "wreath":
                    currentTotalPrice += wreath;
                    break;
                case "chocolate bunny":
                    currentTotalPrice += chocolateBunny;
                    break;
            }
            counter++;
            itemsType = input[index];
            index++;
        }

        if (counter % 2 == 0) {
            currentTotalPrice -= currentTotalPrice * 0.2;

        }
        totalPrice += currentTotalPrice;
        
        console.log(`You purchased ${counter} items for ${currentTotalPrice.toFixed(2)} leva.`);

        itemsType = input[index];
        index++;
    }

    let averagetotalPrice = totalPrice / clientCount;
    
    console.log(`Average bill per client is: ${averagetotalPrice.toFixed(2)} leva.`);
}

easterDecoration([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
]);
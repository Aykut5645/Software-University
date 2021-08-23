function energyBooster(input) {
    let fruitType = input[0];
    let setSize = input[1];
    let setCount = Number(input[2]);

    let currentPrice = 0;

    if (fruitType == "Watermelon") {
        switch (setSize) {
            case "small":
                currentPrice = 2 * 56;
                break;
            case "big":
                currentPrice = 5 * 28.70;
                break;
        }
    } else if (fruitType == "Mango") {
        switch (setSize) {
            case "small":
                currentPrice = 2 * 36.66;
                break;
            case "big":
                currentPrice = 5 * 19.60;
                break;
        }
    } else if (fruitType == "Pineapple") {
        switch (setSize) {
            case "small":
                currentPrice = 2 * 42.10;
                break;
            case "big":
                currentPrice = 5 * 24.80;
                break;
        }

    } else if (fruitType == "Raspberry") {
        switch (setSize) {
            case "small":
                currentPrice = 2 * 20;
                break;
            case "big":
                currentPrice = 5 * 15.20;
                break;
        }
    }

    let setPrice = setCount * currentPrice;
    
    if (setPrice >= 400 && setPrice <= 1000) {
        setPrice *= 0.85;
    } else if (setPrice > 1000) {
        setPrice *= 0.50;
    }

    console.log(`${setPrice.toFixed(2)} lv.`);
}

energyBooster([ 'Watermelon', 'big', '4' ]);
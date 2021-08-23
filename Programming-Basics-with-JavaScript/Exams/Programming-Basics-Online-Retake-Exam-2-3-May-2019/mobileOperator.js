function mobileOperator(input) {
    let contractTerm = input[0];
    let contractType = input[1];
    let mobileInternet = input[2];
    let monthCountForPay = Number(input[3]);

    let currentPrice = 0;

    if (contractTerm == "one") {
        switch (contractType) {
            case "Small":
                currentPrice = 9.98;
                break;
            case "Middle":
                currentPrice = 18.99;
                break;
            case "Large":
                currentPrice = 25.98;
                break;
            case "ExtraLarge":
                currentPrice = 35.99;
                break;
        }               
    } else if (contractTerm == "two") {
        switch (contractType) {
            case "Small":
                currentPrice = 8.58;
                break;
            case "Middle":
                currentPrice = 17.09;
                break;
            case "Large":
                currentPrice = 23.59;
                break;
            case "ExtraLarge":
                currentPrice = 31.79;
                break;
        }   
    }

    if (mobileInternet == "yes") {
        if (currentPrice <= 10) {
            currentPrice += 5.50;
        } else if (currentPrice <= 30) {
            currentPrice += 4.35;
        } else if (currentPrice > 30) {
            currentPrice += 3.85;
        }
    }

    let totalPrice = currentPrice * monthCountForPay;

    if (contractTerm == "two") {
        totalPrice *= 0.9625;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`)
}

mobileOperator([ 'two', 'Large', 'no', '10' ]);
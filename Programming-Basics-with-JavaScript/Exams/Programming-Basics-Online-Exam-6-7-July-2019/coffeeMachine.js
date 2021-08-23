function coffeeMachine(input) {
    let drink = input[0];
    let type = input[1];
    let count = Number(input[2]);

    let price = 0;

    if (drink == "Espresso") {

        switch (type) {
            case "Without":
                price = 0.90;
                break;
            case "Normal":
                price = 1.00;
                break;
            case "Extra":
                price = 1.20 ;
                break;
        }       
    } else if (drink == "Cappuccino") {

        switch (type) {
            case "Without":
                price = 1.00;
                break;
            case "Normal":
                price = 1.20;
                break;
            case "Extra":
                price = 1.60 ;
                break;
        }       
    } else if (drink == "Tea") {

        switch (type) {
            case "Without":
                price = 0.50;
                break;
            case "Normal":
                price = 0.60;
                break;
            case "Extra":
                price = 0.70 ;
                break;
        } 
    } 

    let totalPrice = price * count;

    if (type == "Without") {
        totalPrice *= 0.65;
    }

    if (drink == "Espresso" && count >= 5) {
        totalPrice *= 0.75;
    }

    if (totalPrice > 15.00) {
        totalPrice *= 0.80;
    }

    console.log(`You bought ${count} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine([ 'Tea', 'Extra', '3' ]);
function travelAgency(input) {
    let town = input[0];
    let packageType = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let priceForDay = 0;    

    if (town == "Bansko" || town == "Borovets") {

        switch (packageType) {
            case "withEquipment":
                priceForDay = 100;

                if (vip == "yes") {
                    priceForDay *= 0.90;
                }
                break;
            case "noEquipment":
                priceForDay = 80;

                if (vip == "yes") {
                    priceForDay *= 0.95;
                }
                break;
        } 
    } else if (town == "Varna" || town == "Burgas") {

        switch (packageType) {
            case "withBreakfast":
                priceForDay = 130;

                if (vip == "yes") {
                    priceForDay *= 0.88;
                }
                break;
            case "noBreakfast":
                priceForDay = 100;

                if (vip == "yes") {
                    priceForDay *= 0.93;
                }
                break;
        } 
    }

    let totalPrice = priceForDay * days;

    if (days > 7) {
        totalPrice -= priceForDay;
    }

    if (days == 0) {
        console.log(`Days must be positive number!`);
    } else if (totalPrice != 0.00) {
        console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
    } else {
        console.log(`Invalid input!`);
    }
}

travelAgency([ "Gabrovo", 
               "noBreakfast",
               "no",
               "3 "
                ]);

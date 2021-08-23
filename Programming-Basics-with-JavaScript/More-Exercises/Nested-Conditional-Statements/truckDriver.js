function truckDriver(arg1, arg2) {
    let seasonType = arg1;
    let kmOnMouth = Number(arg2);

    let money = 0;

    if (kmOnMouth <= 5000 ) {
        
        switch (seasonType) {
            case "Autumn":
            case "Spring":
                money = 0.75;
                break;
            case "Summer":
                money = 0.90;
                break;
            case "Winter":
                money = 1.05;
                break;
        }
    } else if (5000 < kmOnMouth && kmOnMouth <= 10000) {
        
        switch (seasonType) {
            case "Autumn":
            case "Spring":
                money = 0.95;
                break;
            case "Summer":
                money = 1.10;
                break;
            case "Winter":
                money = 1.25;
                break;
        }
    } else if (10000 < kmOnMouth && kmOnMouth <= 20000) {

        switch (seasonType) {
            case "Autumn":
            case "Spring":
            case "Summer":
            case "Winter":
                money = 1.45;
                break;
        }
    }

    let moneyEarning = (kmOnMouth * money) * 4;
    moneyEarning *= 0.90; 

    console.log(moneyEarning.toFixed(2));
}

truckDriver("Summer", "3455");
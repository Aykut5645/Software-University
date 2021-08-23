function carToGo(arg1, arg2) {
    let budget = Number(arg1);
    let seasonType = arg2;

    let classType = 0;
    let carType = 0;
    let carPrice = 0;

    if (budget <= 100) {
        classType = "Economy class";

        switch (seasonType) {
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.35;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = budget * 0.65;
                break;
        }

    } else if (budget > 100 && budget <= 500) {
        classType = "Compact class";

        switch (seasonType) {
            case "Summer":
                carType = "Cabrio";
                carPrice = budget * 0.45;
                break;
            case "Winter":
                carType = "Jeep";
                carPrice = budget * 0.8;
                break;
        }

    } else if (budget > 500) {
        classType = "Luxury class";

        switch (seasonType) {
            case "Summer":
            case "Winter":
                carType = "Jeep"
                carPrice = budget * 0.9;
                break;
        }
    }

    console.log(`${classType}`);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}


carToGo("70.50", "Winter");
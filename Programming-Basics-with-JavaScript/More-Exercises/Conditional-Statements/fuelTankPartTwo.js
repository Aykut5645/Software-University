function fuelTankPartTwo(arg1, arg2, arg3) {
    let fuelType = arg1.toLowerCase();
    let fuelLitres = Number(arg2);
    let clubCard = arg3; 

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;

    let loadedFuel = 0;

    if (clubCard == "No" && fuelType == "gasoline") {
        loadedFuel = fuelLitres * gasolinePrice;
    } else if (clubCard == "No" && fuelType == "diesel") {
        loadedFuel = fuelLitres * dieselPrice;
    } else if(clubCard == "No" && fuelType == "gas") {
        loadedFuel = fuelLitres * gasPrice;
    }

    if (clubCard == "Yes" && fuelType == "gasoline") {
        let discount = 0.18;
        gasolinePrice = gasolinePrice - discount;
        loadedFuel = fuelLitres * gasolinePrice;
    } else if (clubCard == "Yes" && fuelType == "diesel") {
        let discount = 0.12;
        dieselPrice = dieselPrice - discount;
        loadedFuel = fuelLitres * dieselPrice;
    } else if (clubCard == "Yes" && fuelType == "gas") {
        let discount = 0.08;
        gasPrice = gasPrice - discount;
        loadedFuel = fuelLitres * gasPrice;
    }

    if (fuelLitres < 20) {

         console.log(`${loadedFuel.toFixed(2)} lv.`);
    } else if (fuelLitres > 25) {
        loadedFuel = loadedFuel * 0.90;

        console.log(`${loadedFuel.toFixed(2)} lv.`);
    } else if (fuelLitres >= 20 && fuelLitres <= 25) {
        loadedFuel = loadedFuel * 0.92;

        console.log(`${loadedFuel.toFixed(2)} lv.`);
    }
}

fuelTankPartTwo("Gasoline", 25, "No");
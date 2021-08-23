function fuelTankPartOne(arg1, arg2) {
    let fuelType = arg1;
    let fuelLitres = Number(arg2);

    if (fuelLitres < 25 && fuelType == "diesel") {

        console.log(`Fill your tank with ${fuelType}!`);
    } else if (fuelLitres < 25 && fuelType == "gasoline") {

        console.log(`Fill your tank with ${fuelType}!`);
    } else if (fuelLitres < 25 && fuelType == "gas") {

        console.log(`Fill your tank with ${fuelType}!`);
    } else if (fuelLitres >= 25 && fuelType == "diesel") {

        console.log(`You have enough ${fuelType}.`);
    } else if (fuelLitres >= 25 && fuelType == "gasoline") {
    
        console.log(`You have enough ${fuelType}.`);
    } else if (fuelLitres >= 25 && fuelType == "gas") {
    
        console.log(`You have enough ${fuelType}.`);
    } else {

        console.log(`Invalid fuel!`);
    }
}

fuelTankPartOne("Kerosene", "200");
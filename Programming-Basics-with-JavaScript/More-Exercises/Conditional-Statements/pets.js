function pets(arg1, arg2, arg3, arg4, arg5) {
    let daysCount = Number(arg1);
    let leftFoodKg = Number(arg2);
    let foodDayDogKg = Number(arg3);
    let fooDayCatKg = Number(arg4);
    let foodDayTurtleGr = Number(arg5);

    let needFoodDog = daysCount * foodDayDogKg;
    let needFoodCat = daysCount * fooDayCatKg;
    let needFoodTurtle = (daysCount * foodDayTurtleGr) / 1000;

    let food = needFoodDog + needFoodCat + needFoodTurtle;
    
    if (food <= leftFoodKg) {
        let result = Math.floor(leftFoodKg - food);

        console.log(`${result} kilos of food left.`);
    } else {
        let result = Math.ceil(food - leftFoodKg);

        console.log(`${result} more kilos of food are needed.`);
    }
}

pets(2, 10, 1, 1, 1200);
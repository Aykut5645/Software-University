function catWalking([arg1, arg2, arg3]) {
    let minutesWalkInDay = Number(arg1);
    let walkCountInDay = Number(arg2);
    let caloriesInDay = Number(arg3);

    let mustBurnCalories = caloriesInDay - (50 * 1/100 * caloriesInDay);
    let burnCaloriesInDay = (minutesWalkInDay * 5) * walkCountInDay;

    if (burnCaloriesInDay >= mustBurnCalories) {
        
        console.log (`Yes, the walk for your cat is enough. Burned calories per day: ${burnCaloriesInDay}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCaloriesInDay}.`);
    }
}

catWalking(["15", "2", "500"]);
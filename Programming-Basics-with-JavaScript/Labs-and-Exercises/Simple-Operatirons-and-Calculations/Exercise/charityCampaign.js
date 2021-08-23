function charityCompaign(arg1, arg2, arg3, arg4, arg5) {
    let countDays = arg1;
    let countMakers = arg2;
    let countCakes = arg3;
    let countWaffles = arg4;
    let countPancakes = arg5;

    let sumCakesForOneDay = countCakes * 45;
    let sumWafflesForOneDay = countWaffles * 5.80;
    let sumPancakesForOneDay = countPancakes * 3.20;

    let allSumForOneDay = (sumCakesForOneDay + sumWafflesForOneDay + sumPancakesForOneDay) * countMakers;
    let allSumForAllCompany = allSumForOneDay * countDays;
    let sumWithoutCosts = allSumForAllCompany - allSumForAllCompany * 1/8;

    console.log(sumWithoutCosts.toFixed(2));
}

charityCompaign(20, 8, 14, 30, 16,);
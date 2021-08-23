function easterBakery([arg1, arg2, arg3, arg4, arg5]) {
    let flourPrice = Number(arg1);
    let flourWeight = Number(arg2);
    let sugarWeight = Number(arg3);
    let eggBarkCount = Number(arg4);
    let yeastCount = Number(arg5);

    let sugarPrice = flourPrice - (25 / 100 * flourPrice);
    let eggPrice = flourPrice + (10 / 100 * flourPrice);
    let yeastPrice = sugarPrice - (80 / 100 * sugarPrice);

    let flourSum = flourPrice * flourWeight;
    let sugarSum = sugarPrice * sugarWeight;
    let eggSum = eggPrice * eggBarkCount;
    let yeastSum = yeastPrice * yeastCount;
    let totalSum = flourSum + sugarSum + eggSum + yeastSum;

    console.log(totalSum.toFixed(2));
}

easterBakery([63.44, 3.57, 6.35, 8, 2]);
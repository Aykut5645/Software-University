function alcoholMarket(arg1, arg2, arg3, arg4, arg5) {
    let wiskyPrice = arg1;
    let beerLiters = arg2;
    let wineLitres = arg3;
    let rakiLitres = arg4;
    let wiskyLiters = arg5;

    let rakiPrice = wiskyPrice / 2;
    let winePrice = rakiPrice - (40 * 1/100 * rakiPrice);
    let beerPrice = rakiPrice - (80 * 1/100 * rakiPrice);

    let rakiSum = rakiLitres * rakiPrice;
    let wineSum = wineLitres * winePrice;
    let beerSum = beerLiters * beerPrice;
    let wiskySum = wiskyLiters * wiskyPrice;

    totalSum = rakiSum + wineSum + beerSum + wiskySum;

    console.log(totalSum.toFixed(2));
}

alcoholMarket(50, 10, 3.5, 6.5, 1);
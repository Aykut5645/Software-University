function vegetableMarket(arg1, arg2, arg3, arg4) {
    let priceVegetables = Number(arg1);
    let priceFruits = Number(arg2);
    let weightVegetables = Number(arg3);
    let weightFruits = Number(arg4);

    let totalPriceVeg = priceVegetables * weightVegetables;
    let totalPriceFruits = priceFruits * weightFruits;
    let totalVegFruitsPrice = totalPriceVeg + totalPriceFruits;

    let priceChange = totalVegFruitsPrice / 1.94;
    console.log(priceChange.toFixed(2));
}

vegetableMarket("0.194", "19.4", "10", "10");
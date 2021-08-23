function suppliesForSchool([arg1, arg2, arg3, arg4]) {
    let countPens = Number(arg1);
    let countMarkers = Number(arg2);
    let boardCleanerL = Number(arg3);
    let percentage = Number(arg4);

    let pricePens = countPens * 5.80;
    let priceMarkers = countMarkers * 7.20;
    let priceBoardCleaner = boardCleanerL * 1.20;

    let sumSupplies = pricePens + priceMarkers + priceBoardCleaner;
    let priceWithDiscount = sumSupplies - ((sumSupplies * percentage) / 100);

    console.log(priceWithDiscount.toFixed(3));
}

suppliesForSchool(["2", "3", "2.5", "25"]);
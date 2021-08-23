function easterLunch([arg1, arg2, arg3]) {
    let easterBreadCount = Number(arg1);
    let eggBarkCount = Number(arg2);
    let cookiesCount = Number(arg3);

    let easterBreadPrice = easterBreadCount * 3.20;
    let eggBarkPrice = eggBarkCount * 4.35;
    let cookiesPrice = cookiesCount * 5.40;
    let paintForEggsPrice = eggBarkCount * 12 * 0.15;
    let totalSum = easterBreadPrice + eggBarkPrice + cookiesPrice + paintForEggsPrice;
    
    console.log(totalSum.toFixed(2));
}

easterLunch(["3", "2", "3"]);
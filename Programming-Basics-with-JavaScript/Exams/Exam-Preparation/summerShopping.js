function summerShopping(input) {
    let budget = Number(input[0]);
    let beachPowelPrice = Number(input[1]);
    let percentDiscount = Number(input[2]);

    let umbrellaPrice = 2/3 * beachPowelPrice;
    let flipFlopsPrice = umbrellaPrice * 0.75;
    let beachBagPrice = 1/3 * (beachPowelPrice + flipFlopsPrice);

    let totalSum = beachPowelPrice + umbrellaPrice + flipFlopsPrice + beachBagPrice;

    let finalSum = totalSum * ((100 - percentDiscount) / 100);

    let difference = Math.abs(budget - finalSum);

    if (finalSum <= budget) {
        console.log(`Annie's sum is ${finalSum.toFixed(2)} lv. She has ${difference.toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${finalSum.toFixed(2)} lv. She needs ${difference.toFixed(2)} lv. more.`);
    }
}  

summerShopping([ '40', '15', '5']);
function flowerShop(arg1, arg2, arg3, arg4, arg5) {
    let magnoliaCount = Number(arg1);
    let hyacinthCount = Number(arg2);
    let roseCount = Number(arg3);
    let cactusCount = Number(arg4);
    let giftPrice = Number(arg5)

    let magnoliaPrice = 3.25 ;
    let hyacinthPrice = 4;
    let rosePrice = 3.50;
    let cactusPrice = 8;

    let magnoliaSum = magnoliaCount * magnoliaPrice;
    let hyacinthSum = hyacinthCount * hyacinthPrice;
    let roseSum = roseCount * rosePrice;
    let cactusSum = cactusCount * cactusPrice;

    let totalPriceWithTax = magnoliaSum + hyacinthSum + roseSum + cactusSum;
    let totalPrice = totalPriceWithTax * 0.95;
    
    if (totalPrice >= giftPrice) {
        leftSum = totalPrice - giftPrice;

        console.log(`She is left with ${Math.floor(leftSum)} leva.`);
    } else {
        needSum = giftPrice - totalPrice;

        console.log(`She will have to borrow ${Math.ceil(needSum)} leva.`);
    }
}

flowerShop(2, 3, 5, 1, 50);
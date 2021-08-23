function foodDelivery([arg1, arg2, arg3]) {
    let chichenCount = Number(arg1);
    let fishCount = Number(arg2);
    let vegetarianCount = Number(arg3);

    let chickenPrice = chichenCount * 10.35;
    let fishPrice = fishCount * 12.40;
    let vegetarianPrice = vegetarianCount * 8.15;
    let desertPrice = (chickenPrice + fishPrice + vegetarianPrice) / 5;
    let deliveryPrice = 2.50;
    
    let totalPrice = chickenPrice + fishPrice + vegetarianPrice + desertPrice + deliveryPrice;

        console.log(`Total: ${totalPrice.toFixed(2)}`);
}

foodDelivery(["1", "1", "1"]);
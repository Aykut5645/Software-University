function easterCozonacs(arr) {
    let budget = Number(arr[0]);
    let priceKiloFloor = Number(arr[1]);

    let eggsPackPrice = priceKiloFloor * 0.75;
    let litrMilk = priceKiloFloor + (priceKiloFloor * 0.25);
    let milkForCoz = litrMilk / 4;

    let priceOneCoz = priceKiloFloor + eggsPackPrice + milkForCoz;

    let eggs = 0;
    let cozCount = 0;

    while (budget >= priceOneCoz) {
        budget -= priceOneCoz;
        cozCount++;
        eggs += 3;

        if (cozCount % 3 == 0) {
            eggs -= (cozCount - 2);
        }
    }

    console.log(`You made ${cozCount} cozonacs! Now you have ${eggs} eggs and ${budget.toFixed(2)}BGN left.`);
}

//easterCozonacs(['20.50', '1.25']);
easterCozonacs([ '15.75', '1.4' ]);
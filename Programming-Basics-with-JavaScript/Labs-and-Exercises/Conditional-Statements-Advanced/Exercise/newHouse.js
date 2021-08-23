function newHouse(arg1, arg2 ,arg3) {
    let flowersType = arg1;
    let flowersCount = Number(arg2);
    let budget = Number(arg3);

    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;

    rosesPrice = flowersCount * rosesPrice;
    dahliasPrice = flowersCount * dahliasPrice;
    tulipsPrice = flowersCount * tulipsPrice;
    narcissusPrice = flowersCount * narcissusPrice;
    gladiolusPrice = flowersCount * gladiolusPrice;

    if (flowersCount > 80 && flowersType == "Roses") {
        rosesPrice *= 0.90;
    } else if (flowersCount > 90 && flowersType == "Dahlias") {
        dahliasPrice *= 0.85;
    } else if (flowersCount > 80 && flowersType == "Tulips") {
        tulipsPrice *= 0.85;
    } else if (flowersCount < 120 && flowersType == "Narcissus") {
        narcissusPrice *= 1.15;
    } else if (flowersCount < 80 && flowersType == "Gladiolus") {
        gladiolusPrice *= 1.20;
    }

    if (flowersType == "Roses") {

        if (rosesPrice <= budget) {
            let leftOrNeedSum = Math.abs(rosesPrice - budget);
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${leftOrNeedSum.toFixed(2)} leva left.`);
        } else {
            let leftOrNeedSum = Math.abs(rosesPrice - budget);
            console.log(`Not enough money, you need ${leftOrNeedSum.toFixed(2)} leva more.`)
        }

    } else if (flowersType == "Dahlias") {

        if (dahliasPrice <= budget) {
            let leftOrNeedSum = Math.abs(dahliasPrice - budget);
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${leftOrNeedSum.toFixed(2)} leva left.`);
        } else {
            let leftOrNeedSum = Math.abs(dahliasPrice - budget);
            console.log(`Not enough money, you need ${leftOrNeedSum.toFixed(2)} leva more.`)
        }

    } else if (flowersType == "Tulips") {

        if (tulipsPrice <= budget) {
            let leftOrNeedSum = Math.abs(tulipsPrice - budget);
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${leftOrNeedSum.toFixed(2)} leva left.`);
        } else {
            let leftOrNeedSum = Math.abs(tulipsPrice - budget);
            console.log(`Not enough money, you need ${leftOrNeedSum.toFixed(2)} leva more.`)
        }

    } else if (flowersType == "Narcissus") {

        if (narcissusPrice <= budget) {
            let leftOrNeedSum = Math.abs(narcissusPrice - budget);
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${leftOrNeedSum.toFixed(2)} leva left.`);
        } else {
            let leftOrNeedSum = Math.abs(narcissusPrice - budget);
            console.log(`Not enough money, you need ${leftOrNeedSum.toFixed(2)} leva more.`)
        }
        
    } else if (flowersType == "Gladiolus") {

        if (gladiolusPrice <= budget) {
            let leftOrNeedSum = Math.abs(gladiolusPrice - budget);
            console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${leftOrNeedSum.toFixed(2)} leva left.`);
        } else {
            let leftOrNeedSum = Math.abs(gladiolusPrice - budget);
            console.log(`Not enough money, you need ${leftOrNeedSum.toFixed(2)} leva more.`)
        }
    }
}

newHouse("Narcissus", 119, 360);
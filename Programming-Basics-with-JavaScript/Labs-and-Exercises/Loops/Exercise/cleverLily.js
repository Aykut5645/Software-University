function cleverLily(arg1, arg2, arg3) {
    let oldLily = Number(arg1);
    let washingMachinePrice = Number(arg2);
    let toyPrice = Number(arg3);

    let money = 0;
    let toyCount = 0;
    let bonusMoney = 0;

    for (let i = 1; i <= oldLily; i++) {

        if (i % 2 == 0) {
            bonusMoney += 10;
            money += bonusMoney; 
            money--;
        }

        if (i % 2 == 1) {
            toyCount++;
        }
    }

    toyPrice *= toyCount;
    money += toyPrice;

    let difference = Math.abs(money - washingMachinePrice);

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${difference.toFixed(2)}`);
    } else {
        console.log(`No! ${difference.toFixed(2)}`);
    }
}

cleverLily(
    10,
    170.00,
    6
)
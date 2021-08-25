function solve(input1, input2, input3) {
    let distance = input1;
    let passengers = input2;
    let dieselPriceL = input3;

    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let neededMoney = neededFuel * dieselPriceL;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

solve(260, 9, 2.49);
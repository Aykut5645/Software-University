function solve(input) {
    let currentMoney = Number(input[0]);
    let lastYear = Number(input[1]);

    let currentYear = 1800;
    let currentAge = 18;

    for (let i = currentYear; i <= lastYear; i++) {
        if (i % 2 == 0) {
            currentMoney -= 12000;
        } else if (i % 2 == 1) {
            currentMoney -= 12000 + (currentAge * 50);
        }

        currentAge++;
    }

    if (currentMoney < 0) {
        currentMoney = Math.abs(currentMoney);
        console.log(`He will need ${currentMoney.toFixed(2)} dollars to survive.`);
    } else {
        console.log(`Yes! He will live a carefree life and will have ${currentMoney.toFixed(2)} dollars left.`);
    }
}

solve(['50000', '1802']);
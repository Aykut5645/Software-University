function godzillaVsKong(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let еxtrasCount = Number(arg2);
    let OneDressPrice = Number(arg3);

    let decorPrice = 10 * 1/100 * budget;
    let totalDressPrice = еxtrasCount * OneDressPrice;

    if (еxtrasCount > 150) {
        totalDressPrice = totalDressPrice - (10 * 1/100 * totalDressPrice);
    }

    let movieBudget = decorPrice + totalDressPrice;

    if (budget >= movieBudget) {
        let leftMoney = budget - movieBudget;

        console.log(`Action!`);
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    } else if (budget < movieBudget) {
        let needMoney = Math.abs(budget - movieBudget);
        
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${needMoney.toFixed(2)} leva more.`);
    }
}

godzillaVsKong("9587.88", "222", "55.68");
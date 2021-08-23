function easterBake(input) {
    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;

    let oneSugarPrice = 950;
    let oneFlourPrice = 750;
    
    let totalSugar = 0;
    let totalFlour = 0;

    let maxAmountSugar = Number.MIN_SAFE_INTEGER;
    let maxAmountFlour = Number.MIN_SAFE_INTEGER;

    for (let i = easterBreadCount; i >= 1; i--) {
        let currentAmountSugar = Number(input[index]);
        index++;
        let currentAmountFlour = Number(input[index]);
        index++;

        totalSugar += currentAmountSugar;
        totalFlour += currentAmountFlour;

        if (currentAmountSugar > maxAmountSugar) {
            maxAmountSugar = currentAmountSugar;
        }

        if (currentAmountFlour > maxAmountFlour) {
            maxAmountFlour = currentAmountFlour;
        }
    }

    let needPackageSugar = Math.ceil(totalSugar / oneSugarPrice);
    let needPackageFlour = Math.ceil(totalFlour / oneFlourPrice);

    console.log(`Sugar: ${needPackageSugar}`);
    console.log(`Flour: ${needPackageFlour}`);
    console.log(`Max used flour is ${maxAmountFlour} grams, max used sugar is ${maxAmountSugar} grams.`);
}

easterBake([
    '3', '400',
    '350', '250',
    '300', '450',
    '380', ''
]);
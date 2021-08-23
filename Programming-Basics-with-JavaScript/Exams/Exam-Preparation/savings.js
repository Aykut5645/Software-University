function savings(input) {
    let incomeForMonth = Number(input[0]);
    let monthCount = Number(input[1]);
    let needSumForCosts = Number(input[2]);

    let sumForContingencies = incomeForMonth * 0.3;
    
    let savingSum = incomeForMonth - (sumForContingencies + needSumForCosts);
    let totalSavingSum =savingSum * monthCount;

    let percentSaving = (savingSum / incomeForMonth) * 100;

    console.log(`She can save ${percentSaving.toFixed(2)}%`);
    console.log(`${totalSavingSum.toFixed(2)}`)
}

savings([ '1500', '3', '800' ]);
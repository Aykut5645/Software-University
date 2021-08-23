function changeBureau([arg1, arg2, arg3]) {
    let countBitcoin = arg1 * 1168;
    let countYuan = arg2 * 0.15;
    let comission = arg3;
    let oneDollarInBg = 1.76;
    let oneEuroInBg = 1.95;

    let yuansAndDollarsInBg = countYuan * oneDollarInBg;
    let moneysInBg = (countBitcoin + yuansAndDollarsInBg) / oneEuroInBg;

    let result = moneysInBg - ((moneysInBg * comission) / 100);
    console.log(result.toFixed(2));
}

changeBureau([1, 5, 5]);
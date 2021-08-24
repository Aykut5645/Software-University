function money([arg1, arg2, arg3]) {
    let bitcoinCount = Number(arg1);
    let yuanCount = Number(arg2);
    let comission = Number(arg3);

    let oneBitcoin = 1168;
    let oneYuanInDollar = 0.15 
    let oneDollarInLv = 1.76;
    let oneEuroInLv = 1.95;
    
    let dollars = yuanCount * oneYuanInDollar;
    let dollarsInLv = dollars * oneDollarInLv;
    let bitcoinToLv = oneBitcoin * bitcoinCount;
    let leva = bitcoinToLv + dollarsInLv;

    let euros = leva / oneEuroInLv;
    comission = comission/100 * euros;

    let result = euros - comission

    console.log(result.toFixed(2));
}

money([7,
    50200.12,
    3]);
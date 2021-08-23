function usdToBgn(arg) {
    let bgLv = Number(arg);
    let usd = 1.79549;
    result = arg * usd;

    console.log(result.toFixed(2));
}

usdToBgn("20");
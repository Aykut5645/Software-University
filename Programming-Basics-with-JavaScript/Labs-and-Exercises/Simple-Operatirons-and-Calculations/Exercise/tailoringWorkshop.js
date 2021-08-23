function tailoringWorkshop(arg1, arg2, arg3) {
    let tables = Number(arg1);
    let lenght = Number(arg2);
    let wight = Number(arg3);
    let usdRate = 1.85;

    let area = tables * (lenght + 2 * 0.30) * (wight + 2 * 0.30);
    let squareArea = tables * (lenght / 2) * (lenght / 2);

    let usdPrice = area * 7 + squareArea * 9;
    let bgnPrice = usdPrice * usdRate;

    console.log(`${usdPrice.toFixed(2)} USD`);
    console.log(`${bgnPrice.toFixed(2)} BGN`);
}

tailoringWorkshop("5", "1.00", "0.50");
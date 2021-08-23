function fishland(arg1, arg2, arg3, arg4, arg5) {
    let mackerelPrice = Number(arg1);
    let spratPrice = Number(arg2);
    let chamoisKg = Number(arg3);
    let horseMackerelKg = Number(arg4);
    let musselKg = Number(arg5);

    let chamoisPrice = mackerelPrice + (60/100 * mackerelPrice)
    let chamoisSum = chamoisPrice * chamoisKg;
    let horseMackerelPrice = spratPrice + (80/100 * spratPrice);
    let horseMackerelSum = horseMackerelPrice * horseMackerelKg;
    let musselSum = 7.50 * musselKg;

    let check = chamoisSum + horseMackerelSum + musselSum;

    console.log(check.toFixed(2));
}

fishland("6.90", "4.20", "1.5", "2.5", "1");
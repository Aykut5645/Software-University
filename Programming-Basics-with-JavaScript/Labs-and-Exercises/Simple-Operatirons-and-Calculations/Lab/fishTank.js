function fishTank(arg1, arg2, arg3, arg4) {
    let lenghtCm = Number(arg1);
    let windthCm = Number(arg2);
    let hightCm = Number(arg3);
    let percentCm = Number(arg4);

    let volume = lenghtCm * windthCm * hightCm;
    let capacity = volume * 0.001;
    let realPercent = percentCm * 0.01;
    let finalResult = capacity * (1 - realPercent);

    console.log(finalResult.toFixed(3));
}

fishTank("85", "75", "47", "17");
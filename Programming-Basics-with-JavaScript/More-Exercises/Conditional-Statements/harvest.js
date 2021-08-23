function harvest(arg1, arg2, arg3, arg4) {
    let vineyardArea = Number(arg1);
    let grapeOneSqM = Number(arg2);
    let needLitrWine = Number(arg3);
    let workerCount = Number(arg4);

    let sumGrape = vineyardArea * grapeOneSqM;
    let wineLitres = (sumGrape * 0.4) / 2.5;

    if (wineLitres >= needLitrWine) {
        let leftwine = wineLitres - needLitrWine;
        let wineForWorker = leftwine / workerCount;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLitres)} liters.`);
        console.log(`${Math.ceil(leftwine)} liters left -> ${Math.ceil(wineForWorker)} liters per person.`);
    } else {
        let needWine = needLitrWine - wineLitres;

        console.log(`It will be a tough winter! More ${Math.floor(needWine)} liters wine needed.`);
    }
}

harvest("1020", "1.5", "425", "4");
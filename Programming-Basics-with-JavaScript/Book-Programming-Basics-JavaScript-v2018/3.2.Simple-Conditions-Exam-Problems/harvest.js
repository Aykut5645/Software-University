function harvest(input) {
    let wineyardArea = Number(input[0]);
    let grapeSquareMeter = Number(input[1]);
    let neededLiters = Number(input[2]);
    let workers = Number(input[3]);

    let areaForWine = wineyardArea * 0.4;
    let grapesForWine = areaForWine * grapeSquareMeter;
    let litresWine = grapesForWine / 2.5;

    let wineLeft = Math.abs(neededLiters - litresWine);
    let wineForWorkers = wineLeft / workers;

    if (litresWine < neededLiters) {
        console.log(`It will be a tough winter! More ${Math.floor(wineLeft)} liters wine needed.`);
    } else if (litresWine >= neededLiters) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litresWine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineForWorkers)} liters per person.`);
    }
}

harvest([650, 2, 175, 3]);
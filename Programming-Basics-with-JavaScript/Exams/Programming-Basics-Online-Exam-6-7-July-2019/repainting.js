function repainting(input) {
    let nylonNeed = Number(input[0]);
    let paintNeed = Number(input[1]);
    let amountThinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let bagPrice = 0.40;

    nylonPrice = (nylonNeed + 2) * nylonPrice;
    paintPrice = ((paintNeed + (paintNeed / 0.1)) * paintPrice) * 0.1;
    thinnerPrice *= amountThinner;
    
    let totalCost = nylonPrice + paintPrice + thinnerPrice + bagPrice;

    let workersCost = (totalCost * 0.3) * hours;

    let finalSum = totalCost + workersCost;
    
    console.log(`Total expenses: ${finalSum.toFixed(2)} lv.`);
}

repainting([ '10', '11', '4', '8' ]);
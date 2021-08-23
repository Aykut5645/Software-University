function solve(input) {
    let cargoCounts = Number(input[0]);

    let minibus = 200;
    let truck = 175;
    let train = 120;

    let minibusCountTonе = 0;
    let truckCountTone = 0;
    let trainCountTone = 0;
    
    let totalCountTone = 0;

    for (let i = 1; i <= cargoCounts; i++) {
        let currentTone = Number(input[i]);

        if (currentTone <= 3) {
            minibusCountTonе += currentTone;
        } else if (currentTone > 3 && currentTone < 12) {
            truckCountTone += currentTone;
        } else {
            trainCountTone += currentTone;
        }

        totalCountTone =  minibusCountTonе + truckCountTone + trainCountTone;
    }  

    let averagePriceTone = ((minibusCountTonе * minibus) + (truckCountTone * truck) + (trainCountTone * train)) / totalCountTone; 

    let minibusPercent = (minibusCountTonе / totalCountTone) * 100;
    let truckPercent = (truckCountTone / totalCountTone) * 100;
    let trainPercent = (trainCountTone / totalCountTone) * 100;

    console.log(`${averagePriceTone.toFixed(2)}`);
    console.log(`${minibusPercent.toFixed(2)}%`);
    console.log(`${truckPercent.toFixed(2)}%`);
    console.log(`${trainPercent.toFixed(2)}%`);
}

solve([ '4', '1', '5', '16', '3' ]);
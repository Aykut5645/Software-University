function counterStrike(arr) {
    let initialEnergy = arr.shift();

    let index = 0;
    let currentDistance = arr[index];
    let wonBattles = 0;
    let isWin = true;

    while (currentDistance != 'End of battle') {
        currentDistance = Number(currentDistance);
        
        if (initialEnergy - currentDistance >= 0) {
            initialEnergy -= currentDistance;
            wonBattles++;
        } else {
            isWin = false;
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
            break;
        }
        
        if (wonBattles % 3 == 0) {
            initialEnergy += wonBattles;
        }


        index++;
        currentDistance = arr[index];
    }

    if (isWin) {
        console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`);
    }
}

counterStrike(['100', '10', '10', '10', '1', '2', '3', '73', '10']);
//counterStrike([ '200', '54', '14', '28', '13', 'End of battle' ]);
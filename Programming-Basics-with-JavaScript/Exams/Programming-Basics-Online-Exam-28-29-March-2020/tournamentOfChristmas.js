function tournamentOfChristmas(input) {
    let index = 0;
    let tournamentDaysCount = Number(input[index]);
    index++;

    let sportType = input[index];
    index++;

    let totalMoney = 0;
    let totalWinCounter = 0;
    let totalLoseCounter = 0;

    let isLose = false;

    for (let i = 1; i <= tournamentDaysCount; i++) {

        let moneyForDay = 0;
        let winCounter = 0;
        let loseCounter = 0;

        while (sportType != "Finish") {
            let currentResult = input[index];
            index++;

            if (currentResult == "win") {
                moneyForDay += 20;
                winCounter++;
            } else {
                loseCounter++;
            }

            sportType = input[index];
            index++;
        }

        totalWinCounter += winCounter;
        totalLoseCounter += loseCounter;

        if (winCounter > loseCounter) {
            moneyForDay += moneyForDay * 0.1;
        }

        totalMoney += moneyForDay;

        sportType = input[index];
        index++;
    }

    if (totalWinCounter > totalLoseCounter) {
        totalMoney += totalMoney * 0.2;
    } else {
        isLose = true;
    }

    if (isLose) {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas([
    '3', 'darts',
    'lose', 'handball',
    'lose', 'judo',
    'win', 'Finish',
    'snooker', 'lose',
    'swimming', 'lose',
    'squash', 'lose',
    'table tennis', 'win',
    'Finish', 'volleyball',
    'win', 'basketball',
    'win', 'Finish'
]);
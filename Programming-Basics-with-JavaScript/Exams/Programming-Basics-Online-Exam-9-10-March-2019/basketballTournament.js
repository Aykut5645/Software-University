function basketballTournament(input) {
    let index = 0;
    let tournamentName = input[index];
    index++;

    let totalMathesCount = 0;
    let winsCount = 0;
    let lossesCount = 0;

    while (tournamentName != "End of tournaments") {
        let matchesCount = Number(input[index]);
        index++;

        totalMathesCount += matchesCount;

        let currentGame = 0;
        let difference = 0;

        for (let i = matchesCount; i > 0; i--) {
            let dessiTeamPoints = Number(input[index]);
            index++;
            let anotherTeamPoints = Number(input[index]);
            index++;

            currentGame++;

            if (dessiTeamPoints > anotherTeamPoints) {
                difference = dessiTeamPoints - anotherTeamPoints;
                winsCount++;
                console.log(`Game ${currentGame} of tournament ${tournamentName}: win with ${difference} points.`);
            } else {
                difference = anotherTeamPoints - dessiTeamPoints;
                lossesCount++;
                console.log(`Game ${currentGame} of tournament ${tournamentName}: lost with ${difference} points.`);
            }
        }

        tournamentName = input[index];
        index++;
    }

    let winsPercent = (winsCount / totalMathesCount) * 100;
    let lossesPercent = (lossesCount / totalMathesCount) * 100;

    console.log(`${winsPercent.toFixed(2)}% matches win`);
    console.log(`${lossesPercent.toFixed(2)}% matches lost`);
}

basketballTournament([
    'Dunkers', '2',
    '75', '65',
    '56', '73',
    'Fire Girls', '3',
    '67', '34',
    '83', '98',
    '66', '45',
    'End of tournaments', ''
]);
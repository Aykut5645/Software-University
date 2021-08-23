function solve(input) {
    let index = 0;
    let gamerName = input[index];
    index++;

    let gameCount = Number(input[index]);
    index++;

    let currentGameName = input[index];
    index++;

    let currentPoint = Number(input[index]);
    index++;

    let volleyballPoints = 0;
    let tennisPoints = 0;
    let badmintonPoints = 0;

    let totalVolleyPoints = 0;
    let totalTennisPoints = 0;
    let totalBadmintonPoints = 0;

    let volleyballCounter = 0;
    let tennisCounter = 0;
    let badmintonCounter = 0;

    totalAllGamesPoints = 0;

    let counter = 0;

    let isWon = false;

    while (counter < gameCount) {
        counter++;

        if (currentGameName == "volleyball") {
            volleyballPoints = currentPoint + (currentPoint * 0.07);
            totalVolleyPoints += volleyballPoints;
            volleyballCounter++;
        } else if (currentGameName == "tennis") {
            tennisPoints = currentPoint + (currentPoint * 0.05);
            totalTennisPoints += tennisPoints;
            tennisCounter++;
        } else if (currentGameName == "badminton") {
            badmintonPoints = currentPoint + (currentPoint * 0.02);
            totalBadmintonPoints += badmintonPoints;
            badmintonCounter++;
        }

        currentGameName = input[index];
        index++;

        currentPoint = Number(input[index]);
        index++;
    }

    totalAllGamesPoints = totalVolleyPoints + totalTennisPoints + totalBadmintonPoints;
    totalAllGamesPoints = Math.floor(totalAllGamesPoints);

    let averageVolley = Math.floor(totalVolleyPoints / volleyballCounter);
    let averageTennis = Math.floor(totalTennisPoints / tennisCounter);
    let averageBadminton = Math.floor(totalBadmintonPoints / badmintonCounter);
    
    if ((averageVolley >= 75) && (averageTennis >= 75) && (averageBadminton >= 75)) {
        isWon = true;
    }

    if (isWon) {
        console.log(`Congratulations, ${gamerName}! You won the cruise games with ${totalAllGamesPoints} points.`);
    } else {
        console.log(`Sorry, ${gamerName}, you lost. Your points are only ${totalAllGamesPoints}.`);
    }
}

solve([
    'Ivan',       '7',
    'volleyball', '70',
    'tennis',     '100',
    'badminton',  '64',
    'volleyball', '125',
    'tennis',     '62',
    'tennis',     '72',
    'badminton',  '87'
  ]);
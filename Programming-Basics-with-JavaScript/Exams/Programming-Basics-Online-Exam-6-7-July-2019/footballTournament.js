function footballTournament(input) {
    let index = 0;
    let team = input[index];
    index++;

    let matchesCount = Number(input[index]);
    index++;

    let started = 1;

    let win = 0;
    let draw = 0;
    let lose = 0;
    let withoutMatches = false;

    while (started <= matchesCount || matchesCount == 0) { 

        if (matchesCount == 0) {
            withoutMatches = true;
            break;
        }

        let currentMatch = input[index];
        index++;

        if (currentMatch == "W") {
            win++;
        } else if (currentMatch == "L") {
            lose++;
        } else if (currentMatch == "D") {
            draw++;
        }
        
        started++;
    }

    matchesCount *= 100;

    let percentWins = (win * 100) / (matchesCount / 100);

    let winPoints = win * 3;
    let drawPoints = draw * 1;
    let losePoints = 0;
    let totalPoints = winPoints + drawPoints + losePoints
    
    if (withoutMatches) {
        console.log(`${team} hasn't played any games during this season.`);
    } else {
        console.log(`${team} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${win}`);
        console.log(`## D: ${draw}`);
        console.log(`## L: ${lose}`);
        console.log(`Win rate: ${percentWins.toFixed(2)}%`);
    }
}

footballTournament([ 'Chelsea', '0' ]);
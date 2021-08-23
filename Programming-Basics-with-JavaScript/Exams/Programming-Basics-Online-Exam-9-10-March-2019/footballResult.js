function footballResult(input) {
    let index = 0;
    let currentMatch = input[index];
    index++;

    let won = 0;
    let draw = 0;
    let lose = 0;

    while (currentMatch != undefined) {
        let homeTeam = Number(currentMatch[0]);
        let guestTeam = Number(currentMatch[2]);

        if (homeTeam > guestTeam) {
            won++;
        } else if (homeTeam < guestTeam) {
            lose++;
        } else {
            draw++;
        }

        currentMatch = input[index];
        index++;
    }

    	console.log(`Team won ${won} games.`);
        console.log(`Team lost ${lose} games.`);
	    console.log(`Drawn games: ${draw}`);
}

footballResult(["3:1", "0:2", "0:0"]);
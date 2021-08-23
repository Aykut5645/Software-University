function tennisRanklist(input) {
    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;

    let openingPoint = Number(input[index]);
    index++;

    let tournamentPosition = input[index];
    index++;

    let wonCount = 0;
    let finalCount = 0;
    let semiFinalCount = 0;

    while (tournamentPosition != undefined) {

        if (tournamentPosition == "W") {
            openingPoint += 2000;
            wonCount++;
        } else if (tournamentPosition == "F") {
            openingPoint += 1200;
            finalCount++;
        } else if (tournamentPosition == "SF") {
            openingPoint += 720;
            semiFinalCount++;
        }

        tournamentPosition = input[index];
        index++;
    }

    let averagePoint = (wonCount * 2000 + finalCount * 1200 + semiFinalCount * 720) / tournamentCount;

    let percentWon = (wonCount / tournamentCount) * 100;

    console.log(`Final points: ${openingPoint}`);
    averagePoint = Math.floor(averagePoint);
    console.log(`Average points: ${averagePoint}`);
    console.log(`${percentWon.toFixed(2)}%`);
}

tennisRanklist([
    "7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"
]);
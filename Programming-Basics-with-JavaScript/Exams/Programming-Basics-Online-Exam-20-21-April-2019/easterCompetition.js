function easterCompetition(input) {
    let index = 0;
    let easterBreadCount = Number(input[index]);
    index++;

    let totalPoints = 0;
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let winner = false;
    let winnerName = "";

    for (let i = easterBreadCount; i >= 1; i--) {
        currentCookerName = input[index];
        index++;
        let currentGrade = input[index];
        index++;

        totalPoints = 0;

        while (currentGrade != "Stop") {
            currentGrade = Number(currentGrade);

            totalPoints += currentGrade;


            currentGrade = input[index];
            index++;
        }

        if (totalPoints > maxPoints) {
            maxPoints = totalPoints;
            console.log(`${currentCookerName} has ${totalPoints} points.`);
            console.log(`${currentCookerName} is the new number 1!`);
            winnerName = currentCookerName;
            winner = true;
        } else {
            console.log(`${currentCookerName} has ${totalPoints} points.`);
        }
    }

    if (winner) {
        console.log(`${winnerName} won competition with ${maxPoints} points!`);
    }
}

easterCompetition([
    '3', 'Chef Manchev',
    '10', '10',
    '10', '10',
    'Stop', 'Natalie',
    '8', '2',
    '9', 'Stop',
    'George', '9',
    '2', '4',
    '2', 'Stop'
]);
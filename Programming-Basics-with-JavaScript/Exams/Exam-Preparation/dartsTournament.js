function dartsTournament(input) {
    let index = 0;
    let startPoints = Number(input[index]);
    index++;

    let sectionType = input[index];
    index++;

    let sectionPoints = Number(input[index]);
    index++;

    let winner = false;
    let moveCount = 0;

    while (sectionType != undefined && sectionPoints != undefined) {

        moveCount++;

        if (sectionType == "number section") {
            startPoints -= sectionPoints;
        } else if (sectionType == "double ring") {
            startPoints -= sectionPoints * 2; 
        } else if (sectionType == "triple ring") {
            startPoints -= sectionPoints * 3;
        } else if (sectionType == "bullseye") {
            winner = true;
            break;
        }

        if (startPoints < 0) {
            winner = false;
            break;
        }

        sectionType = input[index];
        index++;

        sectionPoints = Number(input[index]);
        index++;
    }

    if (startPoints == 0) {
        console.log(`Congratulations! You won the game in ${moveCount} moves!`);
    } else if (winner) {
        console.log(`Congratulations! You won the game with a bullseye in ${moveCount} moves!`);
    } else {
        startPoints = Math.abs(startPoints);
        console.log(`Sorry, you lost. Score difference: ${startPoints}.`);
    }
}

dartsTournament([
    '75',
    'triple ring',
    '17',
    'number section',
    '16',
    'triple ring',
    '13',
    'double ring',
    '10'
  ]);
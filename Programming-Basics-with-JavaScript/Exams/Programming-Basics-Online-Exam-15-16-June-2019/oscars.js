function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;

    let startPoints = Number(input[index]);
    index++;

    let appraiserCount = Number(input[index]);
    index++;

    let currentAppraiser = input[index];
    index++;

    let counter = 0;
    let maxPoints = 1250.5;

    while (counter < appraiserCount) {
        counter++;

        let currentAppraiserLength = currentAppraiser.length;
        let currentPoints = Number(input[index]);
        index++;

        currentPoints *= currentAppraiserLength / 2;
        startPoints += currentPoints;

        if (startPoints >= maxPoints) {
            break;
        }

        currentAppraiser = input[index];
        index++;
    }

    if (startPoints > maxPoints) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startPoints.toFixed(1)}!`);
    } else {
        let difference = Math.abs(maxPoints - startPoints);
        console.log(`Sorry, ${actorName} you need ${difference.toFixed(1)} more!`);
    }
}

oscars([
    'Sandra Bullock', '340',
    '5',              'Robert De Niro',
    '50',             'Julia Roberts',
    '40.5',           'Daniel Day-Lewis',
    '39.4',           'Nicolas Cage',
    '29.9',           'Stoyanka Mutafova',
    '33',             ''
  ]);
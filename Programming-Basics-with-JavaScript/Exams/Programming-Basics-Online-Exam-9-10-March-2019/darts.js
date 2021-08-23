function darts(input) {
    let index = 0;
    let player = input[index];
    index++;

    let areaType = input[index];
    index++;

    let currentPoints = Number(input[index]);
    index++;

    let successful = 0;
    let unsuccessful = 0;

    let startPoints = 301;
    let points = 0;

    while (areaType != "Retire" && areaType != undefined) {

        if (areaType == "Single") {
            points = currentPoints;
        } else if (areaType == "Double") {
            points = currentPoints * 2;
        } else if (areaType == "Triple") {
            points = currentPoints * 3;
        }

        if (startPoints >= points) {
            startPoints -= points;
            successful++;
        } else {
            unsuccessful++;
        }
        
        areaType = input[index];
        index++;

        currentPoints = Number(input[index]);
        index++;
    }

    if (startPoints == 0) {
        console.log(`${player} won the leg with ${successful} shots.`);
    } else {
        console.log(`${player} retired after ${unsuccessful} unsuccessful shots.`);
    }
}

darts([
    'Stephen Bunting', 'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Triple',
    '20',              'Double',
    '7',               'Single',
    '12',              'Double',
    '1',               'Single',
    '1',               ''
  ]);
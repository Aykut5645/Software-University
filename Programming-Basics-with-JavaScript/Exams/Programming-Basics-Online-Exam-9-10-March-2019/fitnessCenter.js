function fitnessCenter(input) {
    let index = 0;
    let clientCount = Number(input[index]);
    index++;

    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShake = 0;
    let proteinBar = 0;

    let actionType = input[index];
    index++;

    while (actionType != undefined) {

        switch (actionType) {
            case "Back":
                back++;
                break;
            case "Chest":
                chest++;
                break;
            case "Legs":
                legs++;
                break;
            case "Abs":
                abs++;
                break;
            case "Protein shake":
                proteinShake++;
                break;
            case "Protein bar":
                proteinBar++;
                break;
        }

        actionType = input[index];
        index++;
    }

    let trainingCount = back + chest + legs + abs;
    let trainingCountPercent = (trainingCount / clientCount) * 100;

    let buyersCount = proteinBar + proteinShake;
    let buyersCountPercent = (buyersCount / clientCount) * 100;
    
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${trainingCountPercent.toFixed(2)}% - work out`);
    console.log(`${buyersCountPercent.toFixed(2)}% - protein`);
}

fitnessCenter([
    '10',          'Back',
    'Chest',       'Legs',
    'Abs',         'Protein shake',
    'Protein bar', 'Protein shake',
    'Protein bar', 'Legs',
    'Abs',         ''
  ]);
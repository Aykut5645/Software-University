function theHuntingGames(arr) {
    let info = arr.map(Number);

    let daysCount = info.shift();
    let playersCount = info.shift();
    let groupEnergy = info.shift();
    let waterForPerson = info.shift();
    let foodForPerson = info.shift();

    let energyLoss = info;
    let totalWater = daysCount * playersCount * waterForPerson;
    let totalFood = daysCount * playersCount * foodForPerson;
    let isNoEnergy = false;

    for (let i = 1; i <= daysCount; i++) {
        let currentLoss = energyLoss.shift();
        groupEnergy -= currentLoss;

        if (groupEnergy <= 0) {
            isNoEnergy = true;
            break;
        }

        if (i % 2 == 0) {
            groupEnergy += groupEnergy * 0.05;
            totalWater -= totalWater * 0.30;
        } 
        
        if (i % 3 == 0) {
            groupEnergy += groupEnergy * 0.10;
            totalFood -= totalFood / playersCount;
        }
    }

    if (isNoEnergy) {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    } else {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }
}

theHuntingGames([
    '10', '7', '5035.5',
    '11.3', '7.2', '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3', '784.20',
    '321.21', '456.8', '330',
    ''
]);
//theHuntingGames([
//    '12', '6', '4430',
//    '9.8', '5.5', '620.3',
//    '840.2', '960.1', '220',
//    '340', '674', '365',
//    '345.5', '212', '412.12',
//    '258', '496', ''
//]);
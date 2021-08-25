function plantDiscovery(input) {
    let n = Number(input[0]);
    let plantsList = {};

    for (let i = 1; i <= n; i++) {
        let [plant, rarity] = input[i].split('<->');
        rarity = Number(rarity);

        plantsList[plant] = {
            'Rarity': rarity,
            'Rating': [],
        };
    }

    for (let i = n + 1; i < input.length; i++) {
        if (input[i] == 'Exhibition') {
            break;
        }

        let line = input[i].split(' ');
        let [command, ...info] = line;

        if (command == 'Rate:') {
            let plant = info[0];
            let rating = Number(info[2]);

            if (plantsList.hasOwnProperty(plant)) {
                plantsList[plant]['Rating'].push(rating);
            } else {
                console.log('error');
            }
        } else if (command == 'Update:') {
            let plant = info[0];
            let newRarity = Number(info[2]);

            if (plantsList.hasOwnProperty(plant)) {
                plantsList[plant]['Rarity'] = newRarity;
            } else {
                console.log('error');
            }
        } else if (command == 'Reset:') {
            let plant = info[0];

            if (plantsList.hasOwnProperty(plant)) {
                plantsList[plant]['Rating'] = [];
            } else {
                console.log('error');
            }
        }
    }
    
    console.log('Plants for the exhibition:');
    
    Object.keys(plantsList)
    .sort((a, b) => {
        let firstResult = averageCalculate(plantsList[a]['Rating']);
        let secondResult = averageCalculate(plantsList[b]['Rating']);

        if (plantsList[a]['Rarity'] - plantsList[b]['Rarity'] != 0) {
            return plantsList[b]['Rarity'] - plantsList[a]['Rarity'];
        } else {
            return secondResult - firstResult;
        }
    }).forEach(plant => {
        let rating = averageCalculate(plantsList[plant]['Rating']);
        console.log(`- ${plant}; Rarity: ${plantsList[plant]['Rarity']}; Rating: ${rating.toFixed(2)}`);
    });
    
    
    function averageCalculate(arr) {
        if (arr.length > 0) {
            return arr.reduce((a, b) => a + b) / arr.length;
        } else {
            return 0;
        }
    }
}

plantDiscovery([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);

plantDiscovery([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]);
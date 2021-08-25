function pirates(input) {
    let line;
    let towns = {};

    while ((line = input.shift()) != 'Sail') {
        let [town, population, gold] = line.split('||');
        [population, gold] = [Number(population), Number(gold)];

        if (!towns.hasOwnProperty(town)) {
            towns[town] = { population, gold };
        } else {
            towns[town]['population'] += population;
            towns[town]['gold'] += gold;
        }
    }


    while ((line = input.shift()) != 'End') {
        let [action, town, ...params] = line.split('=>');

        if (action == 'Plunder') {
            let [people, gold] = params;
            [people, gold] = [Number(people), Number(gold)];

            towns[town]['population'] -= people;
            towns[town]['gold'] -= gold;
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (towns[town]['population'] <= 0 || towns[town]['gold'] <= 0) {
                delete towns[town];
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (action == 'Prosper') {
            gold = Number([params]);

            if (gold >= 0) {
                towns[town]['gold'] += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town]['gold']} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }
        }
    }

    let townsKeys = Object.keys(towns);

    if (townsKeys.length == 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${townsKeys.length} wealthy settlements to go to:`);

        townsKeys
        .sort((a, b) => towns[b]['gold'] - towns[a]['gold'] || a.localeCompare(b))
        .forEach(town => console.log(`${town} -> Population: ${towns[town]['population']} citizens, Gold: ${towns[town]['gold']} kg`));
    }    
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'])

pirates([
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])

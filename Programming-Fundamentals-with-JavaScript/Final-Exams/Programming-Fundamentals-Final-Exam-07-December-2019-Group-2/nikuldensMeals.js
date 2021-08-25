function demo(input) {
    let obj = {};
    let unlikedCounts = 0;
    let line;

    while ((line = input.shift()) != 'Stop') {
        let [preference, guest, meal] = line.split('-');

        if (preference == 'Like') {
            if (!obj.hasOwnProperty(guest)) {
                obj[guest] = [meal];
            } else if (obj.hasOwnProperty(guest) && !obj[guest].includes(meal)) {
                obj[guest].push(meal);
            }
        } else if (preference == 'Unlike') {
            if (!obj.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            } else if (obj.hasOwnProperty(guest) && obj[guest].includes(meal)) {
                unlikedCounts += 1;
                obj[guest] = obj[guest].filter(m => m != meal);
                console.log(`${guest} doesn't like the ${meal}.`);
            } else if (obj.hasOwnProperty(guest) && !obj[guest].includes(meal)) {
                console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
            }
        }
    }

    Object.entries(obj).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    });
    console.log(`Unliked meals: ${unlikedCounts}`);
}

nikuldensMeals([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop']);
/*
nikuldensMeals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop']);*/
function easterGifts(arr) {
    let planedGifts = arr.shift().split(' ');
    let commands = arr.slice();

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');

        if (currentCommand[0] == 'OutOfStock') {
            let gift = currentCommand[1];

            while (planedGifts.includes(gift) == true) {

                if (planedGifts.includes(gift)) {
                    let index = planedGifts.indexOf(gift);
                    planedGifts[index] = 'None';
                }
            }
        } else if (currentCommand[0] == 'Required') {
            let gift = currentCommand[1];
            let index = Number(currentCommand[2]);

            if (index >= 0 && index < planedGifts.length) {
                planedGifts[index] = gift;
            }
        } else if (currentCommand[0] == 'JustInCase') {
            let gift = currentCommand[1];
            planedGifts[planedGifts.length - 1] = gift;
        } else {
            break;
        }
    }

    while (planedGifts.includes('None')) {
        let index = planedGifts.indexOf('None');
        planedGifts.splice(index, 1);
    }

    console.log(planedGifts.join(' '));
}

/*
easterGifts([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]);
*/

easterGifts([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
]);

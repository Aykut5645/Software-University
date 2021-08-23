function careOfPuppy(input) {
    let index = 0;
    let kgFood = Number(input[index]) * 1000;
    index++;

    let currentDayEat = input[index];
    index++;

    let totalEat = 0;

    while (currentDayEat != "Adopted") {
        currentDayEat = Number(currentDayEat);

        totalEat += currentDayEat;

        currentDayEat = input[index];
        index++;
    }

    let difference = Math.abs(totalEat - kgFood);

    if (totalEat <= kgFood) {
        console.log(`Food is enough! Leftovers: ${difference} grams.`);
    } else {
        console.log(`Food is not enough. You need ${difference} grams more.`);
    }
}

careOfPuppy([
    '4', '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted',
    '', ''
]);
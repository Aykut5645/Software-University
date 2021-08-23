function vetParking(input) {
    let index = 0;
    let dayCount = Number(input[index]);
    index++;

    let hoursForDay = Number(input[index]);
    index++;

    let dayCounter = 0;

    let totalTax = 0;

    for (let i = 1; i <= dayCount; i++) {
        dayCounter++;

        let currentDayTax = 0;

        for (let j = 1; j <= hoursForDay; j++) {
            
            if (i % 2 == 1 && j % 2 == 0) {
                currentDayTax += 1.25;
            } else if (i % 2 == 0 && j % 2 == 1) {
                currentDayTax += 2.50;
            } else {
                currentDayTax += 1;
            }
        }

        totalTax += currentDayTax;

        console.log(`Day: ${dayCounter} - ${currentDayTax.toFixed(2)} leva`);
    }

    console.log(`Total: ${totalTax.toFixed(2)} leva`);
}

vetParking([ '5', '2' ]);
function springVacationTrip(arr) {
    let vacation = arr.map(Number);
    let days = vacation.shift();
    let budget = vacation.shift();
    let peopleCount = vacation.shift();
    let fuelPricePerKil = vacation.shift();
    let foodPriceForDay = vacation.shift();
    let roomPriceForNight = vacation.shift();

    let foodExp = days * peopleCount * foodPriceForDay;
    let allNights = days * peopleCount * roomPriceForNight;
    let counter = 0;
    let isNotEnough = false;
    
    if (peopleCount > 10) {
        allNights *= 0.75;
    }

    let currentExp = foodExp + allNights;

    for (let i = 1; i <= days; i++) {
        let travelledDistance = vacation[counter];
        currentExp += fuelPricePerKil * travelledDistance;
        counter++;

        if (counter % 3 == 0 || counter % 5 == 0) {
            currentExp += currentExp * 0.4;
        }

        if (counter % 7 == 0) {
            currentExp -= currentExp / peopleCount;
        }

        if (currentExp > budget) {
            isNotEnough = true;  
            break;
        }
    }
    
    let diff = Math.abs(budget - currentExp);
    
    if (isNotEnough) {
        console.log(`Not enough money to continue the trip. You need ${diff.toFixed(2)}$ more.`);
    } else {
        console.log(`You have reached the destination. You have ${diff.toFixed(2)}$ budget left.`);
    }
}

springVacationTrip([
    '7', '12000', '5',
    '1.5', '10', '20',
    '512', '318', '202',
    '154', '222', '108',
    '123'
]);
/*
springVacationTrip([
    '10', '20500', '11',
    '1.2', '8', '13',
    '100', '150', '500',
    '400', '600', '130',
    '300', '350', '200',
    '300'
]);*/
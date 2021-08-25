function piccolo(inputArr) {
    let parking = {};

    for (const currentCar of inputArr) {
        let [direction, carNumber] = currentCar.split(', ');

        if (direction == 'IN') {
            parking[carNumber] = direction;
        } else {
            delete parking[carNumber];
        }
    }

    let keysArr = Object.keys(parking);

    if (keysArr.length == 0) {
        return 'Parking Lot is Empty';
    } else {
        return keysArr
        .sort((a, b) => a.localeCompare(b))
        .join('\n');
    }
}

console.log(piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']));
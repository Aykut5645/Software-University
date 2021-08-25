function solve(input) {
    let n = Number(input.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let [carName, mileage, fuel] = input[i].split('|');
        [mileage, fuel] = [Number(mileage), Number(fuel)];

        cars[carName] = {
            'Mileage': mileage,
            'Fuel': fuel,
        }
    }


    for (let i = n; i < input.length; i++) {
        if (input[i] == 'Stop') {
            break;
        }

        let [action, ...params] = input[i].split(' : ');

        if (action == 'Drive') {
            let [carName, distance, fuel] = params;
            [distance, fuel] = [Number(distance), Number(fuel)];

            if (cars[carName]['Fuel'] >= fuel) {
                cars[carName]['Fuel'] -= fuel;
                cars[carName]['Mileage'] += distance;
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (cars[carName]['Mileage'] >= 100000) {
                    delete cars[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
            } else {
                console.log('Not enough fuel to make that ride');
            }
        } else if (action == 'Refuel') {
            let carName = params[0];
            let fuel = Number(params[1]);
            let maxCapacity = 75;

            if (cars[carName]['Fuel'] + fuel <= maxCapacity) {
                cars[carName]['Fuel'] += fuel;
                console.log(`${carName} refueled with ${fuel} liters`);
            } else {
                let needFuel = maxCapacity - cars[carName]['Fuel'];
                cars[carName]['Fuel'] += needFuel;
                console.log(`${carName} refueled with ${needFuel} liters`);
            }
        } else if (action == 'Revert') {
            let carName = params[0];
            let kilometers = Number(params[1]);

            if (cars[carName]['Mileage'] - kilometers >= 10000) {
                cars[carName]['Mileage'] -= kilometers;
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            } else {
                cars[carName]['Mileage'] = 10000;
            }
        }
    }
    
    Object.keys(cars).sort((a,b) => {
        if (cars[b]['Mileage'] - cars[a]['Mileage'] != 0) {
            return cars[b]['Mileage'] - cars[a]['Mileage'];
        } else {
            return a.localeCompare(b);
        }
    })
    .forEach(car => {
        console.log(`${car} -> Mileage: ${cars[car]['Mileage']} kms, Fuel in the tank: ${cars[car]['Fuel']} lt.`);
    });
}
/*
demo([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
]);*/
/*
demo([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]);*/

demo([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
]);
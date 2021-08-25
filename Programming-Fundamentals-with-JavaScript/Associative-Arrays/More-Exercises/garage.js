function garage(input) {
    let garage = new Map();

    input.forEach(car => {
        let [garNum, carInfo] = car.split(' - ');
        carInfo = carInfo.replace(/: /g, ' - ');

        if (garage.has(garNum)) {
            let availableCars = garage.get(garNum)
            availableCars.push(carInfo);
            garage.set(garNum, availableCars);
        } else {
            garage.set(garNum, [carInfo]);
        }
    });

    Array.from(garage.keys()).forEach(garNum => {
        console.log(`Garage № ${garNum}`);
        garage.get(garNum).forEach(info => {
            console.log(`--- ${info}`);
        });
    });
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);

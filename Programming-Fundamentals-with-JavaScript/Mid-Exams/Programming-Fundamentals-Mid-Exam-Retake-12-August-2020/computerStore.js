function computerStore(arr) {
    let clientType = '';
    let sumWithoutTax = 0;
    

    for (let i = 0; i < arr.length; i++) {
        let currentInfo = arr[i];

        if (currentInfo == 'special' || currentInfo == 'regular') {
            clientType = currentInfo;
            break;
        } else {
            currentInfo = Number(currentInfo);
        }

        if (currentInfo < 0) {
            console.log('Invalid price!');
        } else {
            sumWithoutTax += currentInfo;
        }
    }

    let taxes = 0;
    let finalPrice = 0;

    if (sumWithoutTax == 0) {
        console.log("Invalid order!");
    } else if (sumWithoutTax > 0) {
        taxes = sumWithoutTax * 0.20;
        finalPrice = sumWithoutTax + taxes;

        if (clientType == 'special') {
            finalPrice *= 0.90;
        }

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sumWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
}
/*
computerStore([
    '1050', '200',
    '450', '2',
    '18.50', '16.86',
    'special'
]);
*//*
computerStore([
    '1023', '15',
    '-20', '-5.50',
    '450', '20',
    '17.66', '19.30',
    'regular'
]);
*/

computerStore([ 'regular' ]);
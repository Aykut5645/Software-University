function easterShopping(arr) {
    let startingList = arr.shift().split(' ');
    let commandsCount = Number(arr.shift());
    let commands = arr.slice();

    for (let i = 0; i < commandsCount; i++) {
        let currentCommand = commands[i].split(' ');

        if (currentCommand[0] == 'Include') {
            let shop = currentCommand[1];
            startingList.push(shop);
        } else if (currentCommand[0] == 'Visit' && currentCommand[1] == 'first') {
            let count = Number(currentCommand[2]);

            if (count <= startingList.length) {
                startingList.splice(0, count);
            }
        } else if (currentCommand[0] == 'Visit' && currentCommand[1] == 'last') {
            let count = Number(currentCommand[2]);

            if (count <= startingList.length) {
                startingList.splice(-count);
            }
        } else if (currentCommand[0] == 'Prefer') {
            let firstInd = Number(currentCommand[1]);
            let secondInd = Number(currentCommand[2]);

            if ((firstInd >= 0 && firstInd < startingList.length) && (secondInd >= 0 && secondInd < startingList.length)) {
                let copyInd = startingList[firstInd];
                startingList[firstInd] = startingList[secondInd];
                startingList[secondInd] = copyInd;
            }
        } else if (currentCommand[0] == 'Place') {
            let shop = currentCommand[1];
            let index = Number(currentCommand[2]);

            if (index >= 0 && index < startingList.length) {
                startingList.splice(index + 1, 0, shop);
            }
        }
    }

    console.log('Shops left:');
    console.log(startingList.join(' '));
}

/*
easterShopping([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]);
*/
easterShopping([
    'Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
    '6',
    'Visit first 9',
    'Visit last 4',
    'Prefer 3 8',
    'Prefer 0 1',
    'Place Store 7',
    'Place ShoeAquarium 2'
]);

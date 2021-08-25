function lastStop(arr) {
    let paintingNumbers = arr.shift().split(' ').map(Number);
    let commands = arr;

    let index = 0;
    let currentCommand = commands[index];

    while (currentCommand != 'END') {
        currentCommand = commands[index].split(' ');
        let action = currentCommand[0];

        if (action == 'Change') {
            let paintingNumber = Number(currentCommand[1]);
            let changedNumber = Number(currentCommand[2]);
            let index = paintingNumbers.indexOf(paintingNumber);

            if (index != -1) {
                paintingNumbers[index] = changedNumber;
            }
        } else if (action == 'Hide') {
            let paintingNumber = Number(currentCommand[1]);
            let index = paintingNumbers.indexOf(paintingNumber);
            
            if (index != -1) {
                paintingNumbers.splice(index, 1);
            }
        } else if (action == 'Switch') {
            let paintingNumberOne = Number(currentCommand[1]);
            let paintingNumberTwo = Number(currentCommand[2]);

            if (paintingNumbers.includes(paintingNumberOne) && paintingNumbers.includes(paintingNumberTwo)) {
                let firstInd = paintingNumbers.indexOf(paintingNumberOne);
                let secondInd = paintingNumbers.indexOf(paintingNumberTwo);
                let copyInd = paintingNumbers[firstInd];

                paintingNumbers[firstInd] = paintingNumbers[secondInd];
                paintingNumbers[secondInd] = copyInd;

            }
        }  else if (action == 'Insert') {
            let place = Number(currentCommand[1]);
            let paintingNumber = Number(currentCommand[2]);
            
            if (place >= 0 && place < paintingNumbers.length) {
                paintingNumbers.splice(place + 1, 0, paintingNumber);
            }
        } else if (action == 'Reverse') {
            paintingNumbers.reverse();
        }

        index++;
    }

    console.log(paintingNumbers.join(' '));
}

/*
lastStop([
    '115 115 101 114 73 111 116 75',
    'Switch 116 73',
    'Hide 75',
    'Change 73 70',
    'Insert 5 114',
    'Reverse ',
    'Insert 10 85',
    'END'
]);*/

lastStop([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
]);
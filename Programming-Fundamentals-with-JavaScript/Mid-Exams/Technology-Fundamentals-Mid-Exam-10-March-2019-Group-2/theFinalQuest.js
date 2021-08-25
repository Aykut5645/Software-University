function theFinalQuest(arr) {
    let realMessage = arr.shift().split(' ');
    let commands = arr;

    let index = 0;
    let currentCommand = commands[index];

    while (currentCommand != 'Stop') {
        currentCommand = commands[index].split(' ');
        let action = currentCommand[0];

        if (action == 'Delete') {
            let index = Number(currentCommand[1]);
            index = index + 1;
            if (index >= 0 && index < realMessage.length) {
                realMessage.splice(index, 1);
            }
        } else if (action == 'Swap') {
            let firstWord = currentCommand[1];
            let secondWord = currentCommand[2];

            if (realMessage.includes(firstWord) && realMessage.includes(secondWord)) {
                let firstInd = realMessage.indexOf(firstWord);
                let secondInd = realMessage.indexOf(secondWord);

                let copyInd = realMessage[firstInd];
                realMessage[firstInd] = realMessage[secondInd];
                realMessage[secondInd] = copyInd;
            }
        } else if (action == 'Put') {
            let word = currentCommand[1];
            let index = Number(currentCommand[2]);
            index = index - 1;

            if (index >= 0 && index <= realMessage.length) {
                realMessage.splice(index, 0, word);
            }
        } else if (action == 'Sort') {
            realMessage.sort((a, b) => b.localeCompare(a));
        } else if (action == 'Replace') {
            let firstWord = currentCommand[1];
            let secondWord = currentCommand[2];

            if (realMessage.includes(secondWord)) {
                let index = realMessage.indexOf(secondWord);
                realMessage[index] = firstWord;
            }
        }
        index++;
    }

    console.log(realMessage.join(' '));
}
/*
theFinalQuest([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop',
    ''
]);
*/
theFinalQuest([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop',
    ''
]);

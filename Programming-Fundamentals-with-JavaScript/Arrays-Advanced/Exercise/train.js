function train(arr) {
    let copyArr = arr.slice();
    let train = copyArr[0].split(' ').map(Number);
    let maxCapacity = Number(copyArr[1]);
    let commands = copyArr.slice(2);

    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ');
        
        if (command.length > 1) {
            command[1] = Number(command[1]);
            train.push(command[1]);  
        } else {
            command = Number(command);
            for (let j = 0; j < train.length; j++) {
                if ((train[j] + command) <= maxCapacity) {
                    train[j] = train[j] + command;
                    break;
                }
            }
        } 
    }  

    console.log(train.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']


);

//train(['0 0 0 10 2 4',
//'10',
//'Add 10',
//'10',
//'10',
//'10',
//'8',
//'6']
//);
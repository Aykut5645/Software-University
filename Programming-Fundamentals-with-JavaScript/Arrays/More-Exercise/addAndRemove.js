function solve(arr) {
    let commands = arr;
    let firstNum = 1;
    let finalArr = [];

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];

        if (currentCommand == 'add') {
            finalArr.push(firstNum);
        } else if (currentCommand == 'remove') {
            finalArr.pop();
            firstNum++;       
            continue;
        }

        firstNum++;
    } 

    if (finalArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(finalArr.join(' '));
    }
}

//solve(['add', 'add', 'add', 'add']);
//solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
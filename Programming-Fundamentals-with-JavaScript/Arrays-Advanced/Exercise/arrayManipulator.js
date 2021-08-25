function arrayManipulator(firstArr, secondArr) {
    let integers = firstArr;
    let commands = secondArr;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');
        let action = currentCommand[0];

        if (action == 'add') {
            let index = Number(currentCommand[1]);
            let element = Number(currentCommand[2]);

            integers.splice(index, 0, element);
        } else if (action == 'addMany') {
            currentCommand.shift();
            let mappedIntegers = currentCommand.map(Number);
            let index = mappedIntegers.shift();

            for (let element of mappedIntegers) {
                integers.splice(index, 0, element);
                index++;
            }
        } else if (action == 'contains') {
            let element = Number(currentCommand[1]);

            if (integers.indexOf(element) != -1) {
                console.log(integers.indexOf(element));
            } else {
                console.log(-1);
            }
        } else if (action == 'remove') {
            let index = Number(currentCommand[1]);

            integers.splice(index, 1);
        } else if (action == 'shift') {
            let rotations = Number(currentCommand[1]);

            for (let i = 0; i < rotations; i++) {
                let currentElement = integers.shift();
                integers.push(currentElement);
            }
        } else if (action == 'sumPairs') {
            let isUndefined = false;
            let emptyArr = [];

            for (let i = 0; i < integers.length; i += 2) {

                for (let j = i + 1; j > i; j--) {
                    if (integers[j] == undefined) {
                        isUndefined = true;
                        emptyArr.push(integers[i]);
                        break;
                    }
                    emptyArr.push(integers[i] + integers[j]);
                }

                if (isUndefined == true) {
                    break;
                }
            }

            integers = emptyArr;

        } else {
            console.log(`[ ${integers.join(', ')} ]`);
        }
    }
}

//arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);

arrayManipulator([ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2 ],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);

function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let commandsArr = arr.slice();
    
    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i].split(' ');

        if (command == 'End') {
            break;
        }

        let currentCommand = command[0];
        let isLeft = false;
        let isRight = false;
        let counter = 0;

        if (currentCommand == 'Shoot') {
            let index = Number(command[1]);
            let power = Number(command[2]);

            if (targets[index] > power) {
                targets[index] -= power; 
            } else if (targets[index] <= power) {
                targets.splice(index, 1);
            }
        } else if (currentCommand == 'Add') {
            let index = Number(command[1]);
            let value = Number(command[2]);

            if (index < 0 || index > targets.length - 1) {
                console.log('Invalid placement!');
            } else {
                targets.splice(index, 0, value);
            }
        } else if (currentCommand == 'Strike') {
            let index = Number(command[1]);
            let radius = Number(command[2]);
            let secondIndex = Math.abs(index - radius);

            for (let l = index - 1; l >= 0; l--) {
                counter++;
                if (counter == radius) {
                    isLeft = true;
                    break;
                }
            }

            counter = 0;

            for (let r = index + 1; r < targets.length; r++) {
                counter++;
                if (counter == radius) {
                    isRight = true;
                    break;
                }
            }

            if (isLeft && isRight) {
                targets.splice(index - radius, radius);
                targets.splice(secondIndex, radius + 1);
            } else {
                console.log('Strike missed!');
            }
        }
    }

    console.log(targets.join('|'));
}




function movingTarget(arr) {
    let targets = arr.shift().split(' ').map(Number);
    let commandsArr = arr.slice();
    
    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i].split(' ');

        if (command == 'End') {
            break;
        }

        let currentCommand = command[0];
        let isLeft = false;
        let isRight = false;
        let counter = 0;

        if (currentCommand == 'Shoot') {
            let index = Number(command[1]);
            let power = Number(command[2]);

            if (targets[index] > power) {
                targets[index] -= power; 
            } else if (targets[index] <= power) {
                targets.splice(index, 1);
            }
        } else if (currentCommand == 'Add') {
            let index = Number(command[1]);
            let value = Number(command[2]);

            if (index < 0 || index > targets.length - 1) {
                console.log('Invalid placement!');
            } else {
                targets.splice(index, 0, value);
            }
        } else if (currentCommand == 'Strike') {
            let index = Number(command[1]);
            let radius = Number(command[2]);
            let secondIndex = Math.abs(index - radius);

            for (let l = index - 1; l >= 0; l--) {
                counter++;
                if (counter == radius) {
                    isLeft = true;
                    break;
                }
            }

            counter = 0;

            for (let r = index + 1; r < targets.length; r++) {
                counter++;
                if (counter == radius) {
                    isRight = true;
                    break;
                }
            }

            if (isLeft && isRight) {
                targets.splice(index - radius, radius);
                targets.splice(secondIndex, radius + 1);
            } else {
                console.log('Strike missed!');
            }
        }
    }

    console.log(targets.join('|'));
}

//movingTarget([
//    '52 74 23 44 96 110',
//    'Shoot 5 10',
//    'Shoot 1 80',
//    'Strike 2 1',
//    'Add 22 3',
//    'End'
//]);

movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]);
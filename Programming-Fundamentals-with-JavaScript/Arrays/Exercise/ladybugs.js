function ladybugs(arr) {
    let fieldSize = arr.shift();
    let positions = arr.shift().split(' ').map(Number);
    let commands = arr;
    let fieldInfo = [];

    for (let i = 0; i < fieldSize; i++) {
        fieldInfo.push(0);
    }

    for (let i = 0; i < positions.length; i++) {
        if (i >= 0 && i < fieldSize) {
            fieldInfo[positions[i]] = 1;
        }
    }

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');
        let startIndex = Number(currentCommand[0]);
        let direction = currentCommand[1];
        let flyLength = Number(currentCommand[2]);

        if (startIndex < 0 || startIndex > fieldInfo.length - 1 || fieldInfo[startIndex] == 0) {
            continue;
        }

        if (flyLength < 0) {
            flyLength = Math.abs(flyLength);
            switch (direction) {
                case 'right':
                    direction = 'left';
                    break;
                case 'left':
                    direction = 'right';
                    break;
            }
        }

        if (direction == 'right') {
            isBugFly = true;
            let finalIndex = startIndex + flyLength;

            if (finalIndex > fieldInfo.length - 1) {
                fieldInfo[startIndex] = 0;
                continue;
            }
            
            while (isBugFly) {
                if (fieldInfo[startIndex] + fieldInfo[finalIndex] == 2) {
                    finalIndex += flyLength;
                    continue;
                } else if (fieldInfo[startIndex] + fieldInfo[finalIndex] == 1) {
                    fieldInfo[startIndex] = 0;
                    fieldInfo[finalIndex] = 1;
                    isBugFly = false;
                } else {
                    fieldInfo[startIndex] = 0;
                    isBugFly = false;
                }
            }
        } else if (direction == 'left') {
            isBugFly = true;
            let finalIndex = startIndex - flyLength;

            if (finalIndex < 0) {
                fieldInfo[startIndex] = 0;
                continue;
            }

            
            while (isBugFly) {
                if (fieldInfo[startIndex] + fieldInfo[finalIndex] == 2) {
                    finalIndex -= flyLength;
                    continue;
                } else if (fieldInfo[startIndex] + fieldInfo[finalIndex] == 1) {
                    fieldInfo[startIndex] = 0;
                    fieldInfo[finalIndex] = 1;
                    isBugFly = false;
                } else {
                    fieldInfo[startIndex] = 0;
                    isBugFly = false;
                }
            }
        }
    }

    console.log(fieldInfo.join(' '));
}


//ladybugs([3, '0 1', '0 right 1', '2 right 1']);
//ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);

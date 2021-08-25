function nikuldensCharity(input) {
    let text = input.shift();

    let currentCommand = input.shift();

    while (currentCommand != 'Finish') {
        let [action, ...params] = currentCommand.split(' ');

        if (action == 'Replace') {
            let [currentChar, newChar] = params;

            while (text.includes(currentChar)) {
                text = text.replace(currentChar, newChar);
            }
            console.log(text);
        
        } else if (action == 'Cut') {
            let [startIndex, endIndex] = params;
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];

            if ((startIndex >= 0 && startIndex < text.length) && (endIndex >= 0 && endIndex < text.length) && (startIndex <= endIndex)) {
                let substr = text.substring(startIndex, startIndex + endIndex);
                let leftSide = text.substring(0, startIndex);
                let rightSide = text.substring(endIndex + 1);
                text = leftSide.concat(rightSide);
                console.log(text);
            } else {
                console.log('Invalid indexes!');
            }
        } else if (action == 'Make') {
            let command = params[0];
            
            if (command == 'Upper') {
                text = text.toLocaleUpperCase()
            } else {
                text = text.toLocaleLowerCase();
            }

            console.log(text);
        } else if (action == 'Check') {
            let substr = params[0];

            if (text.includes(substr)) {
                console.log(`Message contains ${substr}`);
            } else {
                console.log(`Message doesn't contain ${substr}`);
            }
        } else if (action == 'Sum') {
            let [startIndex, endIndex] = params;
            [startIndex, endIndex] = [Number(startIndex), Number(endIndex)];

            if ((startIndex >= 0 && startIndex < text.length) && (endIndex >= 0 && endIndex < text.length) && (startIndex <= endIndex)) {
                let substr = text.substring(startIndex, startIndex + endIndex);
                let sum = 0;
                for (let i = 0; i < substr.length; i++) {
                    sum += substr.charCodeAt(i);
                }
                console.log(sum);
            } else {
                console.log('Invalid indexes!');
            }
        }

        currentCommand = input.shift();
    }
}

nikuldensCharity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish']);

nikuldensCharity([
    'HappyNameDay',
    'Replace p r',
    'Make Lower',
    'Cut 2 23',
    'Sum -2 2',
    'Finish']);

nikuldensCharity([
    'DinnerIsServed',
    'Make Upper',
    'Check Dinner',
    'Replace N M',
    'Finish']);
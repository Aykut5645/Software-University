function theImitationGame(commands) {
    let message = commands.shift();
    let currentCommand = commands.shift();

    while (currentCommand != 'Decode') {
        let commandAsArr = currentCommand.split('|');

        if (commandAsArr[0] == 'Move') {
            let moves = Number(commandAsArr[1]);
            let firstSubStr = message.substring(0, moves);
            let secondSubStr = message.substring(moves);
            message = secondSubStr.concat(firstSubStr);
        } else if (commandAsArr[0] == 'Insert') {
            let index = Number(commandAsArr[1]);
            let word = commandAsArr[2];

            let messageAsArr = message.split('');
            messageAsArr.splice(index, 0, word);
            message = messageAsArr.join('');
        } else if (commandAsArr[0] == 'ChangeAll') {
            let substr = commandAsArr[1];
            let replacement = commandAsArr[2];

            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }
        }

        currentCommand = commands.shift();
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
/*
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);*/
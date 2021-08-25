function secretChat(input) {
    let message = input.shift();
    let command;

    while ((command = input.shift()) != 'Reveal') {
        let [action, ...params] = command.split(':|:');

        if (action == 'InsertSpace') {
            let index = Number([params]);

            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index);
            message = firstPart + ' ' + secondPart;
            console.log(message);
        } else if (action == 'Reverse') {
            let substr = params[0];
            let index = message.indexOf(substr);

            if (index >= 0 && index < message.length) {
                let firstPart = message.substring(0, index);
                let needPart = message.substring(index, index + substr.length).split('').reverse().join('');
                let secondPart = message.substring(index + substr.length);
                message = firstPart + secondPart + needPart;
                console.log(message);
            } else {
                console.log('error');
            }

        } else if (action == 'ChangeAll') {
            let [substring, replacement] = params;

            while (message.indexOf(substring) != -1) {
                message = message.replace(substring, replacement);
            }

            console.log(message);
        }
    }

    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
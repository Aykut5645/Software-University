function passwordReset(input) {
    let password = input.shift();
    let command;

    while ((command = input.shift()) != 'Done') {
        let [action, ...params] = command.split(' ');

        if (action == 'TakeOdd') {
            let newText = '';
            for (let i = 1; i < password.length; i += 2) {
                newText += password[i];
            }
            password = newText;
            console.log(password);
        } else if (action == 'Cut') {
            let [index, length] = params;
            [index, length] = [Number(index), Number(length)];

            let leftSide = password.substring(0, index);
            let rightSide = password.substring(index + length);
            password = leftSide.concat(rightSide);

            console.log(password);
        } else if (action == 'Substitute') {
            let [substring, substitute] = params;

            if (password.includes(substring)) {
                while (password.indexOf(substring) != -1) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }

    console.log(`Your password is: ${password}`);
}

passwordReset([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])

passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'])
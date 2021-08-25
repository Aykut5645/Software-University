function messageTranslator(input) {
    let n = Number(input.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g;
    let digits = [];

    for (let i = 0; i < n; i++) {
        let line = input[i];
        let match = pattern.exec(line);

        if (match) {
            for (let j = 0; j < match.groups.message.length; j++) {
                digits.push(match.groups.message.charCodeAt(j));
            }

            console.log(`${match.groups.command}: ${digits.join(' ')}`);
        } else {
            console.log('The message is invalid');
        }

        match = pattern.exec(line);
    }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]']);
messageTranslator(['3', 'go:[outside]', '!drive!:YourCarToACarWash', '!Watch!:[LordofTheRings]']);
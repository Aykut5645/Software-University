function tseamAccount(arr) {
    let sequenceOfGames = arr.shift().split(' ');
    let commands = arr;

    let index = 0;
    let currentCommand = commands[index];

    while (currentCommand != 'Play!') {
        currentCommand = commands[index].split(' ');
        let action = currentCommand[0];
        let gameName = currentCommand[1];

        if (action == 'Install') {
            if (!sequenceOfGames.includes(gameName)) {
                sequenceOfGames.push(gameName);
            }
        } else if (action == 'Uninstall') {
            if (sequenceOfGames.includes(gameName)) {
                let gameIndex = sequenceOfGames.indexOf(gameName);
                sequenceOfGames.splice(gameIndex, 1);
            }
        } else if (action == 'Update') {
            if (sequenceOfGames.includes(gameName)) {
                let gameIndex = sequenceOfGames.indexOf(gameName);
                sequenceOfGames.splice(gameIndex, 1);
                sequenceOfGames.push(gameName);
            }
        } else if (action == 'Expansion') {
            let secondCommand = gameName.split('-')
            let name = secondCommand[0];
            let expansion = secondCommand[1];
            if (sequenceOfGames.includes(name)) {
                let indexName = sequenceOfGames.indexOf(name);
                sequenceOfGames.splice(indexName + 1, 0, `${name}:${expansion}`);
            }
        }

        index++;
        currentCommand = commands[index];
    }

    console.log(sequenceOfGames.join(' '));
}
/*
tseamAccount(['CS WoW Diablo',
    'Expansion CS-Go',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Play!']
);*/
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
);
function starEnigma(input) {
    let linesCount = Number(input.shift());
    let starPattern = /[star]/gi;
    let newLines = [];

    for (let line of input) {
        let newLine = '';
        let starCount = line.match(starPattern) && line.match(starPattern).length;

        for (let i = 0; i < line.length; i++) {
            let ascNum = line.charCodeAt(i);
            newLine += String.fromCharCode(ascNum - starCount);
        }

        newLines.push(newLine);
    }

    let obj = {
        'Attacked planets': [],
        'Destroyed planets': [],
    };

    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->\d+/g;

    for (let i = 0; i < linesCount; i++) {
        let match = planetPattern.exec(newLines[i]);

        if (match && match.groups.attackType == 'A') {
            obj['Attacked planets'].push(match.groups.name);
        } else if (match && match.groups.attackType == 'D') {
            obj['Destroyed planets'].push(match.groups.name);
        }

        match = planetPattern.exec(newLines[i]);
    }

    Object.entries(obj).forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        kvp[1].sort((a, b) => a.localeCompare(b)).forEach(planet => {
            console.log(`-> ${planet}`);
        });
    });
}

starEnigma([ '4', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR', "tt(''DGsvywgerx>6444444444%H%1B9444", 'EHfsytsnhf?8555&I&2C9555SR']);
/*
solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
*/
function thePianist(input) {
    let piecesCount = Number(input[0]);
    let initialPieces = {};

    for (let i = 1; i <= piecesCount; i++) {
        let line = input[i].split('|');

        initialPieces[line[0]] = {
            'Composer': line[1],
            'Key': line[2],
        };
    }

    for (let i = piecesCount + 1; i < input.length; i++) {
        if (input[i] == 'Stop') {
            break;
        }
        let commands = input[i].split('|');

        if (commands[0] == 'Add') {
            let [command, piece, composer, key] = commands;

            if (initialPieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                initialPieces[piece] = {
                    'Composer': composer,
                    'Key': key,
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (commands[0] == 'Remove') {
            let [command, piece] = commands;

            if (initialPieces.hasOwnProperty(piece)) {
                delete initialPieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (commands[0] == 'ChangeKey') {
            let [command, piece, newKey] = commands;

            if (initialPieces.hasOwnProperty(piece)) {
                initialPieces[piece]['Key'] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    Object.keys(initialPieces).sort((a, b) => a.localeCompare(b)).forEach(piece => {
        console.log(`${piece} -> Composer: ${initialPieces[piece]['Composer']}, Key: ${initialPieces[piece]['Key']}`);
    });
}
/*
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
*/

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);
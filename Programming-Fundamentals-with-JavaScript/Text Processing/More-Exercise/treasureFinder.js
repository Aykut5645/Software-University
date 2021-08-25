function treasureFinder(input) {
    let keys = input.shift().split(' ').map(Number);
    let message;

    while ((message = input.shift()) != 'find') {
        let descryptMess = '';
        let j = 0;

        for (let i = 0; i < message.length; i++) {
            let asciiNum = message[i].charCodeAt();
            
            if (j >= keys.length) {
                j = 0;
            }
            
            descryptMess += String.fromCharCode(asciiNum - keys[j]);
            j++;
        }
        let pattern = /.*&(?<type>.+)&.*<(?<coordinates>.+)>/g;
        let match = pattern.exec(descryptMess);

        if (match) {
            console.log(`Found ${match.groups.type} at ${match.groups.coordinates}`);
        }
    }
}

treasureFinder([
    '1 2 1 3',
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    'find'
]);

treasureFinder([
    '1 4 2 5 3 2 1',
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    'find'
])


/*
function treasureFinder(input) {
    let keys = input.shift().split(' ').map(Number);
    let message;

    while ((message = input.shift()) != 'find') {
        let descryptMess = '';
        let j = 0;

        for (let i = 0; i < message.length; i++) {
            let asciiNum = message[i].charCodeAt();
            
            if (j >= keys.length) {
                j = 0;
            }
            
            descryptMess += String.fromCharCode(asciiNum - keys[j]);
            j++;
        }
        
        let firstPattern = /&.+&/g;
        let secondPattern = /<.+>/g;

        let firstMatch = descryptMess.match(firstPattern);
        let secondMatch = descryptMess.match(secondPattern);

        if (firstMatch && secondMatch) {
            console.log(`Found ${firstMatch[0].substring(1, firstMatch[0].length - 1)} at ${secondMatch[0].substring(1, secondMatch[0].length - 1)}`);
        }
    }
}*/

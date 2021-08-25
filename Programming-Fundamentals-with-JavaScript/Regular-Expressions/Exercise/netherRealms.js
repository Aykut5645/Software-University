function netherRealms([input]) {
    let inputArr = input.split(/[, ]+/g);
    let demons = {};

    for (const line of inputArr) {
        let healthAsLetters = line.match(/[^\d\-\/*.]/g).join('');
        let digitsAsLetters = line.match(/[+-]?\d[\.\d+]*/g);
        let operators = line.match(/[*/]/g);

        let health = 0;
        let damages = 0;

        if (healthAsLetters) {
            for (let i = 0; i < healthAsLetters.length; i++) {
                health += healthAsLetters.charCodeAt(i);
            }
        }

        if (digitsAsLetters) {
            digitsAsLetters = digitsAsLetters.map(Number);
            damages = digitsAsLetters.reduce((a, b) => a + b);
        }

        if (operators) {
            for (let operator of operators) {
                if (operator == '*') {
                    damages *= 2;
                } else {
                    damages /= 2;
                }
            }
        }

        demons[line] = {
            health: health,
            damage: damages,
        };
    }

    
    Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0])).forEach(kvp => {
        console.log(`${kvp[0]} - ${demons[kvp[0]]['health']} health, ${demons[kvp[0]]['damage'].toFixed(2)} damage`);
    });
}

//netherRealms(['M3ph-0.5s-0.5t0.0**']);
//netherRealms(['M3ph1st0**, Azazel']);
netherRealms(['Gos/ho']);
function solve(input) {
    let gladPool = {};
    let line;

    while ((line = input.shift()) != 'Ave Cesar') {

        if (line.includes('->')) {
            let [name, techn, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!gladPool.hasOwnProperty(name)) {
                gladPool[name] = { [techn]: skill };
            } else {
                if (gladPool.hasOwnProperty(name) && gladPool[name].hasOwnProperty(techn)) {
                    if (gladPool[name][techn] < techn) {
                        gladPool[name][techn] = techn;
                    }
                } else if (gladPool.hasOwnProperty(name) && !gladPool[name].hasOwnProperty(techn))
                    gladPool[name][techn] = skill;
            }
        } else if (line.includes('vs')) {
            let [firstGlad, secondGlad] = line.split(' vs ');

            if (gladPool.hasOwnProperty(firstGlad) && gladPool.hasOwnProperty(secondGlad)) {
                let firstGladKeys = Object.keys(gladPool[firstGlad]);
                let secondGladKeys = Object.keys(gladPool[secondGlad]);
                let totalArray = firstGladKeys.concat(secondGladKeys);

                if (findGladKeys(totalArray) != undefined) {
                    let key = findGladKeys(totalArray);

                    if (gladPool[firstGlad][key] == gladPool[firstGlad][key]) {
                        continue;
                    } else {
                        if (gladPool[firstGlad][key] < gladPool[secondGladKeys][key]) {
                            delete gladPool[firstGlad]
                        } else {
                            delete gladPool[secondGlad];
                        }
                    }
                }
            }
        }
    }

    gladPool = calculateSums(gladPool);

    Object.keys(gladPool).sort((a, b) => gladPool[b]['Sum'] - gladPool[a]['Sum'] || a.localeCompare(b)).forEach(glad => {
        console.log(`${glad}: ${gladPool[glad]['Sum']} skill`);
        delete gladPool[glad]['Sum'];
        Object.entries(gladPool[glad]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(kvp => {
            console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
        });
    });

    function calculateSums(obj) {
        for (const gladName in obj) {
            let gladInfo = obj[gladName];
            let sum = 0;

            for (const techn in gladInfo) {
                sum += gladInfo[techn];
            }

            obj[gladName]['Sum'] = sum;
        }
        return obj;
    }

    function findGladKeys(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (newArr.includes(arr[i])) {
                return arr[i];
            }
            newArr.push(arr[i]);
        }
    }
}

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
/*
arenaTier ([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar']);*/

/*
    function solve(input) {
        let obj = {};
     
        for (const line of input) {
            if (line === 'Ave Cesar') {
                break;
            }
            let element = line.split(' ');
            if (element[1] === '->') {
                let theLine = line.split(' -> ');
                let gladiator = theLine[0];
                let technique = theLine[1];
                let skillAmount = Number(theLine[2]);
                if (!obj.hasOwnProperty(gladiator)) {
                    obj[gladiator] = {};
                }
                if (!obj[gladiator].hasOwnProperty(technique)
                    || obj[gladiator][technique] < skillAmount) {
                    obj[gladiator][technique] = skillAmount;
                }
            } else if (element[1] === 'vs') {
                let theLine = line.split(' vs ');
                let gladiator1 = theLine[0];
                let gladiator2 = theLine[1];
                if (obj.hasOwnProperty(gladiator1)
                    && obj.hasOwnProperty(gladiator2)) {
                    let gladiator1Techniques = (obj[gladiator1]);
                    let gladiator2Techniques = (obj[gladiator2]);
                    for (const key in gladiator1Techniques) {
     
                        if (gladiator2Techniques.hasOwnProperty(key)) {
                            if (gladiator1Techniques[key] > gladiator2Techniques[key]) {
                                delete obj[gladiator2];
                            } else if (gladiator1Techniques[key] < gladiator2Techniques[key]) {
                                delete obj[gladiator1];
                            }
                        }
                    }
                }
            }
        }
        for (const key in obj) {
            let sum = 0;
            let outsideObj = obj[key];
            for (const insideKey in outsideObj) {
                sum += outsideObj[insideKey];
            }
            outsideObj['sum'] = sum;
        }
        console.log(obj);
     
        Object.entries(obj)
            .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
            .forEach(element => {
                console.log(`${element[0]}: ${element[1].sum} skill`);
                delete element[1].sum;
                Object.entries(element[1])
                    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                    .forEach(element => {
                        console.log(` - ${element[0]} <!> ${element[1]}`);
                    });
            });
     }
    
arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
*/



/*
function arenaTier(input) {
    let gladiators = {};
    let line = input.shift();
    let lastTechnique = '';
    while (!line.includes('Ave Cesar')) {
        if(!line.includes('vs')){
            
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);
 
            if(!gladiators.hasOwnProperty(name)){
                gladiators[name] = {};
                gladiators[name][technique] = skill;
                gladiators[name]['skills'] = skill;
 
            } else {
                if((gladiators[name][lastTechnique] <= skill) || (!gladiators[name].hasOwnProperty(technique)))
                {
                    gladiators[name][technique] = skill;
                    gladiators[name]['skills'] += skill;
                }
            }
            lastTechnique = technique;
        } else {
            let [firstName, secondName] = line.split(` vs `);
            
            if(gladiators.hasOwnProperty(firstName) && gladiators.hasOwnProperty(secondName)){
 
                let isBattle = false;
                let firstGladiatorTechniques = Object.entries(gladiators[firstName]);
                let secondGladiatorTechniques = Object.entries(gladiators[secondName]);
                secondGladiatorTechniques.forEach(kvp => {
                    for (let firstGladKvp of firstGladiatorTechniques) {
                        if(firstGladKvp.includes(kvp[0]) && kvp[0] !== 'skills'){
                            isBattle = true;
                        }
                    }
                })
                if(isBattle) {
                    
                    if (gladiators[firstName]['skills'] > gladiators[secondName]['skills']) {
                        delete gladiators[secondName];
                    } else {
                        delete gladiators[firstName];
                    }
                }
            }
        }
        line = input.shift()
    }
    Object.entries(gladiators).sort((a,b) => b[1]['skills'] - a[1]['skills'] || a[0].localeCompare(b[0])).forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1]['skills']} skill`);
        Object.entries(kvp[1]).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(techn => {
            if(techn[0] !== 'skills'){
                console.log(`- ${techn[0]} <!> ${techn[1]}`);
            }
        })
    })
}
*/
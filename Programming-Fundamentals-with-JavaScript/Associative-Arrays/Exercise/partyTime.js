function partyTime(inputArr) {    
    let obj = {
        VIP: [],
        regular: [],
    };
    
    let currentGuest = inputArr.shift();

    while (currentGuest != 'PARTY') {
        let symbol = currentGuest[0];

        if (isNaN(symbol)) {
            obj['regular'].push(currentGuest);
        } else {
            obj['VIP'].push(currentGuest);
        }

        currentGuest = inputArr.shift();
    }
    
    inputArr.forEach(name => {
        if (obj['VIP'].includes(name)) {
            let index = obj['VIP'].indexOf(name);
            obj['VIP'].splice(index, 1);
        } else if (obj['regular'].includes(name)) {
            if (obj['regular'].includes(name)) {
                let index = obj['regular'].indexOf(name);
                obj['regular'].splice(index, 1);
            }
        }
    });

    console.log(obj['VIP'].length + obj['regular'].length);
    console.log(obj['VIP'].join('\n') + '\n' + obj['regular'].join('\n'));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);
/*
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);*/
function santasGifts(input) {
    let n = Number(input.shift());
    let houses = input.shift().split(' ').map(Number);
    let currentInd = 0;

    for (let i = 0; i < n; i++) {
        let [action, ...params] = input.shift().split(' ');
        params = params.map(Number);
        
        if (action == 'Forward') {
            let numOfSteps = params[0];

            if (currentInd + numOfSteps >= 0 && currentInd + numOfSteps < houses.length) {
                currentInd = currentInd + numOfSteps;
                houses.splice(currentInd, 1);
            }
        } else if (action == 'Back') {
            let numOfSteps = params[0];

            if (currentInd - numOfSteps >= 0 && currentInd - numOfSteps < houses.length) {
                currentInd = currentInd - numOfSteps;
                houses.splice(currentInd, 1);
            }
        } else if (action == 'Gift') {
            let index = params[0];
            let houseNum = params[1];

            if (index >= 0 && index < houses.length) {
                currentInd = index;
                houses.splice(currentInd, 0, houseNum);
            }
        } else if (action == 'Swap') {
            let firstHouseNum = params[0];
            let secondHouseNum = params[1];
            
            if (houses.includes(firstHouseNum) && houses.includes(secondHouseNum)) {
                let firstHouseInd = houses.indexOf(firstHouseNum);
                let secondHouseInd = houses.indexOf(secondHouseNum);

                houses[firstHouseInd] = secondHouseNum;
                houses[secondHouseInd] = firstHouseNum;
            }
        }
    }

    console.log(`Position: ${currentInd}`);
    console.log(houses.join(', '));
}


santasGifts([
    '5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3'
]);

santasGifts([
    '6',
    '50 40 25 63 78 54 66 77 24 87',
    'Forward 4',
    'Back 3',
    'Forward 3',
    'Gift 2 88',
    'Swap 50 87',
    'Forward 1'
]);
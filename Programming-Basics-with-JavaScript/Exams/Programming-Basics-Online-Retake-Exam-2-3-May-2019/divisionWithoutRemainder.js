function divisionWithoutRemainder(input) {
    let index = 0;
    let numberCount = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;

    for (let i = numberCount; i >= 1; i--) {
        let currentNumber = Number(input[index]);
        index++;

        if (currentNumber % 2 == 0) {
            p1Counter++;
        } 
        
        if (currentNumber % 3 == 0) {
            p2Counter++;
        } 
        
        if (currentNumber % 4 == 0) {
            p3Counter++;
        }
    }

    let p1Percent = (p1Counter / numberCount) * 100;
    let p2Percent = (p2Counter / numberCount) * 100;
    let p3Percent = (p3Counter / numberCount) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
}

divisionWithoutRemainder([
    '10', '680', '2',
    '600', '200', '800',
    '799', '199', '46',
    '128', '65'
]);
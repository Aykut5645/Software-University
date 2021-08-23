function solve(input) {
    let moveCount = Number(input[0]);

    let totalPoints = 0;

    let firstCounter = 0;
    let secondCounter = 0;
    let thirdCounter = 0;
    let fourthCounter = 0;
    let fifthCounter = 0;
    let invalidCounter = 0;
    

    for (let i = 1; i <= moveCount; i++) {
        let currentNumber = Number(input[i]);

        let currentPoints = 0;

        if (currentNumber >= 0 && currentNumber <= 9) {
            currentPoints = currentNumber * 0.2;
            firstCounter++;
        } else if (currentNumber > 9 && currentNumber <= 19) {
            currentPoints = currentNumber * 0.3;
            secondCounter++;
        } else if (currentNumber > 19 && currentNumber <= 29) {
            currentPoints = currentNumber * 0.4;
            thirdCounter++;
        } else if (currentNumber > 29 && currentNumber <= 39) {
            currentPoints += 50;
            fourthCounter++;
        } else if (currentNumber > 39 && currentNumber <= 50) {
            currentPoints += 100;
            fifthCounter++;
        }

        if (currentNumber < 0 || currentNumber > 50) {
            totalPoints /= 2;
            invalidCounter++;
            continue;
        }

        totalPoints += currentPoints;
    }

    let firstPercent = (firstCounter / moveCount) * 100;
    let secondPercent = (secondCounter / moveCount) * 100;
    let thirdPercent = (thirdCounter / moveCount) * 100;
    let fourthPercent = (fourthCounter / moveCount) * 100;
    let fifthPercent = (fifthCounter / moveCount) * 100;
    let invalidPercent = (invalidCounter / moveCount) * 100;

    console.log(`${totalPoints.toFixed(2)}`);
    console.log(`From 0 to 9: ${firstPercent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${secondPercent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${thirdPercent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${fourthPercent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fifthPercent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidPercent.toFixed(2)}%`);
}

solve([
    '10', '43', '57',
    '-12', '23', '12',
    '0', '50', '40',
    '30', '20'
]);
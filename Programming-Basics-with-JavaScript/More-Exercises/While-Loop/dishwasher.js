function dishwasher(input) {
    let index = 0;
    let detergentCount = Number(input[index]);
    index++;

    let bottlePrice = 750;
    let needPlateDetergent = 5;
    let needPotDetergent = 15;

    let amountDetergent = bottlePrice * detergentCount;

    let vesselsCount = input[index];
    index++;

    let dayCounter = 0;
    let plateCount = 0;
    let potCount = 0;

    while (vesselsCount != "End" && vesselsCount != undefined) {
        vesselsCount = Number(vesselsCount);
        dayCounter++;

        if (dayCounter % 3 == 0) {
            potCount += vesselsCount;
            vesselsCount *= needPotDetergent;
        } else {
            plateCount += vesselsCount;
            vesselsCount *= needPlateDetergent;
        }

        amountDetergent -= vesselsCount;

        vesselsCount = input[index];
        index++;
    }

    if (amountDetergent < 0) {
        amountDetergent = Math.abs(amountDetergent);
        console.log(`Not enough detergent, ${amountDetergent} ml. more necessary!`);
    } else {
        console.log("Detergent was enough!");
        console.log(`${plateCount} dishes and ${potCount} pots were washed.`);
        console.log(`Leftover detergent ${amountDetergent} ml.`);
    }
}

dishwasher([
    '1',  '10', '15',
    '10', '12', '13',
    '30'
  ]);
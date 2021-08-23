function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++;

    let musalaCount = 0;
    let montBlancCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 1; i <= groupCount; i++) {
        let currentGroup = Number(input[index]);
        index++;

        if (currentGroup <= 5) {
            musalaCount += currentGroup;
        } else if (currentGroup > 5 && currentGroup <= 12) {
            montBlancCount += currentGroup;
        } else if (currentGroup > 12 && currentGroup <= 25) {
            kilimanjaroCount += currentGroup;
        } else if (currentGroup > 25 && currentGroup <= 40) {
            k2Count += currentGroup;
        } else if (currentGroup > 40) {
            everestCount += currentGroup;
        }
    }

    let totalCount = musalaCount + montBlancCount + kilimanjaroCount + k2Count + everestCount;
    
    let musalaCountPercent = (musalaCount / totalCount) * 100;
    let montBlancCountPercent = (montBlancCount / totalCount) * 100;
    let kilimanjaroCountPercent = (kilimanjaroCount / totalCount) * 100;
    let k2CountPercent = (k2Count / totalCount) * 100;
    let everestCountPercent = (everestCount / totalCount) * 100;

    console.log(`${musalaCountPercent.toFixed(2)}%`);
    console.log(`${montBlancCountPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroCountPercent.toFixed(2)}%`);
    console.log(`${k2CountPercent.toFixed(2)}%`);
    console.log(`${everestCountPercent.toFixed(2)}%`);
}

trekkingMania([
    '10', '10', '5',
    '1', '100', '12',
    '26', '17', '37',
    '40', '78'
]);
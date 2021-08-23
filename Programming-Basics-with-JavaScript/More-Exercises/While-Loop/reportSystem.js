function reportSystem(input) {
    let index = 0;
    let expectationSum = Number(input[index]);
    index++;

    let cacheSum = 0;
    let cardSum = 0;
    let cacheCount = 0;
    let cardCount = 0;
    let totalSum = 0;

    let counter = 0;

    let currentTransaction = input[index];
    index++;

    while (currentTransaction != "End" && currentTransaction != undefined) {
        counter++;

        currentTransaction = Number(currentTransaction);

        if (counter % 2 == 1 && (currentTransaction < 10 || currentTransaction <= 100)) {
            console.log("Product sold!");
            totalSum += currentTransaction;
            cacheSum += currentTransaction;
            cacheCount++;
        } else if (counter % 2 == 0 && (currentTransaction > 100 || currentTransaction >= 10)) {
            console.log("Product sold!");
            totalSum += currentTransaction;
            cardSum += currentTransaction;
            cardCount++;
        } else {
            console.log("Error in transaction!");
        }

        currentTransaction = input[index];
        index++;
    }

    let averageCacheSum = cacheSum / cacheCount;
    let averageCardSum = cardSum / cardCount;

    if (expectationSum <= totalSum) {
        console.log(`Average CS: ${averageCacheSum.toFixed(2)}`);
        console.log(`Average CC: ${averageCardSum.toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem([ '600', '86', '150', '98', '227', 'End' ]);
function santasCookies(params) {
    let amountOfBatches = Number(params.shift());
    let singleCookieInGrams = 25;
    let cup = 140;
    let smallSpoon = 10;
    let bigSpoon = 20;
    let cookiesPerBox = 5;
    let totalBoxes = 0;

    for (let i = 1; i <= amountOfBatches; i++) {
        let flourInGrams = Number(params.shift());
        let sugarInGrams = Number(params.shift());
        let cocoaInGrams = Number(params.shift());

        let flourCups = Math.floor(flourInGrams / cup);
        let sugarSpoons = Math.floor(sugarInGrams / bigSpoon);
        let cocoaSpoons = Math.floor(cocoaInGrams / smallSpoon);

        if ((flourCups && sugarSpoons && cocoaSpoons) <= 0) {
            console.log(`Ingredients are not enough for a box of cookies.`);
            continue;
        } else {
            let totalCookiesPerBake =
                ((cup + smallSpoon + bigSpoon) *
                    Math.min(flourCups, sugarSpoons, cocoaSpoons)) /
                singleCookieInGrams;
            let boxesPerBatch = Math.floor(totalCookiesPerBake / cookiesPerBox);
            totalBoxes += boxesPerBatch;

            console.log(`Boxes of cookies: ${Math.floor(boxesPerBatch)}`);
        }
    }
    console.log(`Total boxes: ${Math.floor(totalBoxes)}`);
}

santasCookies([
    '2', '200',
    '300', '500',
    '100', '200',
    '50'
]);

santasCookies(['1', '1400', '200', '100']);
function poolDay(input) {
    let peopleCount = Number(input[0]);
    let inputTax = Number(input[1]);
    let duckChairPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let totalTax = inputTax * peopleCount;

    let duckChairCount = Math.ceil((75 / 100) * peopleCount);
    let umbrellaCount = Math.ceil(peopleCount / 2);

    let totalDuckChairPrice = duckChairPrice * duckChairCount;
    let totalUmbrellaPrice = umbrellaPrice * umbrellaCount;

    let finalSum = totalTax + totalDuckChairPrice + totalUmbrellaPrice;

    console.log(`${finalSum.toFixed(2)} lv.`);
}

poolDay([ '21', '5.50', '4.40', '6.20' ]);
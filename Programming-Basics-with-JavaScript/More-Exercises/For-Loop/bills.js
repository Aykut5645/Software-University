function bills(input) {
    let monthCount = Number(input[0]);

    let electricityEveryMonth = 0;
    let electricityEveryMonthSum = 0;

    let water = 20;
    let internet = 15;

    let others = 0;
    let othersSum = 0;

    let average = 0;

    for (let i = 1; i <= monthCount; i++) {
        electricityEveryMonth = Number(input[i]);

        others = (electricityEveryMonth + water + internet) + ((electricityEveryMonth + water + internet) * 0.2);
        othersSum += others;

        electricityEveryMonthSum += electricityEveryMonth;
    }

    water *= monthCount;
    internet *= monthCount;


    average = (othersSum + electricityEveryMonthSum + water + internet) / monthCount;

    console.log(`Electricity: ${electricityEveryMonthSum.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv `);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${othersSum.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}

bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ]);
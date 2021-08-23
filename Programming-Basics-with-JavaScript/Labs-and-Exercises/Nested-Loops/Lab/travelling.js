function travelling(input) {
    let index = 0;
    let destination = input[index];
    index++;

    while (destination != "End") {
        budgetNeed = Number(input[index]);
        index++;

        let currentSum = 0;

        while (budgetNeed > currentSum) {
            let currentMoney = Number(input[index]);
            index++;

            currentSum += currentMoney;
        }

        console.log(`Going to ${destination}!`);

        destination = input[index];
        index++;
    }
}

travelling([
    'Greece', '1000', '200',
    '200', '300', '100',
    '150', '240', 'Spain',
    '1200', '300', '500',
    '193', '423', 'End',
    ''
]);
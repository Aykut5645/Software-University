function movieStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let actorName = input[index];
    index++;

    while (actorName != "ACTION") {

        let actorNameLength = actorName.length;

        if (actorNameLength > 15) {
            budget -= budget * 0.2;
            actorName = input[index];
            index++;
            continue;
        }

        let currentPay = Number(input[index]);
        index++;

        if (actorNameLength <= 15) {
            budget -= currentPay;
        } 
        
        actorName = input[index];
        index++;
    }

    if (budget < 0) {
        budget = Math.abs(budget);
        console.log(`We need ${budget.toFixed(2)} leva for our actors.`);
    } else {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}

movieStars([
    "100.00",
    "Bret Rogers",
    "100000.56",
    "French Montana",
    "1000000",
    "Greg Pim",
    "40000",
    "ACTION"
]);
function solve(input) {
    let startingYield = input;
    let amount = 0;
    let days = 0;

    while (startingYield >= 100) {
        days++;
        amount += startingYield - 26;
        startingYield -= 10;

    }

    if (amount >= 26) {
        amount -= 26;
    }

    console.log(`${days}`);
    console.log(`${amount}`);
}

solve(111);
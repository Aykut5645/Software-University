function softUniBarIncome(lines) {
    let totalIncome = 0;

    let pattern = /%(?<costumer>[A-Z][a-z]+)%[^\|\$%\.]*<(?<product>\w+)>[^\|\$%\.]*\|(?<count>[0-9]+)\|[^\|\$%\.\d+]*(?<price>[0-9]+([.0-9]+)?)\$/g;

    for (const line of lines) {
        let match = pattern.exec(line);

        if (match) {
            let currentIncome = Number(match.groups.count) * Number(match.groups.price);
            console.log(`${match.groups.costumer}: ${match.groups.product} - ${currentIncome.toFixed(2)}`);
            totalIncome += currentIncome;
        }

        match = pattern.exec(line);
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

/*
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
*/

softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);

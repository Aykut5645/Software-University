function furniture(input) {
    let totalSum = 0;
    let result = 'Bought furniture:';
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+(\.[0-9]+)?)!(?<quantity>[0-9]+)/g;
    
    for (const line of input) {
        let match = pattern.exec(line);
        if (match) {
            result += '\n' + match.groups.name;
            totalSum += Number(match.groups.price) * Number(match.groups.quantity);
        }
        match = pattern.exec(line);
    }

    console.log(result);
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);


/*
function solve(input) {
    let totalSum = 0;
    let result = 'Bought furniture:';

    for (const line of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[0-9]+(\.[0-9]+)?)!(?<quantity>[0-9]+)/g;
        let match = pattern.exec(line);

        if (match) {
            result += '\n' + match.groups.name;
            totalSum += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }

    console.log(result);
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
*/
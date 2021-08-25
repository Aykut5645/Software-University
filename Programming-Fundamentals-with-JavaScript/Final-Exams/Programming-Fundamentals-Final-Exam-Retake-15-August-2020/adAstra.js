function adAstra([input]) {
    let pattern = /([#|])(?<name>[A-Z a-z]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g;
    let totalCalories = 0;
    let match = pattern.exec(input);
    let items = [];

    while (match) {
        items.push(`Item: ${match.groups.name}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
        totalCalories += Number(match.groups.calories);
        match = pattern.exec(input);
    }

    console.log(`You have food to last you for: ${Math.trunc(totalCalories / 2000)} days!`);
    items.forEach(item => {
        console.log(item);
    });
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);


/*
function solve([input]) {
    let pattern = /(#|\|)(?<name>[A-Z a-z]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g;
    let totalCalories = 0;
    let firstMatches = pattern.exec(input);

    while (firstMatches) {
        totalCalories += Number(firstMatches.groups.calories);
        firstMatches = pattern.exec(input);
    }

    console.log(`You have food to last you for: ${Math.trunc(totalCalories / 2000)} days!`);

    let secondMatches = pattern.exec(input);

    while (secondMatches) {
        console.log(`Item: ${secondMatches.groups.name}, Best before: ${secondMatches.groups.date}, Nutrition: ${secondMatches.groups.calories}`);
        secondMatches = pattern.exec(input);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
*/
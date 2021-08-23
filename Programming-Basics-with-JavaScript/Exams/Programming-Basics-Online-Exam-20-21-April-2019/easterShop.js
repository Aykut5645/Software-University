function easterShop(input) {
    let index = 0;
    let startCount = Number(input[index]);
    index++;

    let currentAction = input[index];
    index++;

    let notEnough = false;
    let buyCount = 0;

    while (currentAction != "Close") {
        let currentCount = Number(input[index]);
        index++;

        if (currentAction == "Buy" && startCount < currentCount) {
            notEnough = true;
            break;
        }

        if (currentAction == "Buy") {
            buyCount += currentCount;
            startCount -= currentCount;
        } else if (currentAction == "Fill") {
            startCount += currentCount;
        }

        currentAction = input[index];
        index++;
    }

    if (notEnough) {
        console.log("Not enough eggs in store!");
        console.log(`You can buy only ${startCount}.`);
    } else {
        console.log("Store is closed!");
        console.log(`${buyCount} eggs sold.`);
    }
}

easterShop([
    '20', 'Fill',
    '30', 'Buy',
    '15', 'Buy',
    '20', 'Close'
  ]);
function easterEggsBattle(input) {
    let index = 0;
    let firstPlayerCount = Number(input[index]);
    index++;

    let secondPlayerCount = Number(input[index]);
    index++;

    let currentBattle = input[index];
    index++;

    while (currentBattle != "End of battle") {

        if (currentBattle == "one") {
            secondPlayerCount--;
        } else if (currentBattle == "two") {
            firstPlayerCount--;
        }

        if (firstPlayerCount == 0 || secondPlayerCount == 0) {
            break;
        } 

        currentBattle = input[index];
        index++;
    }

    if (firstPlayerCount == 0) {
        console.log(`Player one is out of eggs. Player two has ${secondPlayerCount} eggs left.`);
    } else if (secondPlayerCount == 0) {
        console.log(`Player two is out of eggs. Player one has ${firstPlayerCount} eggs left.`);
    } else {
        console.log(`Player one has ${firstPlayerCount} eggs left.`);
        console.log(`Player two has ${secondPlayerCount} eggs left.`);
    }
}

easterEggsBattle([
    '6',   '3',   'one',
    'two', 'two', 'one',
    'one', '',    '',
    '',    ''
  ])
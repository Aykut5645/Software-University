function gameNumberWars(input) {
    let index = 0;
    let firstPlayer = input[index];
    index++;
    
    let secondPlayer = input[index];
    index++;

    let firstCard = input[index];
    index++;

    let secondCard = input[index];
    index++;

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let equal = false;
    let winner = "";
    let points = "";

    while (firstCard != "End of game" && secondCard != "End of game" && firstCard != undefined) {

        firstCard = Number(firstCard);
        secondCard = Number(secondCard);

        let difference = Math.abs(firstCard - secondCard);

        if (firstCard > secondCard) {
            firstPlayerPoints += difference;
        } else if (firstCard < secondCard) {
            secondPlayerPoints += difference;
        } else {
            equal = true;
            break;
        }

        firstCard = input[index];
        index++;

        secondCard = input[index];
        index++;
    }

    if (equal) {

        firstCard = input[index];
        index++;

        secondCard = input[index];
        index++;

        if (firstCard > secondCard) {
            winner = firstPlayer;
            points = firstPlayerPoints;
        } else if (firstCard < secondCard) {
            winner = secondPlayer;
            points = secondPlayerPoints;
        }

        console.log("Number wars!");
        console.log(`${winner} is winner with ${points} points`);
    }

    if (!(firstCard != "End of game" && secondCard != "End of game")) {
        console.log(`${firstPlayer} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayer} has ${secondPlayerPoints} points`);
    }
}

gameNumberWars([
    'Aleks', 'Georgi', '4',
    '5',     '3',      '2',
    '4',     '3',      '4',
    '4',     '5',      '2',
    '',      '',       ''
  ]);
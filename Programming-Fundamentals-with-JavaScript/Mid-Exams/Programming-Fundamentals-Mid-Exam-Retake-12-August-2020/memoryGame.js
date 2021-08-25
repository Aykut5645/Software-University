function solve(arr) {
    let elements = arr.shift().split(' ');
    let line;
    let moves = 0;

    while ((line = arr.shift()) != 'end') {
        moves += 1;
        let [firstInd, secondInd] = line.split(' ').map(Number);

        if ((firstInd >= 0 && firstInd < elements.length) && (secondInd >= 0 && secondInd < elements.length) && firstInd != secondInd) {
            if (elements[firstInd] == elements[secondInd]) {
                console.log(`Congrats! You have found matching elements - ${elements[firstInd]}!`);
                elements.splice(Math.max(firstInd, secondInd), 1);
                elements.splice(Math.min(firstInd, secondInd), 1);
            } else  {
                console.log('Try again!');
            }
        } else {
            elements.splice(elements.length / 2, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        }

        if (elements.length == 0) {
            return console.log(`You have won in ${moves} turns!`);
        }
    }

    console.log('Sorry you lose :(');
    console.log(elements.join(' '));
}

memoryGame
([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);

//memoryGame([
//    "a 2 4 a 2 4",
//    "0 3",
//    "0 2",
//    "0 1",
//    "0 1",
//    "end"
//]);

//memoryGame([
//    "a 2 4 a 2 4",
//    "4 0",
//    "0 2",
//    "0 1",
//    "0 1",
//    "end"
//]);
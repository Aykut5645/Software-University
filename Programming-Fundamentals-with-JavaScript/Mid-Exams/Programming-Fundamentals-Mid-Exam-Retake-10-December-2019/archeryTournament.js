function archeryTournament(arr) {
    let archeryField = arr.shift().split('|').map(Number);
    let commands = arr;

    let index = 0;
    let currentCommand = commands[index];

    let points = 0;

    while (currentCommand != 'Game over') {
        currentCommand = commands[index].split('@');
        let action = currentCommand[0];
        let startInd = Number(currentCommand[1]);
        let length = Number(currentCommand[2]);

        if (startInd >= 0 && startInd < archeryField.length) {
            if (action == 'Shoot Left') {
                let counter = 0;

                for (let i = startInd; i < archeryField.length; i--) {
                    counter++;

                    if (i == 0) {
                        i = archeryField.length;
                    }

                    if (counter == length + 1) {
                        if (archeryField[i] < 5) {
                            points += archeryField[i];
                            archeryField[i] = 0;
                        } else {
                            archeryField[i] -= 5;
                            points += 5;
                        }
                        break;
                    }
                }
            } else if (action == 'Shoot Right') {
                let counter = -1;

                for (let j = startInd; j < archeryField.length; j++) {
                    counter++;

                    if (j == archeryField.length - 1) {
                        j = -1;
                    }

                    if (counter == length) {
                        if (j == -1) {
                            j = archeryField.length - 1;
                        }
                        if (archeryField[j] < 5) {
                            points += archeryField[j];
                            archeryField[j] = 0;
                        } else {
                            archeryField[j] -= 5;
                            points += 5;
                        }
                        break;
                    }
                }
            }
        } else if (action == 'Reverse') {
            archeryField.reverse();
        }

        index++;
        currentCommand = commands[index];
    }

    console.log(archeryField.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}


archeryTournament([
    '10|10|10|10|10',
    'Shoot Right@6@5',
    'Shoot Right@4@5',
    'Shoot Left@0@2',
    'Reverse',
    'Game over',
    ''
]);


//archeryTournament([
//    '20|30|40|50|60',
//    'Shoot Right@4@15',
//    'Shoot Left@0@12',
//    'Shoot Left@6@5',
//    'Reverse',
//    'Game over',
//    ''
//]);





/*
function solve(input = []) {
    let targets = input.shift().split("|").map(Number);
    let points = 0;
    let commands;

    while ((commands = input.shift()) !== "Game over") {
      let tokens = commands.split("@");
      if (tokens[0] === "Shoot Left") {
        let index = +tokens[1];
        let length = +tokens[2];
        if (index >= 0 && index <= targets.length - 1) {
          let i = index - length;

          while (i < 0) {
            i = targets.length + i;
          }

          if (targets[i] >= 5) {
            targets[i] -= 5;
            points += 5;
          } else {
            points += targets[i];
            targets[i] = 0;
          }
        }
      }

      if (tokens[0] === "Shoot Right") {
        let index = +tokens[1];
        let length = +tokens[2];

        if (index >= 0 && index <= targets.length - 1) {
          let i = index + length;

          while (i >= targets.length - 1) {
            i = i - targets.length;
          }

          if (targets[i] >= 5) {
            targets[i] -= 5;
            points += 5;
          } else {
            points += targets[i];
            targets[i] = 0;
          }
        }
      }

      if (tokens[0] === "Reverse") {
        targets.reverse();
      }
    }

    console.log(targets.join(" - "));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
  }
*/